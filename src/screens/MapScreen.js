import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getHotspots } from "../services/hotspotService";
import { getCurrentLocation } from "../services/locationService";

import Header from "../components/Header";
import HotspotMap from "../components/HotspotMap";

export default function MapScreen({ route }) {
  const selectedHotspot = route.params?.hotspot;

  const [hotspots, setHotspots] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getHotspots();
        setHotspots(data);
        setErrorMessage("");
      } catch (error) {
        console.log("Hotspots ophalen mislukt:", error);
        setErrorMessage("Locaties konden niet worden opgehaald.");
      }

      try {
        const location = await getCurrentLocation();
        setUserLocation(location);
      } catch (error) {
        console.log("Locatie ophalen mislukt:", error);
      }

      setIsLoading(false);
    }

    loadData();
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-5">
        <Text className="text-lg font-bold text-dark">Kaart laden...</Text>

        <Text className="mt-2 text-center text-sm text-muted">
          De locaties worden op de kaart gezet.
        </Text>
      </View>
    );
  }

  if (errorMessage) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-5">
        <Text className="text-lg font-bold text-dark">
          Er ging iets mis
        </Text>

        <Text className="mt-2 text-center text-sm leading-6 text-muted">
          {errorMessage}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background px-5 pt-14 pb-6">
      <Header
        subtitle="Kaart"
        title={
          selectedHotspot
            ? selectedHotspot.name
            : "Alle bioscopen en theaters"
        }
      />

      <View className="mb-4 rounded-2xl border border-border bg-card p-4">
        {selectedHotspot ? (
          <>
            <Text className="text-base font-bold text-dark">
              Geselecteerde locatie
            </Text>

            <Text className="mt-1 text-sm text-muted">
              De kaart zoekt {selectedHotspot.name}.
            </Text>
          </>
        ) : (
          <>
            <Text className="text-base font-bold text-dark">
              Alle locaties
            </Text>

            <Text className="mt-1 text-sm text-muted">
              Bekijk alle hotspots en je huidige locatie op de kaart.
            </Text>
          </>
        )}
      </View>

      <HotspotMap
        hotspots={hotspots}
        userLocation={userLocation}
        selectedHotspot={selectedHotspot}
      />
    </View>
  );
}