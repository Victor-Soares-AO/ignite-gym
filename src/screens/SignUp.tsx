import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import Logo from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
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

                    <Center gap="$3" flex={1}>
                        <Heading color="$gray100" fontSize="$3xl">
                            Crie sua conta
                        </Heading>

                        <Input placeholder="Nome" />

                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <Input
                            placeholder="Senha"
                            secureTextEntry
                        />

                        <Button title="Criar e acessar" />
                    </Center>

                    <Button
                        title="Voltar para o login"
                        variant="outline"
                        onPress={handleGoBack}
                    />
                </VStack>
            </VStack>
        </ScrollView>
    )
}