import React, { PureComponent } from 'react';
import { View, Text,  Dimensions, StyleSheet, StatusBar } from 'react-native';
import NetInfo from '@react-native-community/netinfo'
import { rojoKit,fuenteRegular } from '../properties.js'
// import Base64 from '../components/base64.js'
import { Buffer } from 'buffer' // PARA CONVERTIR BASE 64 A UTF

const { height,width } = Dimensions.get('window');

function MiniOfflineSign() {
  
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isConnected: true
    };
  }

  componentDidMount() {
    // NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
    const unsubscribe = NetInfo.addEventListener(state => {
      // console.log(state.isConnected)
      this.setState({isConnected:state.isConnected});
      estadoConexion=state.isConnected
    });

    
  }

  componentWillUnmount() {
    // unsubscribe()
    // NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
      console.log(isConnected)
      this.setState({ isConnected });
      estadoConexion=isConnected
  };

  render() {
    
    if (!this.state.isConnected) {
      StatusBar.setTranslucent(true)
      StatusBar.setBackgroundColor("transparent", true);
      return <MiniOfflineSign />;
    }
      StatusBar.setTranslucent(false)
      StatusBar.setBackgroundColor("white", true);
      return null;
      // return <MiniOfflineSign />;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    // backgroundColor: '#b52424',
    backgroundColor: rojoKit,
    height: 16+StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width:'100%',
    // top:44,
    top:0,
    zIndex:3,
    position:'relative',
    // position: 'absolute',
    // top: 30
  },
  offlineText: { color: 'white', fontFamily: fuenteRegular }
});

export default OfflineNotice;