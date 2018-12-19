import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker, Text, Item, Input, Icon } from 'native-base';
import { Field, reduxForm } from 'redux-form';
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

class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    labelWidth: 0
  };

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

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    const states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"];
    return (
      <View>
        <Text>Contact Information</Text>
        <Text style={styles.headerText}>
          Please fill out with your contact information
        </Text>
            <Field
              name="FirstName"
              placeholder="FirstName"
              component={this.renderInput}
              style={styles.formField}
            />
            <Field
              name="LastName"
              placeholder="LastName"
              component={this.renderInput}
              style={styles.formField}
            />
            <Field
              name="AddressLine1"
              placeholder="AddressLine1"
              component={this.renderInput}
              style={styles.formField}
            />
            <Field
              name="AddressLine2"
              placeholder="AddressLine2"
              component={this.renderInput}
              style={styles.formField}
            />
            <Field
              name="City"
              placeholder="City"
              component={this.renderInput}
              style={styles.formField}
            />
            <Item picker>
              <Picker
                mode="dropdown"
                style={{ justifyContent: "flex-end" }}
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Select State"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.state}
                onValueChange={this.handleChange("state")}
              >
                {states.map((state, key) => (
                  <Picker.Item key={key} value={state} label={state} />
                ))}
              </Picker>
            </Item>
            <Field
              name="zip"
              placeholder="Zip"
              component={this.renderInput}
              style={styles.formField}
            />
            <Field
              name="country"
              placeholder="Country"
              component={this.renderInput}
              style={styles.formField}
            />
      </View>
    );
  }
}

export default reduxForm({ form: "ContactForm" })(ContactForm);