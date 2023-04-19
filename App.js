/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NativeModules } from "react-native"
const { CustomMethods } = NativeModules

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {

   // ...
   const nativeSimpleMethod = () => {
    CustomMethods.simpleMethod()
  }
  const nativeSimpleMethodReturns = () => {
    CustomMethods.simpleMethodReturns(result => {
      alert(result)
    })
  }
  const nativeSimpleMethodWithParams = () => {
    CustomMethods.simpleMethodWithParams(
      'Akhzar Nazir',
      result => {
        alert(result)
      }
    )
  }
  const nativeResolvePromise = async () => {
    const result = await CustomMethods.resolvePromise()
    alert(result)
  }

  const nativeRejectPromise = async () => {
    try {
      await CustomMethods.rejectPromise()
    } catch (err) {
      alert(err)
    }
  }

  return (

        <View
          style={{
            backgroundColor: Colors.white,
          }}>

          <TouchableOpacity style={styles.button} 
            onPress={() => nativeSimpleMethod() }>
            <Text> Press One </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} 
            onPress={() => nativeSimpleMethodReturns() }>
            <Text> Press Two </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} 
            onPress={() => nativeSimpleMethodWithParams() }>
            <Text> Press Three </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} 
            onPress={() => nativeResolvePromise() }>
            <Text> Press Four </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} 
            onPress={() => nativeRejectPromise() }>
            <Text> Press Five </Text>
          </TouchableOpacity>
        
        </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
