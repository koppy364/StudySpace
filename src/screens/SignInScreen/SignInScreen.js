import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {

const [Username, setUsername] = React.useState('');  
const [Password, setPassword] = React.useState('');
const navigation = useNavigation();


const onSignInPress = () => {
  navigation.navigate("Home");
}

const onForgotPasswordPress = () => {
}

const onSignUpPress = () => {
  navigation.navigate("SignUp");
}

const height = useWindowDimensions().height;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <Image source={Logo}
        style={[style.Logo, {height: height * 0.3}]}
        resizeMode="contain"/>

        <CustomInput placeholder="Username" value={Username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={Password} setValue={setPassword} secureTextEntry={true} />

        <CustomButton text="Sign In" onPress={onSignInPress}/>
        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPress} type="TERTIARY" />

        <SocialSignInButtons/>

        <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress} type="TERTIARY" />

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
});

export default SignInScreen