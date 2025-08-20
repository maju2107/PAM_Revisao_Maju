import {StyleSheet, Dimensions} from "react-native";

const {width, height}= Dimensions.get('window'); // Dimensions retorna as dimensôes da tela

const styles = StyleSheet.create({

    containerPrincipal:{
        flex:1, justifyContent:'center',
        alignItems:'center'
    },

    imgPrincipal:{
        width:width*1,
        height:height*0.4,
        marginTop:-97
    },

    text1 :{
        FontSize:30,
        marginTop:50
    },

    text2:{
        fontSize:15,
        marginTop:10
    },

    botaoAcessar:{
        backgroundColor:'rgb(20,200,113)',
        padding:10,
        borderRadius:8, 
        marginTop:50,
        width:width*0.7,
        height:height*0.07,
        borderColor:'rgb(18,182,103)',
        borderWidth: 2
    },

    ajustar :{
        flexDirection:'row',
        alignItems:'center'
    },

    imgGoogle:{
        width:width*0.08,
        height:height*0.04, 
        backgroundColor:'white', 
        borderRadius:5
    },

    textBotaoAcessar:{
        fontSize:10, 
        marginLeft:35, 
        color:'white'
    },

    botaoOutrasOp:{
        backgroundColor:'white',
        padding:10,
        borderRadius:8, 
        marginTop:20,
        width:width*0.7,
        height:height*0.07, 
        borderColor:'rgb(18,182,103)', 
        borderWidth: 2, 
        alignItems:'center'
    },

    textOutrasOp:{
        fontSize:10,
        marginTop:6
    },

    textAcesse:{
        fontSize:30,
        marginTop:10, 
        marginLeft:19
    },

    textEmailEsenha:{
        fontSize:15,
        marginTop:3, 
        marginBottom: 15, 
        marginLeft:19
    },

    label:{
        fontSize:12,
        marginTop:10, 
        marginLeft:19
    },

    input:{
        backgroundColor: 'rgba(222, 227, 234, 1)',
        padding: 10, 
        width:width*0.9,
        height:height*0.09, 
        marginLeft:19, 
        borderRadius:5
    }

});

export default styles;