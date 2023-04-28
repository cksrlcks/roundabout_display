import React from 'react';
import {
  Button,
  SafeAreaView, ScrollView, StyleSheet, Text, View,
  BackHandler,
  Alert
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from "../types";
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>


export default function Home({navigation,route}: HomeScreenProps){

    const handleClose = () => 
      Alert.alert('시스템종료', '디스플레이를 종료합니다' ,[
        {
          text : '취소',
          style:'cancel',
        },
        {
        text : '종료',
        onPress : () => {BackHandler.exitApp()}
      },
    ])
    return <SafeAreaView>
    <ScrollView contentContainerStyle={styles.contaienr}>
      <Text> ROUNDABOUT DISPLAY SYSTEM</Text>
      <View style={styles.buttonContainer}>
        <Button title="Turn off" color="#333"onPress={handleClose}/>
        <Button title="Show display" onPress={() => navigation.navigate('Display')}/>
      </View>
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
    contaienr : {
      height:'100%',
      backgroundColor: '#02072D',
      alignItems:'center',
      justifyContent:'center'
    },
  
    buttonContainer : {
      flexDirection:'row',
      marginTop:30,
      gap:10
    }
  })
  