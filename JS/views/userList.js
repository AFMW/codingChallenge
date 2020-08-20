// app/userList.js

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
import { 
  azulOscuroKit,
  rojoKit,
  naranjaKit,
  azulClaroKit,
  serverBackIp,
  protocolo,
  direccion,
  paramMetodo,
  paramPais,
  paramPage,
  paramApiKey,
  apiKey,
  paramFormatoRespuesta,
  colorTextoGeneral,
  colorTextoPlaceholder
} from '../properties.js'
var styleSheetMio = require('./styles.js')
import debounce from 'lodash/debounce';
import Icon from 'react-native-vector-icons/testIcons';
import ScalableText from '../components/scalableText';
import renderIf from 'render-if' //https://github.com/ajwhite/render-if
/*-----------------------------------------------SE INICIALIZA CLASE Y SE INSTANCIAN VARIABLES STATE--------------------------------*/

class userList extends Component{

    constructor(props){
        super(props);
        console.log(props)
        this.state= {
            banderaContenido:props.infoPedir,
            apellido:"",
            items: [],
            itemsFix:[],
            itemBuscados:[],
            pagina:0,
            loading:true,
            refreshingItems:false
        };
        this.onEndReachedCalledDuringMomentum = false;
        this.pedirInfoRetardado=debounce(this.pedirInfo,800)
        this._handleListEnd = this._handleListEnd.bind(this);
        this.onRefreshControl=this.onRefreshControl.bind(this);
        this._rowRenderer = this._rowRenderer.bind(this);
        this._rowEmpty = this._rowEmpty.bind(this);
        
    }

