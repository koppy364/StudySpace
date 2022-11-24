import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { signIn, signUp } from '../../lib/auth' 

const SignUpScreen = () => {
const [Username, setUsername] = React.useState('');  
const [Email, setEmail] = React.useState('');
const [Password, setPassword] = React.useState('');
const [PasswordRepeat, setPasswordRepeat] = React.useState('');

const navigation = useNavigation();

const onRegisterPressed = () => {
  console.warn("onRegisterPressed Pressed");
  S
  navigation.navigate("SignIn");
  
}
const onSignInPress = () => {
  console.warn("Sign In Pressed");
  navigation.navigate("SignIn");
}

const height = useWindowDimensions().height;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.root}>
    <Text style={style.title}>Create an account</Text>

        <CustomInput placeholder="Username" value={Username} setValue={setUsername} />
        <CustomInput placeholder="email" value={Email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={Password} setValue={setPassword} secureTextEntry={true} />
        <CustomInput placeholder="PasswordRepeat" value={PasswordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />

        <CustomButton text="Register" onPress={onRegisterPressed}/>

        <SocialSignInButtons />

        <CustomButton text="Have an account? Sign in" onPress={onSignInPress} type="TERTIARY" />

    </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  root:{
    alignItems: 'center', 
    padding: 20,
  },
  Logo: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60' ,
    margin : 10,
  }
});

export default SignUpScreen