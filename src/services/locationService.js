import * as Location from "expo-location";

export async function getCurrentLocation() {
  const permission = await Location.requestForegroundPermissionsAsync();

  if (permission.status !== "granted") {
    throw new Error("Geen toestemming voor locatie");
  }

  const location = await Location.getCurrentPositionAsync({});

  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
}

export function calculateDistance(userLocation, hotspot) {
  const earthRadius = 6371;

  const userLatitude = toRadians(userLocation.latitude);
  const userLongitude = toRadians(userLocation.longitude);
  const hotspotLatitude = toRadians(hotspot.latitude);
  const hotspotLongitude = toRadians(hotspot.longitude);

  const latitudeDifference = hotspotLatitude - userLatitude;
  const longitudeDifference = hotspotLongitude - userLongitude;

  const a =
    Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
    Math.cos(userLatitude) *
      Math.cos(hotspotLatitude) *
      Math.sin(longitudeDifference / 2) *
      Math.sin(longitudeDifference / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));``

  return earthRadius * c;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}