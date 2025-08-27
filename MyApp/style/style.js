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
        marginTop:-97,
        marginBottom: 6
    },

    text1 :{
        fontSize:30,
        marginTop:60,
        fontWeight:'bold'
    },

    text2:{
        fontSize:12,
        marginTop:10,
        fontWeight:'bold'
    },

    botaoAcessarCG:{
        backgroundColor:'rgb(20,200,113)',
        padding:10,
        borderRadius:8, 
        marginTop:70,
        width:width*0.85,
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

    textBotaoAcessarCG:{
        fontSize:10, 
        marginLeft:60, 
        color:'white'
    },

    botaoOutrasOp:{
        backgroundColor:'white',
        padding:10,
        borderRadius:8, 
        marginTop:10,
        width:width*0.85,
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
    },

    checkbox:{
        backgroundColor:'pink'
    },

    textLembrar:{
        fontSize:12,
        color: 'pink'
    },

    ajustar2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    botaoAcessar:{
        backgroundColor:'rgb(20,200,113)',
        marginTop:90,
        padding:10,
        marginLeft:17,
        borderRadius:8, 
        width:width*0.43,
        height:height*0.09,
        borderColor:'rgb(18,182,103)',
        borderWidth: 2,
        alignItems:'center'
    },

    textAcessar:{
        fontSize:15, 
        color:'white',
        marginTop:8
    },

    botaoCadastrar:{
        backgroundColor:'white',
        padding:10,
        borderRadius:8, 
        marginTop:90,
        marginRight:17,
        width:width*0.43,
        height:height*0.09,
        borderColor:'rgb(18,182,103)', 
        borderWidth: 2, 
        alignItems:'center'
    },

    textCadastrar:{
        fontSize:15,
        marginTop:8
    },

    imgGoogle2:{
        marginTop:50,
        marginLeft:100

    },

    imgFaBook:{
        marginTop:50,
        marginRight:100

    },

    linha:{
        height:height*0.001,
        width:width*0.4,
        flex:1,
        backgroundColor:'rgb(159, 160, 162)'
    },

    ajustar3:{
        alignItems:'center',
        marginVertical:10,
        flexDirection:'row',
        paddingHorizontal: 10,
        marginTop:30
    },

    textOu:{
         marginHorizontal: 10,
         fontSize:15
    },

    iconButton: {
    padding: 5,
  },

  senha:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    
  }

});

export default styles;