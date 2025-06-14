import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ChevronRight } from "lucide-react-native";
import { Heading, HStack, Image, VStack, Text, Icon } from "@gluestack-ui/themed";

type Props = TouchableOpacityProps

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack 
                bg="$gray500" 
                alignItems="center"    
                p="$2"
                pr="$4"
                rounded="$md"
                mb="$3"
            >
                <Image
                    source={{ uri: "https://static.wixstatic.com/media/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp/v1/fill/w_350,h_375,al_c,q_80,enc_avif,quality_auto/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp" }}
                    alt="Imagem do exercício"
                    w="$16"
                    h="$16"
                    rounded="$md"
                    mr="$4"
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading 
                        fontSize="$lg" 
                        color="white"
                        fontFamily="$heading"    
                    >
                        Puxada Frontal
                    </Heading>

                    <Text 
                        //fontSize="$sm"
                        color="$gray200"
                        mt="$1"
                        numberOfLines={2}
                    >
                        3 séries x 12 repetições 3 séries x 12 repetições 3 séries x 12 repetições
                    </Text>
                </VStack>

                <Icon as={ChevronRight} color="$gray300" />
            </HStack>
        </TouchableOpacity>
    )
}