    /*-----------------------------------------------SE DEFINEN ACCIONES EN ARRANQUE DE PANTALLA--------------------------------*/
    componentDidMount() {
      // console.log(this.state.pagina)
      // this.pedirInfoRetardado()
      this.pedirInfo()
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

    /*-----------------------------------------------FUNCION QUE BUSCA POR APELLIDO--------------------------------*/
  	searchApellido(searchedText){
      	this.setState({apellido:searchedText})
      	if (searchedText!="") {
          	var itemBuscados = this.state.items.filter(function(dato) {
            	return dato.name.last.toLowerCase().indexOf(searchedText.toLowerCase())> -1
          	});
          	this.setState({items: itemBuscados});
      	}else{
          	var itemBuscados = []
          	this.setState({items: this.state.itemsFix});
      	}
  	}

    /*-----------------------------------------------LIMPIA Y VUELVE Y CARGA ITEMS--------------------------------*/
    onRefreshControl(text){
        this.setState({pagina:0, items:[],refreshingItems:false})
        this.pedirInfo()
    }

    /*-----------------------------------------------FUNCION QUE PIDE LA INFO--------------------------------*/
    pedirInfo(){
        fetch(serverBackIp+this.state.pagina)
	        .then((response) => response.json())
	        .then((responseJson) => {
	          // console.log(responseJson)
	              let nuevos = this.state.items.concat(responseJson.results)
	              this.setState({loading:false,items:nuevos,itemsFix:nuevos})
	              // // AsyncStorage.setItem("tracks",JSON.stringify(nuevos));
	              // console.log(nuevos)
	        })
	        .catch(function(err) {
	            console.log(err);
	        }); 
    }

    /*-----------------------------------------------FUNCION QUE PIDE LA INFO CUANDO TOCA FONDO--------------------------------*/
    _handleListEnd(info) {
        // console.log(this.state.pagina)
        // console.log(info)
        if(!this.onEndReachedCalledDuringMomentum){
            let paginaFix=this.state.pagina+1
            // console.log(paginaFix)
            this.setState({pagina:paginaFix})
            this.pedirInfoRetardado();
            this.onEndReachedCalledDuringMomentum = true;
        }
    }

    verDetalle(infoItem){
      // Actions.detalleItem({item:infoItem})
      this.props.navigation.navigate('userDetails', { item: infoItem })
    }

    /*-----------------------------------------------FUNCION QUE PINTA LA INFO--------------------------------*/
    _rowRenderer(rowData, sectionID, rowID){ 
        return (
            <TouchableOpacity key={rowID} onPress={()=>{this.verDetalle(rowData.item)}} style={styleSheetMio.styles.itemRow}>
                <Image style={styleSheetMio.styles.itemImage} imageResize={"cover"} source={{uri: rowData.item.picture.thumbnail }} />
                <View style={styleSheetMio.styles.itemRightCol}>
                    <ScalableText allowFontScaling={false} numberOfLines={1} style={styleSheetMio.styles.labelName}>{rowData.item.name.last}<ScalableText allowFontScaling={false} numberOfLines={1} style={styleSheetMio.styles.labelName}>{", "+rowData.item.name.first}</ScalableText></ScalableText>
                    <ScalableText allowFontScaling={false} numberOfLines={1} style={styleSheetMio.styles.labelSubtitle}>{rowData.item.phone}</ScalableText>
                </View>
                <View style={{position:'absolute',right:8}}>
	                <Icon  
	                  name={'chevron-right'}
	                  size={12}
	                  color={colorTextoGeneral}
	                  />
				</View>
            </TouchableOpacity>
        )
    }
    _rowEmpty(){
        return( <View style={{alignItems:'center',marginTop:15}}>
                      <ScalableText allowFontScaling={false} style={styleSheetMio.styles.labelEmpty}>No Results Found</ScalableText>
                    {/*<Image style={styles.catimg2} resizeMode={'contain'} source={require("../../images/logo-gloho.png")} />            */}
                </View>)
    }
    
    onFocus(){
    	this.props.navigation.setOptions({ headerShown:false })
    }
    onBlur(){
    	this.props.navigation.setOptions({ headerShown:true })
    }

    


    render(){
        return (
            <SafeAreaView style={styleSheetMio.styles.containerGeneral}>
                
                <StatusBar backgroundColor="white" barStyle="dark-content" translucent={false} hidden={false}/>
                <View>
                    <View style={styleSheetMio.styles.cajaInput}>
                        <TextInput  
                            ref={(input) => { this.emailTxt = input; }}
                            keyboardType={"email-address"}
                            editable={true}
                            placeholder={"Search"}
                            placeholderTextColor={colorTextoPlaceholder}
                            style={styleSheetMio.styles.textInput}
                            autoCapitalize={'none'}
                            clearButtonMode="always"
                            returnKeyType='next'
                            onFocus={ () => this.onFocus() }
                            onBlur={ () => this.onBlur() }
                            onSubmitEditing={this.nextPass}
                            onChangeText={(text) =>{
                                this.searchApellido(text)
                            }}
                            value={this.state.apellido}/>
                    </View>
                    {renderIf(this.state.loading==true)(
                        <ActivityIndicator
                          animating={true}
                          size="large"
                          color={azulOscuroKit}
                        />
                    )}
                    {renderIf(this.state.loading==false)(
                        <View keyboardShouldPersistTaps='handled' style={styleSheetMio.styles.contenedorItems}>
                            <FlatList
                                ref={(ref2) => this.myScrollProyectos  = ref2}
                                // data={this.state.items}
                                data={this.state.items.sort((a, b) => a.name.last.localeCompare(b.name.last))}
                                // onEndReachedThreshold={-20}
                                initialListSize={50}
                                pageSize={50}
                                premptiveLoading={8}
                                enableEmptySections={true}
                                scrollViewProps={{useNativeDriver: true }}
                                onEndReachedThreshold={1.5}
                                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                                // initialNumToRender={5}
                                keyExtractor={(item, index) => String(index)}
                                onEndReached={this._handleListEnd}
                                refreshControl={
                                    <RefreshControl
                                      refreshing={this.state.refreshingItems}
                                      onRefresh={this.onRefreshControl}
                                      colors={[azulOscuroKit,rojoKit,naranjaKit,azulClaroKit]}
                                    />
                                }
                                ListEmptyComponent={this._rowEmpty}
                                renderItem={this._rowRenderer}
                                />
                        </View>
                    )}
                </View>
            </SafeAreaView>
        );
    }
}

export default userList;
