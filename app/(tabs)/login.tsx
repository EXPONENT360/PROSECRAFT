import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const errorTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleGoBack = () => {
    router.back();
  };

  const handleGoToRegister = () => {
    router.push('/register'); // Navigate to the register screen
  };

  const handleContinue = () => {
    // Clear any existing timer when attempting to continue
    if (errorTimerRef.current) {
      clearTimeout(errorTimerRef.current);
    }

    if (email.trim() === '') {
      setEmailError(true);
      // Set a timer to clear the error after 3 seconds
      //@ts-expect-error
      errorTimerRef.current = setTimeout(() => {
        setEmailError(false);
        errorTimerRef.current = null;
      }, 3000); // 3000ms = 3 seconds
    } else {
      setEmailError(false); // Clear error state if input is valid
      console.log('Email entered:', email);
      // *** IMPORTANT CHANGE HERE ***
      router.push('/home'); // Navigate to the Home screen (home.tsx)
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (emailError) {
      setEmailError(false);
      if (errorTimerRef.current) {
        clearTimeout(errorTimerRef.current);
        errorTimerRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (errorTimerRef.current) {
        clearTimeout(errorTimerRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <ArrowLeft size={28} color="#FFF" />
      </TouchableOpacity>

      {/* Header Section with Logo and App Name */}
      <View style={styles.headerSection}>
        <Image
          source={require('../assets/images/prosecraft1-logo.png')}
          style={styles.logoImage}
        />
      </View>

      {/* Login Card */}
      <View style={styles.loginCard}>
        {/* Sign In Header */}
        <View style={styles.signInHeader}>
          <Text style={styles.signInText}>Sign in</Text>
          <TouchableOpacity onPress={handleGoToRegister}>
            <Text style={styles.dontHaveAccountText}>I don't have an account</Text>
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <TextInput
          style={[
            styles.emailInput,
            emailError && styles.emailInputError
          ]}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />
        {/* Error message tooltip */}
        {emailError && (
          <Text style={styles.errorMessage}>Email field must not be empty.</Text>
        )}

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Can't Sign In Link */}
        <TouchableOpacity style={styles.cantSignInButton}>
          <Text style={styles.cantSignInText}>Can't sign in?</Text>
        </TouchableOpacity>

        {/* Social Sign-in Options */}
        <View style={styles.socialLoginContainer}>
          {/* Google Sign-in */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>

          {/* Facebook Sign-in */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>

          {/* Apple Sign-in */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/mac-os.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoIcon: {
    marginBottom: 10,
  },
  logoImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  appName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginCard: {
    backgroundColor: '#2B2B3A',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  signInHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  signInText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  dontHaveAccountText: {
    color: '#00BCD4',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  emailInput: {
    backgroundColor: '#3A3A4A',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3A3A4A',
    marginBottom: 20,
  },
  emailInputError: {
    borderColor: '#FF6347',
  },
  errorMessage: {
    color: '#FF6347',
    fontSize: 14,
    marginTop: -15,
    marginBottom: 15,
    textAlign: 'left',
    paddingLeft: 5,
  },
  continueButton: {
    backgroundColor: '#00BCD4',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#1A1A2E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cantSignInButton: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  cantSignInText: {
    color: '#00BCD4',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  socialLoginContainer: {
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3A3A4A',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  socialButtonText: {
    color: '#FFF',
    fontSize: 18,
    flex: 1,
  },
});