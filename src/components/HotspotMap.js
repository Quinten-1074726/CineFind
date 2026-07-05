import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function HotspotMap({ hotspots, userLocation, selectedHotspot }) {
  const startLocation = selectedHotspot ?? userLocation ?? hotspots[0];

  const region = {
    latitude: startLocation?.latitude ?? 52.0907,
    longitude: startLocation?.longitude ?? 5.1214,
    latitudeDelta: selectedHotspot ? 0.02 : 2.5,
    longitudeDelta: selectedHotspot ? 0.02 : 2.5,
  };

  return (
    <View className="flex-1 overflow-hidden rounded-3xl border border-border">
    <MapView
    style={styles.map}
    initialRegion={region}
    showsUserLocation={true}
    >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Jouw locatie"
          />
        )}

        {hotspots.map((hotspot) => (
          <Marker
            key={hotspot.id}
            coordinate={{
              latitude: hotspot.latitude,
              longitude: hotspot.longitude,
            }}
            title={hotspot.name}
            description={`${hotspot.type} - ${hotspot.city}`}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});