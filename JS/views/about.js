// app/about.js

/*-----------------------------------------------SE IMPORTAN LOS COMPONENTES NECESARIOS--------------------------------*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  TextInput,
  Dimensions,
  AsyncStorage,
  Picker,
  AppState,
  Platform,
  KeyboardAvoidingView,
  Linking,
  SafeAreaView,
  StatusBar,
  BackHandler,
  NativeModules
} from 'react-native';
import ScalableText from '../components/scalableText';
var styleSheetMio = require('./styles.js')

/*-----------------------------------------------SE INICIALIZA CLASE Y SE INSTANCIAN VARIABLES STATE--------------------------------*/

class about extends Component{
    constructor(props){
        super(props);
    }

    /*-----------------------------------------------SE DEFINEN ACCIONES EN ARRANQUE DE PANTALLA--------------------------------*/
    componentDidMount() {
        // AppState.addEventListener('change', this.handleAppStateChange); 
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    /*-----------------------------------------------SE USA PARA ANULAR EL BOTON BACK--------------------------------------------*/
    handleBackButton() {
        return true;
    }
    /*-----------------------------------------------SE DEFINE QUE ACCIONES VAN A SER INTERMITENTES--------------------------------*/
    componentWillUnmount(){
        // AppState.removeEventListener('change', this.handleAppStateChange);
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    /*-----------------------------------------------SE DEFINEN ACCIONES AL RETORNAR A LA PANTALLA--------------------------------*/
    static getDerivedStateFromProps(props, state){
        // console.log(props)
        // console.log(state)
    }

    render(){
        {/*PINTA CONTAINER GENERAL*/}
        return (
            <SafeAreaView style={styleSheetMio.styles.containerGeneral}>
                {/*PINTA STATUS BAR*/}
                <StatusBar backgroundColor="white" barStyle="dark-content" translucent={false} hidden={false}/>
                {/*PINTA CONTENEDOR DE ITEMS*/}
                <ScrollView  scrollEnabled={false} ref={(ref) => this.myScroll = ref} contentContainerStyle={styleSheetMio.styles.containerContenidoLogin}>
                    <View style={{marginTop:16}}>
                        <ScalableText allowFontScaling={false} style={styleSheetMio.styles.labelHeader}>Hello, I’m Andres Marin</ScalableText>
                        <ScalableText allowFontScaling={false} style={styleSheetMio.styles.labelHeader}>and</ScalableText>
                        <ScalableText allowFontScaling={false} style={styleSheetMio.styles.labelHeader}>this is my React Native Test.</ScalableText>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default about;
