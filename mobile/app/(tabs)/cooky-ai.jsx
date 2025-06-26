import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { authStyles } from '../../assets/styles/auth.styles';

const CookyAI = () => {
  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={authStyles.title}>Cooky AI</Text>
        <Text style={authStyles.subtitle}>
          Coming Soon: Your ultimate assistant to conjure you delicious recipes!
        </Text>
        <Text style={authStyles.textLight}>Stay tuned for magic in your kitchen!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, // Ensures content takes full height for centering
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
    padding: 20,
  },
  
});

export default CookyAI;
