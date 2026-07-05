import AsyncStorage from "@react-native-async-storage/async-storage";

const HOTSPOTS_URL = "https://quinten-1074726.github.io/CineFind/hotspots-ditbestaatniet.json";
const HOTSPOTS_STORAGE_KEY = "cachedHotspots";

export async function getHotspots() {
  try {
    const response = await fetch(HOTSPOTS_URL);

    if (!response.ok) {
      throw new Error("Hotspots ophalen mislukt");
    }

    const data = await response.json();

    await AsyncStorage.setItem(HOTSPOTS_STORAGE_KEY, JSON.stringify(data));

    return data;
  } catch (error) {
    console.log("Online hotspots ophalen mislukt:", error);

    const savedHotspots = await AsyncStorage.getItem(HOTSPOTS_STORAGE_KEY);

    if (savedHotspots !== null) {
      return JSON.parse(savedHotspots);
    }

    throw new Error("Geen online of offline hotspots beschikbaar");
  }
}