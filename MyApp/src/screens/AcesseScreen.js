import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, ScrollView,Image, BackHandler, Dimensions, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const {width, height}= Dimensions.get('window');

export default function AcesseScreen({navigation}) {
    return (
    <ScrollView>
    <View>
        <Text style={{fontSize:30,marginTop:10, marginLeft:19}}>Acesse</Text>
        <Text style={{fontSize:15,marginTop:3, marginBottom: 15, marginLeft:19}}>com E-mail e senha</Text>
        <View >
            <Text style={{fontSize:12,marginTop:10, marginLeft:19}}>E-mail</Text>
            <TextInput
            placeholder='Digite seu E-mail:'
            style={{backgroundColor: 'rgba(222, 227, 234, 1)', padding: 10, width:width*0.9,height:height*0.09, marginLeft:19, borderRadius:5}}
            />
            <Text style={{fontSize:12,marginTop:10, marginLeft:19}}>Senha</Text>
            <TextInput
            placeholder='Digite sua Senha:'
            secureTextEntry
            style={{ backgroundColor: 'rgba(222, 227, 234, 1)', padding: 10, width:width*0.9,height:height*0.09, marginLeft:19, borderRadius:5}}
            />
          
        </View>
     
    </View>
    </ScrollView>
    );
}