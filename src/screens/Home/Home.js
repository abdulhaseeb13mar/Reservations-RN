/* eslint-disable no-lone-blocks */
import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import WrapperScreen from '../../components/WrapperScreen/WrapperScreen';
import TextInput from '../../components/textInput/textInpt';
import {metrics} from '../../shared/Theme';
import {Button} from 'react-native-elements';
import {isFormValid} from './isFormValid';

function Home(props) {
  const [name, setName] = useState('');
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');

  const onBtnClick = () => {
    const response = isFormValid(name, email);
    console.log(response);
    if (response.status === false) {
      errorMsgHandler(response.errCategory, response.errMsg);
    } else {
      console.log('every thing is correct');
    }
  };

  const errorMsgHandler = (errCategory, errMsg) => {
    if (errCategory === 'name') {
      setNameErrorMsg(errMsg);
      setEmailErrorMsg('');
    } else if (errCategory === 'email') {
      setEmailErrorMsg(errMsg);
      setNameErrorMsg('');
    }
  };

  return (
    <WrapperScreen>
      <ScrollView bounces={false}>
        <View>
          <Text>this is home screen</Text>
          <Text>this is home screen</Text>
          <Text>this is home screen</Text>
          <Text>this is home screen</Text>
          <Text>this is home screen</Text>
        </View>
        <View style={styles.CenterInputWrapper}>
          <View style={styles.InputWrapper}>
            <TextInput
              value={name}
              label="Name"
              placeholder="Enter your name"
              handleChange={(text) => setName(text)}
              errorMsg={nameErrorMsg}
            />
          </View>
        </View>
        <View style={styles.CenterInputWrapper}>
          <View style={styles.InputWrapper}>
            <TextInput
              value={email}
              label="Email"
              placeholder="Enter your email"
              handleChange={(text) => setEmail(text)}
              errorMsg={emailErrorMsg}
            />
          </View>
        </View>
        <Button
          title="Confirm"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={onBtnClick}
        />
      </ScrollView>
    </WrapperScreen>
  );
}

const border = {
  borderColor: 'red',
  borderWidth: 1,
};

const styles = StyleSheet.create({
  btn: {
    width: metrics.width * 0.7,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: metrics.height * 0.01,
  },
  CenterInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: metrics.height * 0.01,
    // ...border,
  },
  InputWrapper: {
    width: metrics.width * 0.7,
    // ...border,
  },
});

export default Home;
