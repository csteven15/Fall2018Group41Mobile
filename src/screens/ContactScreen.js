import React, {Component} from 'react';
import {Platform, StyleSheet, View, SafeAreaView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text} from 'native-base';

const ContactScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Contact Screen</Text>
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

export default ContactScreen;