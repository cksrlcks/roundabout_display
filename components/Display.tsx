import React, {useRef} from 'react';
import {StyleSheet, Alert, BackHandler} from 'react-native';
import WebView from 'react-native-webview';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
export type DisplayScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Display'
>;

export default function Display({navigation, route}: DisplayScreenProps) {
  const WEBVIEW_REF = useRef<WebView | null>(null);
  const handleError = () =>
    Alert.alert('네트워크 실패', '인터넷 연결을 확인해주세요', [
      {
        text: '재시도',
        style: 'cancel',
        onPress: () => {
          WEBVIEW_REF && WEBVIEW_REF.current && WEBVIEW_REF.current.reload();
        },
      },
      {
        text: '뒤로가기',
        onPress: () => {
          navigation.goBack();
        },
      },
    ]);

  return (
    <WebView
      ref={WEBVIEW_REF}
      source={{uri: 'http://heavybear.cafe24.com/did/'}}
      style={{alignSelf: 'stretch'}}
      onError={handleError}
      onHttpError={handleError}
    />
  );
}

const styles = StyleSheet.create({
  contaienr: {
    height: '100%',
    backgroundColor: '#02072D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
  },
});
