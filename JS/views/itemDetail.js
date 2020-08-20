// app/detalleItem.js

/*-----------------------------------------------SE IMPORTAN LOS COMPONENTES NECESARIOS--------------------------------*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  TextInput,
  Dimensions,
  AsyncStorage,
  FlatList,
  AppState,
  Keyboard,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  RefreshControl,
  ActivityIndicator,
  Linking,
  SafeAreaView,
  StatusBar
} from 'react-native';
var styleSheetMio = require('./styles.js')
import ScalableText from '../components/scalableText';
/*-----------------------------------------------SE INICIALIZA CLASE Y SE INSTANCIAN VARIABLES STATE--------------------------------*/

class detalleItem extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state= {
            name:props.route.params.item.name.first,
            lastname:props.route.params.item.name.last,
            title:props.route.params.item.name.title,
            adress:props.route.params.item.location.street.number+" "+props.route.params.item.location.street.name+", "+props.route.params.item.location.city,
            image:props.route.params.item.picture.large
        };
    }

    /*-----------------------------------------------SE DEFINEN ACCIONES EN ARRANQUE DE PANTALLA--------------------------------*/
    componentDidMount() {
    }
    /*-----------------------------------------------SE DEFINE QUE ACCIONES VAN A SER INTERMITENTES--------------------------------*/
    componentWillUnmount(){
        
    }
    /*-----------------------------------------------SE DEFINEN ACCIONES AL RETORNAR A LA PANTALLA--------------------------------*/
    // UNSAFE_componentWillReceiveProps(nextProps){
    //   console.log(nextProps)
    // }
    static getDerivedStateFromProps(props, state){
      // console.log(props)
      // console.log(state)
    }

    render(){
        return (
            <SafeAreaView style={styleSheetMio.styles.containerGeneral}>
                <StatusBar backgroundColor="white" barStyle="dark-content" translucent={false} hidden={false}/>
                
                <View>
                    <ScrollView style={styleSheetMio.styles.containerDetalle}>
                        <Image style={styleSheetMio.styles.itemImageDetalle} imageResize={"contain"} source={{uri: this.state.image }} />
                        <View style={styleSheetMio.styles.seccionDetalle}>      
                            <ScalableText allowFontScaling={false} numberOfLines={2} style={styleSheetMio.styles.labelName}>{this.state.lastname+", "+this.state.name }</ScalableText>
                            <ScalableText allowFontScaling={false} numberOfLines={1} style={styleSheetMio.styles.labelSubtitle}>{this.state.adress}</ScalableText>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default detalleItem;
