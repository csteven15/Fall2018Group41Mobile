import React, {Component} from 'react';
import {Platform, StyleSheet, View, SafeAreaView } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer1}>
        <Text>Hi Home Screen</Text>
          <Button
            rounded
            onPress={Actions.scanner}
          >
            <Text>Go to Scanner Screen</Text>
          </Button>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer1: {
    width: '60%',
    height: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    margin: 5
  }
})

export default HomeScreen;