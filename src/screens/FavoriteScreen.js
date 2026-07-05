import { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { AppContext } from "../context/AppContext";
import { getHotspots } from "../services/hotspotService";
import { calculateDistance, getCurrentLocation } from "../services/locationService";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import HotspotCard from "../components/HotspotCard";

export default function FavoriteScreen({ navigation }) {
  const { layoutMode, isFavorite } = useContext(AppContext);

  const [hotspots, setHotspots] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState("");

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
        setLocationError("");
      } catch (error) {
        console.log("Locatie ophalen mislukt:", error);
        setLocationError("Locatie niet beschikbaar.");
      }

      setIsLoading(false);
    }

    loadData();
  }, []);

  const filteredHotspots = hotspots
    .map((hotspot) => {
      if (userLocation === null) {
        return {
          ...hotspot,
          distance: null,
        };
      }

      const distance = calculateDistance(userLocation, hotspot);

      return {
        ...hotspot,
        distance: distance,
      };
    })
    .filter((hotspot) => isFavorite(hotspot.id))
    .filter((hotspot) => {
      const searchValue = searchText.toLowerCase();

      const matchesSearch =
        hotspot.name.toLowerCase().includes(searchValue) ||
        hotspot.city.toLowerCase().includes(searchValue) ||
        hotspot.type.toLowerCase().includes(searchValue);

      const matchesCategory =
        selectedCategory === "All" || hotspot.type === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  function handleHotspotPress(hotspot) {
    navigation.navigate("Detail", {
      hotspot: hotspot,
    });
  }

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-5">
        <Text className="text-lg font-bold text-dark">Favorieten laden...</Text>

        <Text className="mt-2 text-center text-sm text-muted">
          Jouw favorieten worden opgehaald.
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
    <View className="flex-1 bg-background px-5 pt-14">
      <Header
        subtitle="Favorites"
        title="Jouw favorieten"
      />

      <SearchBar value={searchText} onChangeText={setSearchText} />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <View className="mt-7 mb-3 flex-row items-center justify-between">
        <Text className="text-lg font-extrabold text-dark">
          Opgeslagen locaties
        </Text>

        <Text className="text-sm font-semibold text-brand">
          {filteredHotspots.length} locaties
        </Text>
      </View>

      <FlatList
        data={filteredHotspots}
        key={layoutMode}
        numColumns={layoutMode === "grid" ? 2 : 1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={layoutMode === "grid" ? "w-1/2 px-1" : "w-full"}>
            <HotspotCard
              hotspot={item}
              layoutMode={layoutMode}
              onPress={() => handleHotspotPress(item)}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListEmptyComponent={
          <Text className="mt-8 text-center text-muted">
            Je hebt nog geen favorieten opgeslagen.
          </Text>
        }
      />
    </View>
  );
}