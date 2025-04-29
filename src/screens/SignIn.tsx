import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import Logo from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const handleNewAccount = () => {
        navigation.navigate("signUp");
    }

    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1}>
                <Image
                    w="$full"
                    h={624}
                    alt="Pessoas treinando"
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    position="absolute"
                />

                <VStack flex={1} px="$6" pb="$16">
                    <Center my="$24">
                        <Logo />

                        <Text color="$gray100" fontSize="$lg" mt="$2">
                            Treine sua mente e seu corpo.
                        </Text>
                    </Center>

                    <Center gap="$3">
                        <Heading color="$gray100" fontSize="$3xl">
                            Acesse a conta
                        </Heading>

                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <Input
                            placeholder="Senha"
                            secureTextEntry
                        />

                        <Button title="Acessar" />
                    </Center>

                    <Center flex={1} justifyContent="flex-end" mb="$4">
                        <Text
                            color="$gray100"
                            fontSize="$lg"
                            mb="$4"
                            fontFamily="$body"
                        >
                            Ainda não tem acesso?
                        </Text>

                        <Button
                            title="Criar Conta"
                            variant="outline"
                            onPress={handleNewAccount}
                        />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    )
}