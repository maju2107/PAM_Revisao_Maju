import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable} from 'react-native';
import minhaImagem from '../../assets/casual_dog.png';
import ImagemGoogle from '../../assets/Google.png';

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
            <Text style={{fontSize:15,marginTop:10}}>Como deseja acessar?</Text>

            <Pressable style={{backgroundColor:'rgb(20,200,113)',padding:10, borderRadius:8, marginTop:50,width:width*0.7,height:height*0.07, borderColor:'rgb(18,182,103)', borderWidth: 2}}>
                
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image
                        source={ImagemGoogle}
                        style={{width:width*0.08,height:height*0.04, backgroundColor:'white', borderRadius:5}}
                    />
                    <Text style={{fontSize:10, marginLeft:35, color:'white'}}>Como deseja acessar?</Text>
                </View>   
            </Pressable>

            <Pressable style={{backgroundColor:'white',padding:10, borderRadius:8, marginTop:20,width:width*0.7,height:height*0.07, borderColor:'rgb(18,182,103)', borderWidth: 2, alignItems:'center'}}
                onPress={()=> navigation.navigate('Acesse')}
            >
            
                  <Text style={{fontSize:10,marginTop:6}}>Outras opções</Text>

            </Pressable>
        </View>
    );
}