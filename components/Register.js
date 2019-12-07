import React from 'react';
import {Button, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export class Register extends React.Component {
  render() {
    return (<View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => this.props.navigation.navigate('RegisterDetail')}/>
    </View>);
  }
}

export class RegisterDetail extends React.Component {
  render() {
    return (<View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => this.props.navigation.navigate('RegisterDetail')}/>
    </View>);
  }
}
