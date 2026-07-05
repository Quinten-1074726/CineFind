import { Text, View } from "react-native";

export default function InfoCard({ title, children }) {
  return (
    <View className="mt-4 rounded-2xl border border-border bg-card p-4">
      <Text className="text-base font-bold text-dark">
        {title}
      </Text>

      <View className="mt-2">
        {children}
      </View>
    </View>
  );
}