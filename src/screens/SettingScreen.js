import { useContext } from "react";
import { Text, View } from "react-native";

import { AppContext } from "../context/AppContext";
import SettingOption from "../components/SettingOption";

export default function SettingScreen() {
  const { layoutMode, changeLayoutMode } = useContext(AppContext);

  return (
    <View className="flex-1 bg-background px-5 pt-14">
      <Text className="text-lg font-extrabold text-dark">
        Cine<Text className="text-brand">Find</Text>
      </Text>

      <Text className="mt-8 text-3xl font-extrabold text-dark">
        Instellingen
      </Text>

      <Text className="mt-2 text-sm leading-6 text-muted">
        Kies hoe je de locaties wilt bekijken. 
      </Text>

      <View className="mt-8">
        <Text className="mb-3 text-base font-bold text-dark">
          Layout
        </Text>

        <SettingOption
          title="Lijstweergave"
          description="Toon locaties onder elkaar met meer informatie."
          icon="list-outline"
          active={layoutMode === "list"}
          onPress={() => changeLayoutMode("list")}
        />

        <SettingOption
          title="Gridweergave"
          description="Toon locaties compacter naast elkaar."
          icon="grid-outline"
          active={layoutMode === "grid"}
          onPress={() => changeLayoutMode("grid")}
        />
      </View>

    </View>
  );
}