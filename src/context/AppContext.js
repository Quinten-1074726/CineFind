import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [layoutMode, setLayoutMode] = useState("list");
  const [favoriteHotspots, setFavoriteHotspots] = useState({});

  useEffect(() => {
    async function loadSettings() {
      try {
        const savedLayoutMode = await AsyncStorage.getItem("layoutMode");

        if (savedLayoutMode !== null) {
          setLayoutMode(savedLayoutMode);
        }

        const savedFavorites = await AsyncStorage.getItem("favoriteHotspots");

        if (savedFavorites !== null) {
          setFavoriteHotspots(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.log("Data laden mislukt:", error);
      }
    }

    loadSettings();
  }, []);

  async function changeLayoutMode(newLayoutMode) {
    try {
      setLayoutMode(newLayoutMode);
      await AsyncStorage.setItem("layoutMode", newLayoutMode);
    } catch (error) {
      console.log("Layout opslaan mislukt:", error);
    }
  }

  async function toggleFavorite(hotspotId) {
    try {
      const newFavorites = {
        ...favoriteHotspots,
        [hotspotId]: !favoriteHotspots[hotspotId],
      };

      setFavoriteHotspots(newFavorites);

      await AsyncStorage.setItem(
        "favoriteHotspots",
        JSON.stringify(newFavorites)
      );
    } catch (error) {
      console.log("Favoriet opslaan mislukt:", error);
    }
  }

  function isFavorite(hotspotId) {
    return favoriteHotspots[hotspotId] === true;
  }

  return (
    <AppContext.Provider
      value={{
        layoutMode,
        changeLayoutMode,
        favoriteHotspots,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}