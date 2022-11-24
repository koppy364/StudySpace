import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const onSignInFacebook = () => {
    console.warn("onSignInFacebook Pressed");
  }
  const onSignInGoogle = () => { 
    console.warn("onSignInGoogle Pressed");
  }
  const onSignInApple = () => {
    console.warn("onSignInApple Pressed");
  }
  
const SocialSignInButtons = () => {
  return (
    <>
        <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="4765A9"/>
        <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="DD4D44"/>
        <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#e3e3e3" fgColor="363636" />
    </>
  )
}

export default SocialSignInButtons