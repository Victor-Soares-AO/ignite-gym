import { useState } from "react";
import { Heading, HStack, VStack, Text } from "@gluestack-ui/themed";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { FlatList } from "react-native";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {

    const [exercises, setExercises] = useState([
        "Puxada frontal",
        "Remada curvada",
        "Remada unilateral",
        "Levantamento terra",
        "Puxada frontal 2",
        "Remada curvada 2",
        "Remada unilateral 2",
        "Levantamento terra 2",
    ]);
    const [groups, setGroups] = useState(["Costas", "Bíceps", "Tríceps", "Ombro"])
    const [groupSelected, setGroupSelected] = useState("costas");

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const handleOpenExerciseDetails = () => {
        navigation.navigate("exercise");
    }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLowerCase() === item.toLowerCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
            />

            <VStack px="$5" flex={1}>
                <HStack justifyContent="space-between" mb="$5" alignItems="center">
                    <Heading
                        color="$gray200"
                        fontSize="$lg"
                        fontFamily="$heading"
                    >
                        Exercícios
                    </Heading>

                    <Text
                        color="$gray200"
                        fontSize="$md"
                        fontFamily="$body"
                    >
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={(item) => item}
                    renderItem={() => (
                        <ExerciseCard onPress={handleOpenExerciseDetails} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    )
}