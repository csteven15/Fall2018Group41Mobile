import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text} from 'native-base';
import { Field, reduxForm } from 'redux-form';


renderInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
  var hasError= false;
  if(error !== undefined){
    hasError= true;
  }
  return( 
    <Item error= {hasError}>
      <Input {...input} placeholder={placeholder}/>
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  )
}

const SignInForm = (props) => {
  const { handleSubmit, reset } = props;

  return (
    <Container style={styles.container}>
      <View style={styles.subContainer1}>
        
        <Field name='username' placeholder='Username' component={this.renderInput} />
        <Field name='password' placeholder='Password' component={this.renderInput} />
        <Button style={styles.inputs} full rounded>
          <Text>Continue as Guest</Text>
        </Button>
        <Button style={styles.inputs} full rounded onPress={handleSubmit}>
          <Text>Sign In</Text>
        </Button>
      </View>
    </Container>
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

export default reduxForm({ form: 'SignInForm' })(SignInForm);
