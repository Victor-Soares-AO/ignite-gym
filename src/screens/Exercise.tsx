import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { Heading, HStack, Icon, VStack, Text, Image, Box } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const handleGoBack = () => navigation.goBack();

    return (
        <VStack flex={1}>
            <VStack px="$5" pt="$16" bg="$gray600">
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={ArrowLeft} color="$green500" size="xl" />
                </TouchableOpacity>

                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    mt="$4"
                    mb="$6"
                >
                    <Heading
                        color="$gray100"
                        fontFamily="$heading"
                        fontSize="$lg"
                        flexShrink={1}
                    >
                        Puxada frontal
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />

                        <Text
                            color="$gray200"
                            ml="$1"
                            textTransform="capitalize"
                        >
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ paddingBottom: 64 }}
            >
                <VStack p="$5" pt="$8">
                    <Image
                        source={{ uri: "https://static.wixstatic.com/media/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp/v1/fill/w_350,h_375,al_c,q_80,enc_avif,quality_auto/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp" }}
                        alt="Exercício"
                        mb="$3"
                        resizeMode="cover"
                        rounded="$lg"
                        w="$full"
                        h="$96"
                    />

                    <Box
                        bg="$gray600"
                        rounded="$md"
                        pb="$4"
                        px="$4"
                    >
                        <HStack
                            alignItems="center"
                            justifyContent="space-between"
                            mb="$6"
                            mt="$5"
                        >
                            <HStack>
                                <SeriesSvg />

                                <Text color="$gray200" ml="$2">
                                    3 séries
                                </Text>
                            </HStack>

                            <HStack>
                                <RepetitionSvg />

                                <Text color="$gray200" ml="$2">
                                    12 repetições
                                </Text>
                            </HStack>
                        </HStack>

                        <Button title="Marcar como realizado" />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack >
    )
}