import { useState } from "react";
import { TouchableOpacity } from "react-native";

import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { Center, Heading, ScrollView, Text, VStack, useToast } from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { UserPhoto } from "@components/UserPhoto";
import { ScreenHeader } from "@components/ScreenHeader";
import { ToastMessage } from "@components/ToastMessage";

export function Profile() {

    const [userPhoto, setUserPhoto] = useState("https://github.com/victor-soares-ao.png");

    const toast = useToast();

    const handleUserPhotoSelect = async () => {
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            });


            if (photoSelected.canceled) return;

            const photoURI = photoSelected.assets[0].uri;

            if (photoURI) {
                const photoInfo = await FileSystem.getInfoAsync(photoURI) as {
                    size: number;
                };

                if (photoInfo.size && photoInfo.size / 1024 / 1024 > 1) {
                    return toast.show({
                        placement: "top",
                        render: ({ id }) => (
                            <ToastMessage
                                id={id}
                                action="error"
                                title="Imagem muito grande!"
                                description="Essa imagem é muito grande. Escolha uma de até 5MB."
                                onClose={() => { }}
                            />
                        )
                    })
                }

                console.log(photoInfo.size);
                setUserPhoto(photoURI);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt="$6" px="$5">
                    <UserPhoto
                        source={{ uri: userPhoto }}
                        alt="Foto de perfil"
                        size="lg"
                    />

                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text
                            color="$green500"
                            fontFamily="$heading"
                            fontSize="$lg"
                            mt="$3"
                            mb="$8"
                        >
                            Alterar Foto
                        </Text>
                    </TouchableOpacity>

                    <Center w="$full" gap="$5">
                        <Input placeholder="Nome" bg="$gray600" />
                        <Input value="victor@gmail.com" bg="$gray600" isReadOnly />
                    </Center>

                    <Heading
                        alignSelf="flex-start"
                        fontFamily="$heading"
                        color="$gray200"
                        fontSize="$md"
                        pt="$8"
                        mb="$2"
                    >
                        Alterar senha
                    </Heading>

                    <Center w="$full" gap="$5">
                        <Input
                            placeholder="Senha antiga"
                            bg="$gray600"
                            secureTextEntry
                        />

                        <Input
                            placeholder="Nova senha"
                            bg="$gray600"
                            secureTextEntry
                        />

                        <Input
                            placeholder="Confirme a nova senha"
                            bg="$gray600"
                            secureTextEntry
                        />

                        <Button title="Atualizar" />
                    </Center>
                </Center>

            </ScrollView>
        </VStack>
    )
}