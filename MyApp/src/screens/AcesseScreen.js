import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView,Image,Pressable,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
import ImagemGoogle from '../../assets/Google.png';
import ImagemFacebook from '../../assets/Facebook.png';
import styles from '../../style/style';


export default function AcesseScreen({navigation}) {

    const [isChecked, setChecked] = useState(false); // Ver se a checkBox está selecionada
    const [senha, setSenha] = useState(''); // analisar o estado da senha
    const [mostrarSenha, setMostrarSenha] = useState(false); // controlar o estado da senha em mostrar e esconder

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
            <View style={styles.inputContainer}>
            <TextInput
            placeholder='Digite sua Senha:'
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            />
            <Pressable   style={({ pressed }) => [
                styles.icon, { backgroundColor: pressed ? 'rgb(18,182,103)' : 'rgb(186, 194, 205)' }]} onPress={() => setMostrarSenha(!mostrarSenha)} >
                <Icon name={mostrarSenha ? 'eye-off' : 'eye'} size={29} color="rgb(18,182,103)" /> 
            </Pressable>
            </View>
            {/* Icon do olhinho não funciona, então improvisei */}
            
            <View style={styles.ajustar2}>
                <CheckBox
                    title="Lembrar senha"
                    checked={isChecked}
                    onPress={() => setChecked(!isChecked)}

                    containerStyle={{ // estilização do container que fica envolta da checkBox
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    padding: 0,
                    marginTop:27
                    }}
                    textStyle={{ // estilização do texto que acompanha a checkBox
                    color: '#333',
                    fontWeight:'normal'
                    }}
                    checkedColor="#007AFF" // Cor da borda quando marca
                    uncheckedColor="rgb(78, 220, 151)" // cor da borda de quando está desmarcado
                />
                <Text style={styles.textEsqueci}>Esqueci a senha</Text>
            </View>

                {/* Botões cadastrar e acessar */}
            <View style={styles.ajustar2}>

            <Pressable style={styles.botaoAcessar}>
                <Text style={styles.textAcessar}>Acessar</Text>
            </Pressable>

            <Pressable style={styles.botaoCadastrar}>
                <Text style={styles.textCadastrar}>Cadastrar</Text>
            </Pressable>

            </View>

                {/* Texto de "Ou continue com" */}
            <View style={styles.ajustar3}>
                <View style={styles.linha}/>
                <Text style={styles.textOu}>Ou continue com</Text>
                <View style={styles.linha}/>
            </View>

            <View style={styles.ajustar2}>
                {/* Imagens Google e FaceBook */}
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