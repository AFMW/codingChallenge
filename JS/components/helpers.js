import { serverBackIp } from '../properties.js'
import DeviceInfo from 'react-native-device-info';

export default function enviarReporteError(errorMio,callback) {
	erroresJson.body.id_usuario=infoGeneralLogin._id.$oid
	erroresJson.body.problema=errorMio
	erroresJson.body.callback=callback
	erroresJson.body.version=loginJson.body.v
    erroresJson.body.dispositivo=DeviceInfo.getModel()
	console.log(erroresJson.body)
	let data = JSON.stringify(erroresJson)
    
    // console.log(erroresJson.body)
    fetch(serverBackIp+'api-gestor-errores/setError',{
        'method': 'POST',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, 
        'body': data}
    )
    .catch(function(err) {
        console.log(err);
    });

}

/*-----------------------------------------------FUNCION QUE ARREGLA STRING CORREO--------------------------------*/    
export function fixCorreo(text){    
    let textRecibido=text.split("@")    
    let correoAntes= textRecibido[0]    
    let correoDespues= textRecibido[1]  
    let totalCaracteres=correoAntes.length  
    let totalCaracteresNuevo= totalCaracteres/2 
    let respuesta=[]    
    for (let i = 0; i < correoAntes.length; i++) {  
        if (i<totalCaracteresNuevo) {   
            respuesta.push("*") 
        }else{  
            respuesta.push(correoAntes[i])  
        }   
    }   
    let parteDosSplit= correoDespues.split(".") 
    let totalCaracteresDos= parteDosSplit[0].length 
    let respuesta2=[]   
    let resto=[]    
    let totalCaracteresDosNuevo= totalCaracteresDos/2   
    for (let h = 0; h < totalCaracteresDos; h++) {  
        if (h<totalCaracteresDosNuevo) {    
            respuesta2.push(parteDosSplit[0][h])    
        }else{  
            respuesta2.push("*")    
        }   
    }   
    for (let k = 0; k < parteDosSplit.length; k++) {    
        resto.push("."+parteDosSplit[k])    
    }       
    let final = respuesta.toString().replace(/,/g,"")+"@"+respuesta2.toString().replace(/,/g,"")+resto[1].toString().replace(/,/g,"")   
    return final    
}

/*-----------------------------------------------FUNCION QUE ARREGLA STRING CELULAR --------------------------------*/  
export function fixCelular(text){   
    let textRecibido=text.toString()    
    let totalCaracteres=textRecibido.length 
    let totalCaracteresNuevo= totalCaracteres-4 
    let respuesta=[]    
    for (let i = 0; i < totalCaracteres; i++) { 
        if (i < totalCaracteresNuevo){  
            respuesta.push("*") 
        }else{  
            respuesta.push(textRecibido[i]) 
        }   
    }   
    return respuesta.join("")   
}      
