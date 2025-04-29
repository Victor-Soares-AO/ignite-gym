import { useState } from "react";
import { SectionList } from "react-native";
import { Heading, VStack, Text } from "@gluestack-ui/themed";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {

    const [exercises, setExercises] = useState([
        {
            title: "27.04.25",
            data: ["Puxada frontal", "Remada unilateral"]
        },
        {
            title: "28.04.25",
            data: ["Puxada frontal"]
        },
    ])

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={() => <HistoryCard />}
                renderSectionHeader={({ section }) => (
                    <Heading
                        fontFamily="$heading"
                        color="$gray200"
                        fontSize="$lg"
                        mt="$10"
                        mb="$3"
                    >
                        {section.title}
                    </Heading>
                )}
                style={{ paddingHorizontal: 20 }}
                contentContainerStyle={
                    exercises.length === 0 && { flex: 1, justifyContent: "center" }
                }
                ListEmptyComponent={() => (
                    <Text 
                        color="$gray300" 
                        textAlign="center"
                    >
                        Não há exercícios registrados ainda.{"\n"}
                        Vamos fazer exercícios hoje?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    )
}