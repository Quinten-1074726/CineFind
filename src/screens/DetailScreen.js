import { Text, View, ScrollView } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import AppButton from "../components/AppButton";
import BackButton from "../components/BackButton";
import HotspotHeader from "../components/HotspotHeader";
import HotspotDetails from "../components/HotspotDetails";
import InfoCard from "../components/InfoCard";

export default function DetailScreen({ route, navigation }) {
    const { hotspot } = route.params;
    const { toggleFavorite, isFavorite } = useContext(AppContext);
    const favorite = isFavorite(hotspot.id);

    function handleShowOnMap() {
    navigation.navigate("TabNavigator", {
        screen: "Map",
        params: {
        hotspot: hotspot,
        },
    });
    }

    return (
    <ScrollView className="flex-1 bg-background">
        <View className="px-5 pt-14 pb-8">
            <BackButton onPress={() => navigation.goBack()} />

            <HotspotHeader hotspot={hotspot} />

            <HotspotDetails
            type={hotspot.type}
            city={hotspot.city}
            distance={hotspot.distance}
            />

            <InfoCard title="Adres">
            <Text className="text-sm leading-6 text-muted">
                {hotspot.address}
            </Text>

            <Text className="mt-1 text-sm leading-6 text-muted">
                {hotspot.postalCode} {hotspot.city}
            </Text>
            </InfoCard>

            <InfoCard title="Over deze locatie">
            <Text className="text-sm leading-6 text-muted">
                {hotspot.description}
            </Text>
            </InfoCard>

            <View className="mt-8">
                <AppButton
                title="Show on map"
                icon="map-outline"
                variant="primary"
                onPress={handleShowOnMap}
                />
            </View>
            <View className="mt-4">
            <AppButton
                title={favorite ? "Remove from favorites" : "Add to favorites"}
                icon={favorite ? "bookmark" : "bookmark-outline"}
                variant="secondary"
                onPress={() => toggleFavorite(hotspot.id)}
            />
            </View>
        </View>
    </ScrollView>
    );
}