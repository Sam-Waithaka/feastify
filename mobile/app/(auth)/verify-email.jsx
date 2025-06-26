import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSignUp } from '@clerk/clerk-expo'
import { authStyles } from '../../assets/styles/auth.styles'
import { Image } from 'expo-image'
import { COLORS } from '../../constants/colors'

const VerifyEmail = ({email, onBack}) => {

  const {isLoaded, signUp, setActive} = useSignUp()
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)

  const handleVerification = async ()=>{

    if (!isLoaded) return

    setLoading(true)

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({code})
      
      if (signUpAttempt.status === 'complete'){
        await setActive({session: signUpAttempt.createdSessionId})
      } else {
        Alert.alert('Error', 'Verification failed. Please try again')
        console.error(JSON.stringify(signUpAttempt, null, 2));
        
      }

    } catch (error) {
      Alert.alert('Error', error.errors?. [0]?.message || 'Verification failed')
      console.error(JSON.stringify(error, null, 2));
      
    }finally{
      setLoading(false)
    }
  }

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        style={authStyles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={authStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={authStyles.imageContainer}>
            <Image 
              source={require('../../assets/images/i3.png')}
              style={authStyles.image}
              contentFit='contain'
            />
          </View>

          <View>
            <Text style={authStyles.title}>Verify your Email</Text>
            <Text style={authStyles.subtitle}>
              We&apos;ve sent a verification code to{'\n'}
              <Text style={{fontWeight: 'bold'}}>{email}</Text>
            </Text>
          </View>

          <View style={authStyles.formContainer}>
            <TextInput 
              style={authStyles.textInput}
              placeholder='Enter Verification Code'
              placeholderTextColor={COLORS.textLight}
              value={code}
              onChangeText={setCode}
              keyboardType='number-pad'
              autoCapitalize='none'
            />
            <TouchableOpacity 
            style={[authStyles.authButton, loading && authStyles.buttonDisabled]}
            onPress={handleVerification}
            disabled={loading}
            activeOpacity={0.8}
          >
            <Text style={authStyles.buttonText}>{loading?'Verifying' : 'Verify Email'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={authStyles.linkContainer} onPress={onBack}>
            <Text style={authStyles.linkText}>
              <Text style={authStyles.link}>Back to Sign up</Text>

            </Text>
          </TouchableOpacity>
          </View>  
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default VerifyEmail