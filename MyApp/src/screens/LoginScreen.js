import * as React from 'react';
import {View, Text,Image,Pressable} from 'react-native';
import minhaImagem from '../../assets/casual_dog.png';
import ImagemGoogle from '../../assets/Google.png';
import styles from '../../style/style';

export default function LoginScreen({navigation}) {
    return (
        <View style={styles.containerPrincipal}>
            <Image
                source={minhaImagem}
                style={styles.imgPrincipal}
                resizeMode='contain' // para a imagem não ficar distorcida
            />
            <Text style={styles.text1}>Ótimo dia!</Text>
            <Text style={styles.text2}>Como deseja acessar?</Text>

            <Pressable style={styles.botaoAcessarCG}>
                
                <View style={styles.ajustar}>
                    <Image 
                        source={ImagemGoogle}
                        style={styles.imgGoogle}
                    />
                    <Text style={styles.textBotaoAcessarCG}>Como deseja acessar?</Text>
                </View>   
            </Pressable>

            <Pressable style={styles.botaoOutrasOp}
                onPress={()=> navigation.navigate('Acesse')}
            >
            
                  <Text style={styles.textOutrasOp}>Outras opções</Text>

            </Pressable>
        </View>
    );
}