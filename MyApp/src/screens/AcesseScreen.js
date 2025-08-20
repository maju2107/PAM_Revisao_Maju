import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import ImagemGoogle from '../../assets/Google.png';
import ImagemFacebook from '../../assets/Facebook.png';
import styles from '../../style/style';

const {width, height}= Dimensions.get('window');
const [selecionado,naoSelecionado] = useState(false);

export default function AcesseScreen({navigation}) {
    return (
    <ScrollView>
    <View>
        <Text style={styles.textAcesse}>Acesse</Text>
        <Text style={styles.textEmailEsenha}>com E-mail e senha</Text>
        <View >
            <Text style={styles.label}>E-mail</Text>
            <TextInput
            placeholder='Digite seu E-mail:'
            style={styles.input}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
            placeholder='Digite sua Senha:'
            secureTextEntry
            style={styles.input}
            />

            <View>
                <CheckBox
                    value={selecionado}
                    onValueChange={naoSelecionado}
                    style={styles.checkbox}
                />
                <Text>{selecionado? 'Selecionado': 'Nâo Selecionado'}</Text>
                <Text>Lembrar Senha</Text>
                <Text>ESqueci a senha</Text>
            </View>

            <View style={styles.ajustar2}>

            <Pressable style={styles.botaoAcessar}>
                <View style={styles.ajustar}>
                    <Text style={styles.textBotaoAcessar}>Acessar</Text>
                </View>   
            </Pressable>

            <Pressable style={styles.botaoOutrasOp}>
                <Text style={styles.textOutrasOp}>Cadastrar</Text>
            </Pressable>

            </View>

            <View>
                <Img
                    source={ImagemGoogle}
                />

                <Img
                    source={ImagemFacebook}
                />
            </View>
          
        </View>
     
    </View>
    </ScrollView>
    );
}