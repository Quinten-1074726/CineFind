import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function HotspotHeader({ hotspot }) {
  return (
    <>
      <View className="h-56 items-center justify-center rounded-3xl bg-brand-light">
        <Ionicons
          name={hotspot.type === "Cinema" ? "film-outline" : "ticket-outline"}
          size={78}
          color="#2563EB"
        />
      </View>

      <View className="mt-6">
        <Text className="text-sm font-bold uppercase tracking-wide text-brand">
          {hotspot.type}
        </Text>

        <Text className="mt-2 text-3xl font-extrabold leading-9 text-dark">
          {hotspot.name}
        </Text>
      </View>
    </>
  );
}