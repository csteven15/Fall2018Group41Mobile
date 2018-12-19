import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

const products = [
  { name: 'Daily Permit', desc: 'Valid for a Day', price: '$14.99' },
  { name: 'Tax', desc: '7%', price: '$1.05' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiration date', detail: '04/2024' },
];

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

const Review = props => {
  return (
    <View>
      <Text>Review Your Order</Text>
      <Text style={styles.headerText}>Order Summary</Text>
      <View>
        {products.map(product => (
          <View style={styles.ViewItem} key={product.name}>
            <Text>{product.name}</Text>
            <Text>{product.desc}</Text>
            <Text>{product.price}</Text>
          </View>
        ))}
      </View>
      <View style={styles.ViewItem}>
        <Text>Total</Text>
        <Text style={styles.total}>$16.04</Text>
      </View>
      <View>
        <View>
          <Text variant="h6" style={styles.title}>
            Shipping
          </Text>
          <Text>John Smith</Text>
          <Text>{addresses.join(", ")}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Payment details</Text>
        <View>
          {payments.map(payment => (
            <View key={payment.name}>
              <View>
                <Text gutterBottom>{payment.name}</Text>
              </View>
              <View>
                <Text gutterBottom>{payment.detail}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Review;