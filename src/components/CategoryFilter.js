import { Pressable, Text, View } from "react-native";

const categories = ["All", "Cinema", "Theater"];

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <View className="mt-4 flex-row">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <Pressable
            key={category}
            onPress={() => onSelectCategory(category)}
            className={
              isSelected
                ? "mr-2 rounded-xl bg-brand px-4 py-2 active:opacity-80"
                : "mr-2 rounded-xl border border-border bg-card px-4 py-2 active:opacity-80"
            }
          >
            <Text
              className={
                isSelected
                  ? "text-xs font-bold text-white"
                  : "text-xs font-semibold text-dark"
              }
            >
              {category}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}