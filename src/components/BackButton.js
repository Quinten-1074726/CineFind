import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function BackButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="mb-6 h-11 w-11 items-center justify-center rounded-full bg-card active:opacity-80"
    >
      <Ionicons name="arrow-back" size={22} color="#0F172A" />
    </Pressable>
  );
}