import React from 'react';
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
import { useRouter } from 'expo-router'; // Ensure useRouter is imported

const LoginScreen = () => {
  const router = useRouter(); // Initialize the router hook

  const handleGoBack = () => {
    router.back();
  };

  const handleGoToRegister = () => {
    router.push('/register'); // Navigate to the register screen
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <ArrowLeft size={28} color="#FFF" />
      </TouchableOpacity>

      {/* Header Section with Logo and App Name */}
      <View style={styles.headerSection}>
        {/* Using Sparkles as a placeholder for the custom swirl logo */}
        {/* <Sparkles size={60} color="#00BCD4" style={styles.logoIcon} /> */}
        <Image
          source={require('../assets/images/prosecraft1-logo.png')}
          style={styles.logoImage}
        />
        {/* <Text style={styles.appName}>PROSECRAFT</Text> */}
      </View>

      {/* Login Card */}
      <View style={styles.loginCard}>
        {/* Sign In Header */}
        <View style={styles.signInHeader}>
          <Text style={styles.signInText}>Sign in</Text>
          <TouchableOpacity onPress={handleGoToRegister}> {/* Add onPress handler here */}
            <Text style={styles.dontHaveAccountText}>I don't have an account</Text>
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <TextInput
          style={styles.emailInput}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
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
  },
  backButton: {
    position: 'absolute',
    top: 16,
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
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#00BCD4',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
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