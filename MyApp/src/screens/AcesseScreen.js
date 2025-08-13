import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable} from 'react-native';


export default function AcesseScreen({navigation}) {
    return (
    <ScrollView>
    <View>
        <Text style={{fontSize:15,marginTop:10, marginLeft:19}}>com E-mail e senha</Text>
        <TextInput
         placeholder='Digite seu E-mail:'
        />
        <TextInput
         placeholder='Digite sua Senha:'
        />
     
    </View>
    </ScrollView>
    );
}