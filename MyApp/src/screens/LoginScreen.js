import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable} from 'react-native';
import minhaImagem from '../../assets/casual_dog.png';

const {width, height}= Dimensions.get('window'); // Dimensions retorna as dimensôes da tela

export default function LoginScreen({navigation}) {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image
                source={minhaImagem}
                style={{width:width*1,height:height*0.4,marginTop:-97}} 
                resizeMode='contain' // para a imagem não ficar distorcida
            />
            <Text style={{fontSize:30,marginTop:50}}>Ótimo dia!</Text>
            <Text style={{fontSize:10,marginTop:10}}>Como deseja acessar?</Text>

            <Pressable style={{backgroundColor:'green',padding:10}}>
                <Text style={{fontSize:10}}>Como deseja acessar?</Text>

            </Pressable>

            <Pressable>
                  <Text style={{fontSize:10,marginTop:10}}>Outras opções</Text>

            </Pressable>
        </View>
    );
}