import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Item, Input, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

renderInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
  var hasError = false;
  if (error !== undefined) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Input {...input} placeholder={placeholder} />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

const styles = StyleSheet.create({
  formField: {
    width: "100%"
  },
  header: {
    flexDirection: "column"
  },
  headerText: {
    fontSize: 12
  }
});

const PaymentForm = props => {
  return (
    <View>
      <Text>Payment Details</Text>
      <Text style={styles.headerText}>Payment Method</Text>
      <Field
        name="cardname"
        placeholder="Name on Card"
        component={this.renderInput}
      />
              <Field
        name="cardnumber"
        placeholder="Card Number"
        component={this.renderInput}
      />
      <Field
        name="expdate"
        placeholder="Expiration Date"
        component={this.renderInput}
      />
      <Field name="ccv" placeholder="CCV" component={this.renderInput} />
    </View>
  );
};

export default reduxForm({ form: "PaymentForm" })(PaymentForm);
