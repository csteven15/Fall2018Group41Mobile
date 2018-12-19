import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Right, Body, Icon } from 'native-base';

import ContactForm from '../components/ContactForm';
import VehicleForm from '../components/VehicleForm';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';
import { Actions } from 'react-native-router-flux';

const steps = ['Contact Information', 'Vehicle Information', 'Payment details', 'Review your order'];

getStepContent = step => {
  console.log("getstepcontent");
  switch (step) {
    case 0:
      return <ContactForm />;
    case 1:
      return <VehicleForm />;
    case 2:
      return <PaymentForm />;
    case 3:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

class GuestScreen extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    const { activeStep } = this.state;
    console.log("clicked on next");
    console.log(activeStep);
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { activeStep } = this.state;
    console.log(activeStep);
    return (
      <Container>
        <Header>
          <Left>
            {activeStep !== 0 && (
              <Button transparent onPress={this.handleBack}>
                <Icon name="arrow-back" />
              </Button>
            )}
          </Left>
          <Body>
            <Text>Guest</Text>
          </Body>
          <Right>
            {activeStep === steps.length - 1 ? (
              <Button onPress={this.handleNext} transparent>
                <Text>Place Order</Text>
              </Button>
            ) : null}
            {activeStep !== steps.length - 1 && activeStep !== steps.length ? (
              <Button onPress={this.handleNext} transparent>
                <Text>Next</Text>
              </Button>
            ) : null}
          </Right>
        </Header>
        <Content>
          {activeStep === steps.length ? (
            <View>
              <Text>Thank you for your order.</Text>
              <Text>
                Your order number is #
                {Math.floor(Math.random() * 100000000) + 1}. We have emailed
                your order confirmation, and will send you an update when your
                order has shipped.
              </Text>
              <Button onPress={() => Actions.reset("signin")}>
                <Text>Return To Home Page</Text>
              </Button>
            </View>
          ) : (
            <View>{getStepContent(activeStep)}</View>
          )}
        </Content>
      </Container>
    );
  }
}

export default GuestScreen;
