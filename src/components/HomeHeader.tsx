import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { LogOut } from "lucide-react-native";

export function HomeHeader(){
    return(
        <HStack bg="$gray600" pt="$16" pb="$5" px="$5" alignItems="center" gap="$4">
            <UserPhoto 
                source={{uri: "https://github.com/victor-soares-ao.png"}} 
                alt="Foto de perfil" 
                w="$14"
                h="$14"
            />

            <VStack flex={1}>
                <Text color="$gray100" fontSize="$md">
                    Olá,
                </Text>

                <Heading color="$gray100" fontSize="$lg">
                    Victor Soares
                </Heading>
            </VStack>

            <Icon as={LogOut} color="$gray200" size="xl" />
        </HStack>
    )
}