import React from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet, Text, 
} from 'react-native';


export default function Home(){
    return <SafeAreaView>
    <ScrollView contentContainerStyle={styles.contaienr}>
      <Text> MENU DISPLAY</Text>
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
  