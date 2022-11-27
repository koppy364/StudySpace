import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'  
import { useNavigation } from '@react-navigation/native';

const MyPageScreen = () => {
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf:'center'}}>MyPage</Text>
    </View>
  )
}

export default MyPageScreen