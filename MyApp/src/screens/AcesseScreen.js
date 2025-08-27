import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
import ImagemGoogle from '../../assets/Google.png';
import ImagemFacebook from '../../assets/Facebook.png';
import styles from '../../style/style';

// const [selecionado,naoSelecionado] = useState(false);

export default function AcesseScreen({navigation}) {
    const [isChecked, setChecked] = useState(false);

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

            <View style={styles.ajustar2}>
                <CheckBox
                    title="Lembrar senha"
                    checked={isChecked}
                    onPress={() => setChecked(!isChecked)}

                    containerStyle={{
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    padding: 0,
                    marginTop:27
                    }}
                    textStyle={{
                    color: '#333',
                    fontWeight:'normal'
                    }}
                    checkedColor="#007AFF" // Cor da marcação
                    uncheckedColor="rgb(78, 220, 151)"
                />
                <Text style={styles.textEsqueci}>Esqueci a senha</Text>
            </View>

            <View style={styles.ajustar2}>

            <Pressable style={styles.botaoAcessar}>
                <Text style={styles.textAcessar}>Acessar</Text>
            </Pressable>

            <Pressable style={styles.botaoCadastrar}>
                <Text style={styles.textCadastrar}>Cadastrar</Text>
            </Pressable>

            </View>

            <View style={styles.ajustar3}>
                <View style={styles.linha}/>
                <Text style={styles.textOu}>Ou continue com</Text>
                <View style={styles.linha}/>
            </View>

            <View style={styles.ajustar2}>

                <Image style={styles.imgGoogle2}
                    source={ImagemGoogle}
                />
                <Image style={styles.imgFaBook}
                    source={ImagemFacebook}
                />

            </View>
          
        </View>
     
    </View>
    </ScrollView>
    );
}