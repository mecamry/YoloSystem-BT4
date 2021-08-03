import React, {useState, useCallback, useRef, useEffect, useMemo} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MyButton from '../../Component/MyButton';
import MyTextInput from '../../Component/MyTextInput';

function Login() {
  const [userName, setUserName] = useState<string>();
  const [passWord, setPassWord] = useState<string>();
  const [errorUserName, setErrorUserName] = useState<string>();
  const [errorPassword, setErrorPassword] = useState<string>();

  const refPassWord = useRef<TextInput>(null);

  useEffect(() => {
    Alert.alert('Info', 'Xin chào bạn đến với Yolo System');
  }, []);

  const isValidField = useCallback((value?: string) => {
    return !!value && value.length > 0;
  }, []);
  useEffect(() => {
    if (isValidField(userName)) {
      setErrorUserName(undefined);
    }
  }, [userName, isValidField]);

  useEffect(() => {
    if (isValidField(passWord)) {
      setErrorPassword(undefined);
    }
  }, [passWord, isValidField]);

  const validateUser = useCallback(() => {
    console.log('validateUser', userName);
    if (isValidField(userName)) {
      setErrorUserName(undefined);
      return true;
    } else {
      setErrorUserName('Bạn phải nhập UserName');
      return false;
    }
  }, [isValidField, userName]);

  const validatePassword = useCallback(() => {
    console.log('validatePassword', passWord);
    if (isValidField(passWord)) {
      setErrorPassword(undefined);
      return true;
    } else {
      setErrorPassword('Bạn phải nhập Password');
      return false;
    }
  }, [isValidField, passWord]);

  const validateLogin = useCallback(() => {
    const isValidUser = validateUser();
    const isValidatePassword = validatePassword();
    if (isValidUser && isValidatePassword) {
      Alert.alert(
        'Success',
        'Xin chào' + userName + 'bạn đã đăng nhập thành công vào hệ thống',
      );
    }
  }, [userName, validatePassword, validateUser]);

  const isValidLogin = useMemo(() => {
    return isValidField(userName) && isValidField(passWord);
  }, [isValidField, passWord, userName]);

  const loginButtonStyle = useMemo(
    () =>
      isValidLogin
        ? styles.button
        : {...styles.button, backgroundColor: 'gray'},
    [isValidLogin],
  );

  const focusPassword = useCallback(() => {
    refPassWord?.current?.focus();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.loginTitle}>Login to Yolo System</Text>
        <MyTextInput
          error={errorUserName}
          value={userName}
          onChangeText={setUserName}
          style={styles.textInput}
          returnKeyType="next"
          onBlur={validateUser}
          onSubmitEditing={focusPassword}
          clearButtonMode="while-editing"
        />
        <MyTextInput
          error={errorPassword}
          value={passWord}
          onChangeText={setPassWord}
          style={styles.textInput}
          returnKeyType="next"
          onBlur={validatePassword}
          ref={refPassWord}
          onSubmitEditing={validateLogin}
          clearButtonMode="while-editing"
        />
        <MyButton
          disabled={!isValidLogin}
          style={loginButtonStyle}
          buttonText="Login"
          onPress={validateLogin}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  loginTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
    fontWeight: '800',
    marginVertical: 50,
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    padding: 20,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'purple',
  },
});
export default Login;
