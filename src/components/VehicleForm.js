import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker, DatePicker, Text, Item, Input, Icon } from "native-base";
import { Field, reduxForm } from "redux-form";

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

class VehicleForm extends React.Component {
  state = {
    state: "",
    make: "",
    color: "",
    year: "",
    chosenDate: ""
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

  setDate = (newDate) => {
    this.setState({ chosenDate: newDate });
  }

  render() {
    const { classes } = this.props;
    const states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"];
    const makes = ["Acura", "Alfa Romeo", "Amc", "Aprilia", "Asuna", "Audi", "Austin Healey", "Bentley", "Bertone", "BMW", "Boat Trailer", "Buick", "Cadillac", "Capri", "Chevrolet", "Chrysler", "Daewoo", "Daihatsu", "Datsun", "Dodge", "Ducati", "Eagle", "Ferrari", "Fiat", "Ford", "Foreign", "Freightliner", "Gem eS", "Genesis", "Geo", "GMC", "Harley Davidson", "Honda", "Hummer", "Hyundai", "Iai", "Infiniti", "Innocenti", "International Scout", "Isuzu", "Jaguar", "Jeep", "Jensen Healey", "Kawasaki", "Kia", "Kurbmaster", "Lada", "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lincoln", "Lotus", "Mazda", "Maserati", "Mercedes Benz", "Mercury", "MG", "Mini", "Mitsubishi", "Moto Guzzi", "Mukur", "Nissan", "Oldsmobile", "Opel", "Optima", "Pantera", "Peugeot", "Plymouth", "Pontiac", "Porsche", "Range Rover", "Saab", "Saturn", "Scion", "Skoda", "Smart", "Sterling", "Subaru", "Suzuki", "Tesla", "Toyota", "Triumph", "Vespa", "Volkswagen", "Volvo", "Yamaha", "Yugo", "ZXYV"];
    const colors = ["Beige", "Black", "Blue", "Bronze", "Brown", "Burgundy", "Champagne", "Copper", "Cream", "Dark Blue", "Dark Gray", "Dark Green", "Dark Red", "Gold", "Gray", "Green", "Jade", "Light Blue", "Light Gray", "Light Green", "Maroon", "Mauve", "Orange", "Peach", "Pewter", "Pink", "Purple", "Red", "Rose", "Rosewood", "Rust", "Silver", "Tan", "Taupe", "Teal", "White", "Wine", "Yellow"];
    const today = new Date();
    const mm = today.getMonth();
    const dd = today.getDate();
    const nyyyy = today.getFullYear() + 1;
    const nnyyyy = today.getFullYear() + 3;
    return (
      <View>
        <Text>Vehicle Information</Text>
          <Text style={styles.headerText}>
            Please fill out your vehicle and permit information
          </Text>
          <Field
            name="Plate"
            placeholder="Plate"
            component={this.renderInput}
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
          <Item picker>
            <Picker
              mode="dropdown"
              style={{ justifyContent: "flex-end" }}
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select Make"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.make}
              onValueChange={this.handleChange("make")}
            >
              {makes.map((make, key) => (
                <Picker.Item key={key} value={make} label={make} />
              ))}
            </Picker>
          </Item>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select Color"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.color}
              onValueChange={this.handleChange("color")}
            >
              {colors.map((color, key) => (
                <Picker.Item key={key} value={color} label={color} />
              ))}
            </Picker>
          </Item>
          <Field
            name="Year"
            placeholder="Year"
            component={this.renderInput}
          />
          <Text>Permit Expiration Date</Text>
          <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date(nyyyy, mm, dd)}
            maximumDate={new Date(nnyyyy, mm, dd)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select Date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#bfc6ea" }}
            onDateChange={this.setDate}
          />
        </View>
    );
  }
}

export default reduxForm({ form: "VehicleForm" })(VehicleForm);
