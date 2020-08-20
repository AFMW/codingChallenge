import { StyleSheet,Dimensions } from 'react-native'
import { 
  fuenteBold,
  fuenteRegular,
  fuenteMedium,
  colorTextoGeneral,
  colorSombraSuave,
  azulOscuroKit,
  colorBordes
} from '../properties.js'

//CONSTANTE DE TAMANO DE PANTALLA
const windowSize = Dimensions.get('window');

//ESTILOS PANTALLA LOGIN
const styles = StyleSheet.create({   
    //ESTILO DROPDOWN ALERT
    tituloDropdownAlert:{
        fontFamily:fuenteMedium,
        color:'white',
        fontSize:15
    },

    //ESTILOS PANTALLA PRINCIPAL MENU
    containerGeneral:{                       
      flex: 1, 
      backgroundColor: 'white'
    },
    header:{
      position:'absolute',
      height:44,
      backgroundColor:'white',
      zIndex:2, 
      width:"100%", 
      justifyContent:'center',
      borderBottomWidth:1
    },
    labelHeader:{
      color: colorTextoGeneral,
      fontFamily: fuenteMedium,//fuenteRegular,
      fontSize: 17,
      alignSelf:'center'
    },
    labelInput:{
      color: colorTextoGeneral,
      fontFamily: fuenteMedium,//fuenteRegular,
      fontSize: 17
    },
    containerContenidoLogin:{
      height: windowSize.height-99,
      paddingLeft:16,
      paddingRight:16,
      top:44
    },
    cajaInput:{
      paddingTop:8,
      paddingBottom:8,
      backgroundColor: "#CECED2"
    },
    textInput:{
      marginLeft:16,
      marginRight:16,
      borderRadius:10,
      paddingRight:8,
      paddingLeft:8,
      height: 36,
      fontSize: 15,
      borderWidth:1,
      borderColor:"#CECED2",
      color: colorTextoGeneral,
      fontFamily: fuenteRegular,
      backgroundColor: colorSombraSuave
    },
    labelBotonAction:{
      color: 'white', 
      fontFamily: fuenteMedium,//fuenteRegular, 
      fontSize:17
    },
    botonAction:{
      borderWidth: 1,
      borderRadius: 4, 
      backgroundColor: azulOscuroKit,
      borderColor: azulOscuroKit,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "Roboto-Regular"
    },

    //ESTILOS PANTALLA PRINCIPAL LISTADO
    header2Elementos:{
      position:'absolute',
      height:44,
      backgroundColor:'white',
      flexDirection:'row',
      zIndex:2, 
      width:"100%", 
      alignItems: 'center', 
      flex: 1, 
      justifyContent: 'center',
      borderBottomWidth:1
    },
    botonIzquierdaHeader:{
      paddingLeft:16, 
      position:'absolute',
      left:0, 
      justifyContent:'center', 
      alignItems:'center'
    },
    contenedorItems:{
      height:windowSize.height-126, 
      backgroundColor:'white'
    },
    itemRow:{
      flexDirection:"row", 
      alignItems:'center',
      position:'relative',
      borderBottomWidth:1,
      height:windowSize.height/10
    },
    itemImage:{
      height:48,
      width:48,
      marginLeft:8
    },
    itemLeftCol:{
      flexDirection:"column", 
      justifyContent:"center",
      paddingLeft:15
    },
    itemRightCol:{
      flexDirection:"column", 
      justifyContent:"center",
      paddingLeft:15,
      paddingRight:48+30+30
    },
    labelName:{
      color: colorTextoGeneral,
      fontFamily: fuenteMedium,//fuenteRegular,
      fontSize: 17
    },
    labelSubtitle:{
      color: colorTextoGeneral,
      fontFamily: fuenteRegular,
      fontSize: 15
    },

    //
    containerDetalle:{
      marginTop:44,
    },
    itemImageDetalle:{
      alignSelf:'center',
      height:windowSize.height/3,
      width:'70%',
      borderRadius:10
    },
    seccionDetalle:{
      padding:16,
      alignItems:'center'
    }

})
export { styles }           