/*-----------------------------------------------SE IMPORTAN LOS COMPONENTES NECESARIOS--------------------------------*/
import React, {Component} from 'react';
import {AsyncStorage,AppState,Alert} from 'react-native';
import PushNotification from  'react-native-push-notification';
// import { Actions, ActionConst } from 'react-native-router-flux';
// var MessageBarAlert = require('react-native-message-bar').MessageBar;
// var MessageBarManager = require('react-native-message-bar').MessageBarManager;



/*-----------------------------------------------SE INICIALIZA CLASE Y SE INSTANCIAN VARIABLES STATE--------------------------------*/
class PushController extends Component{
	constructor(props){
	    super(props);
	    this.state= {
	      	valorPushBadge:""
	    };
  	}
  	/*-----------------------------------------------SE DEFINEN ACCIONES EN ARRANQUE DE PANTALLA--------------------------------*/
	componentDidMount(){
			PushNotification.configure({
			    requestPermissions: true, 
			    senderID: "142522277399",// Prod Agentes
			    permissions: 
		    	{
				    alert: true,
				    badge: true,
				    sound: true
				},
			    onRegister: function(token) 
			    {
			        console.log( 'TOKEN:', token );
			        erroresJson.body.sistema=token.os
			        // Alert.alert('',token.token,[{text: 'OK', onPress: () => console.log('OK Pressed!')},])
		    	},
			});		
	}
	render(){
		return null;
	}
}export default PushController