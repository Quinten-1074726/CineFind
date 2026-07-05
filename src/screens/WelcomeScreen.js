import { Ionicons } from "@expo/vector-icons";
import { View, Text, StatusBar } from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  function handleStart() {
    navigation.navigate("TabNavigator");
  }

  return (
    <View className="flex-1 bg-brand">
      <StatusBar barStyle="light-content" />

      <View className="absolute -left-28 top-24 h-72 w-72 rotate-45 rounded-3xl bg-blue-500 opacity-30" />
      <View className="absolute left-28 top-4 h-80 w-80 rotate-45 rounded-3xl bg-blue-900 opacity-20" />
      <View className="absolute -right-24 top-44 h-96 w-96 rotate-45 rounded-3xl bg-blue-700 opacity-30" />
      <View className="absolute -bottom-24 -left-16 h-96 w-96 rotate-45 rounded-3xl bg-blue-400 opacity-20" />
      <View className="absolute bottom-8 right-[-120px] h-80 w-80 rotate-45 rounded-3xl bg-blue-950 opacity-20" />

      <View className="flex-1 items-center justify-center px-8">
        <View className="mb-6 h-28 w-28 items-center justify-center rounded-full bg-white/20">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-white">
            <Ionicons name="film" size={42} color="#2563EB" />
          </View>
        </View>

        <Text className="text-4xl font-extrabold text-white">
          Cine<Text className="text-blue-200">Find</Text>
        </Text>

        <View className="mt-12 w-full">
          <AppButton
            title="Ontdek meer"
            icon="arrow-forward"
            onPress={handleStart}
          />
        </View>
      </View>
    </View>
  );
}