import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function HotspotCard({ hotspot, onPress, layoutMode = "list" }) {
  const { isFavorite, toggleFavorite } = useContext(AppContext);
  const favorite = isFavorite(hotspot.id);
  const distanceText = hotspot.distance     
    ? `${hotspot.distance.toFixed(1)} km`
    : "Afstand niet beschikbaar";

  if (layoutMode === "grid") {
    return (
      <Pressable
        onPress={onPress}
        className="mb-3 rounded-2xl border border-border bg-card p-3 active:opacity-80"
      >
        <View className="mb-3 h-24 items-center justify-center rounded-xl bg-brand-light">
          <Ionicons
            name={hotspot.type === "Cinema" ? "film-outline" : "ticket-outline"}
            size={34}
            color="#2563EB"
          />
        </View>

        <Text className="text-sm font-bold text-dark" numberOfLines={2}>
          {hotspot.name}
        </Text>

        <Text className="mt-1 text-xs font-semibold text-brand">
          {hotspot.type}
        </Text>

        <View className="mt-2 flex-row items-center">
          <Ionicons name="location-outline" size={13} color="#64748B" />

          <Text className="ml-1 text-xs text-muted" numberOfLines={1}>
            {hotspot.city}
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      className="mb-3 flex-row rounded-2xl border border-border bg-card p-3 active:opacity-80"
    >
      <View className="mr-3 h-20 w-20 items-center justify-center rounded-xl bg-brand-light">
        <Ionicons
          name={hotspot.type === "Cinema" ? "film-outline" : "ticket-outline"}
          size={34}
          color="#2563EB"
        />
      </View>

      <View className="flex-1 justify-center">
        <View className="mb-1 flex-row items-start justify-between">
          <View className="flex-1 pr-2">
            <Text className="text-base font-bold text-dark" numberOfLines={1}>
              {hotspot.name}
            </Text>

            <Text className="mt-0.5 text-sm font-semibold text-brand">
              {hotspot.type}
            </Text>
          </View>

          <Pressable
            onPress={() => toggleFavorite(hotspot.id)}
            hitSlop={10}
          >
            <Ionicons
              name={favorite ? "bookmark" : "bookmark-outline"}
              size={20}
              color={favorite ? "#2563EB" : "#64748B"}
            />
          </Pressable>
        </View>

        <Text className="text-sm text-muted" numberOfLines={1}>
          {hotspot.address}, {hotspot.city}
        </Text>

        <View className="mt-2 flex-row items-center">
          <Ionicons name="location-outline" size={14} color="#64748B" />

          <Text className="ml-1 text-xs text-muted">
            {distanceText} 
          </Text>
        </View>
      </View>
    </Pressable>
  );
}