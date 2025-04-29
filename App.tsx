import { StatusBar } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { config } from './config/gluestack-ui.config';

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold
} from "@expo-google-fonts/roboto";

import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <GluestackUIProvider config={config}>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />

            {fontsLoaded ? <Routes /> : <Loading />}
        </GluestackUIProvider>
    );
}