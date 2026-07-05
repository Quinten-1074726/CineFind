import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingOption({ title, description, icon, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className={
        active
          ? "mb-3 flex-row items-center rounded-2xl border border-brand bg-brand px-4 py-4 active:opacity-80"
          : "mb-3 flex-row items-center rounded-2xl border border-border bg-card px-4 py-4 active:opacity-80"
      }
    >
      <View
        className={
          active
            ? "mr-4 h-11 w-11 items-center justify-center rounded-xl bg-white/20"
            : "mr-4 h-11 w-11 items-center justify-center rounded-xl bg-brand-light"
        }
      >
        <Ionicons
          name={icon}
          size={22}
          color={active ? "#FFFFFF" : "#2563EB"}
        />
      </View>

      <View className="flex-1">
        <Text
          className={
            active
              ? "text-base font-bold text-white"
              : "text-base font-bold text-dark"
          }
        >
          {title}
        </Text>

        <Text
          className={
            active
              ? "mt-1 text-sm text-blue-100"
              : "mt-1 text-sm text-muted"
          }
        >
          {description}
        </Text>
      </View>

      {active && <Ionicons name="checkmark-circle" size={22} color="#FFFFFF" />}
    </Pressable>
  );
}