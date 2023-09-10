import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const APIKEY = 'AIzaSyBNamdjbUJji_JlBjtORVLXH0xb8YG_dYg'; 

export default function App() {
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async () => {
      // Solicitar permiso para la ubicación
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No se puede acceder a la ubicación');
        return;
      }

      // Obtener ubicación actual
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // Buscar psicólogos/terapeutas cerca de la ubicación actual
      const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=health&keyword=psychologist|therapist|mental_health&key=${APIKEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.results) {
        // Guardar solo los place_id de los resultados
        const placeIds = data.results.map(place => place.place_id);

        // Usar Promise.all para realizar solicitudes simultáneas para cada place_id
        const detailsPromises = placeIds.map(id => fetchPlaceDetails(id));

        // Esperar a que todas las solicitudes se completen
        const details = await Promise.all(detailsPromises);

        // Configurar los marcadores con la información detallada
        setMarkers(details);
      }
    })();
  }, []);

  const fetchPlaceDetails = async (placeId) => {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${APIKEY}`;
    const response = await fetch(detailsUrl);
    const data = await response.json();

    if (data && data.result) {
      return {
        latitude: data.result.geometry.location.lat,
        longitude: data.result.geometry.location.lng,
        title: data.result.name,
        description: data.result.vicinity,
        phone: data.result.formatted_phone_number || 'Unavailable',
        website: data.result.website || 'Unavailable',
      };
    }
    return null; // En caso de que no haya detalles disponibles
  };

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} initialRegion={region}>
          {markers.map((marker, index) => (
            <Marker 
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
              <Callout>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutTitle}>{marker.title}</Text>
                  <Text>Direction: {marker.description}</Text>
                  <Text>Phone: {marker.phone}</Text>
                  <Text>Website: {marker.website}</Text>
                </View>
              </Callout>
          </Marker>
          ))}
        </MapView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  }
});
