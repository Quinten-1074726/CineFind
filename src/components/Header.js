import { Text, View } from "react-native";

export default function Header ({ title, subtitle }) {
  return (
    <View className="mb-7">
      <Text className="text-lg font-extrabold text-dark">
        Cine<Text className="text-brand">Find</Text>
      </Text>

      {subtitle && (
        <Text className="mt-6 text-sm font-semibold text-muted">
          {subtitle}
        </Text>
      )}

      {title && (
        <Text className="mt-2 text-3xl font-extrabold leading-9 text-dark">
          {title}
        </Text>
      )}
    </View>
  );
}