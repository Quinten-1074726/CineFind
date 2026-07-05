import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function HotspotDetails({ type, city, distance }) {
  const distanceText =
    distance !== null && distance !== undefined
      ? `${distance.toFixed(1)} km`
      : "Afstand niet beschikbaar";

  return (
    <View className="mt-4 flex-row flex-wrap items-center">
      <View className="mr-4 mb-2 flex-row items-center">
        <Ionicons name="pricetag-outline" size={16} color="#64748B" />

        <Text className="ml-1 text-sm font-semibold text-muted">
          {type}
        </Text>
      </View>

      <View className="mr-4 mb-2 flex-row items-center">
        <Ionicons name="business-outline" size={16} color="#64748B" />

        <Text className="ml-1 text-sm font-semibold text-muted">
          {city}
        </Text>
      </View>

      <View className="mb-2 flex-row items-center">
        <Ionicons name="location-outline" size={16} color="#64748B" />

        <Text className="ml-1 text-sm font-semibold text-muted">
          {distanceText}
        </Text>
      </View>
    </View>
  );
}