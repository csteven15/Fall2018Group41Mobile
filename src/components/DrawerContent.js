import React from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    email: state.auth.email
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  username: {
    color: '#fff',
    fontWeight: '600',
    margin: 5,
    fontSize: 20
  },
  email: {
    color: '#fff',
    margin: 5,
    fontSize: 16
  },
  listContainer: {
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  list: {
    marginLeft: 8,
    fontSize: 20
  },
});

const DrawerContent = (props) => {
  const { username, email } = props;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View
        style={{ backgroundColor: '#000', margin: 5 }}
      >
        <Image
          source={require('./../images/pegasus.png')}
          style={{
            width: '40%',
            justifyContent: 'flex-start',
            marginLeft: 10
          }}>
        </Image>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={Actions.home}><Text style={styles.list}>Home </Text></TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={Actions.permits}><Text style={styles.list}>Permits </Text></TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={Actions.vehicles}><Text style={styles.list}>Vehicles </Text></TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={Actions.scanner}><Text style={styles.list}>Scanner </Text></TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={Actions.maps}><Text style={styles.list}>Maps </Text></TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={Actions.contact}><Text style={styles.list}>Contact </Text></TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity onPress={() => Actions.reset('signin')}><Text style={styles.list}>Sign Out</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps)(DrawerContent);