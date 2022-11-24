import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'  
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  const onMyPagePress = () => {
    navigation.navigate("MyPage");
  }
  
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf:'center'}}>Home</Text>
      <CustomButton text="MyPage" onPress={onMyPagePress}/>
    </View>
  )
}

export default HomeScreen