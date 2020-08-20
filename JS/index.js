
// app/index.js
console.disableYellowBox = true;
import React, { Component, StyleSheet } from 'react';
import {Animated,Text, Platform,View,AsyncStorage,TouchableOpacity,Image} from 'react-native';
// import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox,Route,TabBar,Schema } from 'react-native-router-flux';
// const createReactClass = require('create-react-class');
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//IMPORTA LAS PANTALLAS
import userList from './views/userList';
import itemDetail from './views/itemDetail';
import about from './views/about';
// import listado from './vistas/listado';
// import detalleItem from './vistas/detalleItem';


const stateHandler = (prevState, newState, action) => {
  // console.log('onStateChange: ACTION:', action);
};

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/hamburger-menu-16-1133961.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage" >
        <Stack.Screen
          name="userList"
          component={userList}
          options={{
            title: 'User List', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#efeff4', //Set Header color
            },
            headerShown:true,
            headerMode:"screen",
            headerTintColor: '#007AFF', //Set Header text color
            headerTitleStyle: {
              color: '#000000',
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="userDetails"
          component={itemDetail}
          options={{
            title: 'User Details', //Set Header Title
            // headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#efeff4', //Set Header color
            },

            headerShown:true,
            headerMode:"screen",
            headerTintColor: '#007AFF', //Set Header text color
            headerTitleStyle: {
              color: '#000000',
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#efeff4', //Set Header color
        },
        headerTintColor: '#000000', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="about"
        component={about}
        options={{
          title: 'About', //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}



class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#8e8e93',
            labelStyle:{color:"#000000"},
            itemStyle: { marginVertical: 5 },
          }}>
          <Drawer.Screen
            name="FirstPage"
            options={{ drawerLabel: 'Users' }}
            component={firstScreenStack} />
          <Drawer.Screen
            name="SecondPage"
            options={{ drawerLabel: 'About' }}
            component={secondScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;