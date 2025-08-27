import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import ImagemGoogle from '../../assets/Google.png';
import ImagemFacebook from '../../assets/Facebook.png';
import styles from '../../style/style';

// const [selecionado,naoSelecionado] = useState(false);

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

            {/* <View>
                <CheckBox
                    value={selecionado}
                    onValueChange={naoSelecionado}
                    style={styles.checkbox}
                />
                <Text>{selecionado? 'Selecionado': 'Nâo Selecionado'}</Text>
                <Text>Lembrar Senha</Text>
                <Text>ESqueci a senha</Text>
            </View> */}

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