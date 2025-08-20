import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../style/style';

const {width, height}= Dimensions.get('window');

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
          
        </View>
     
    </View>
    </ScrollView>
    );
}