import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View className="flex-row items-center rounded-2xl border border-border bg-card px-4 py-3">
      <Ionicons name="search-outline" size={20} color="#64748B" />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Zoek bioscopen of theaters..."
        placeholderTextColor="#94A3B8"
        className="ml-3 flex-1 text-sm text-dark"
      />
    </View>
  );
}