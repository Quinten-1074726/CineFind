import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export default function AppButton({ title, icon, onPress, variant = "light" }) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      className={
        isPrimary
          ? "w-full flex-row items-center justify-center rounded-2xl bg-brand px-6 py-4 active:opacity-80"
          : "w-full flex-row items-center justify-center rounded-2xl bg-white px-6 py-4 active:opacity-80"
      }
    >
      <Text
        className={
          isPrimary
            ? "mr-2 text-base font-bold text-white"
            : "mr-2 text-base font-bold text-brand"
        }
      >
        {title}
      </Text>

      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color={isPrimary ? "#FFFFFF" : "#2563EB"}
        />
      )}
    </Pressable>
  );
}