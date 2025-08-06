import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Image} from 'react-native';
import minhaImagem from '../../assets/casual_dog.png';

export default function LoginScreen({navigaion}) {
    return (
        <Image
            source={minhaImagem}
        />
    );
}