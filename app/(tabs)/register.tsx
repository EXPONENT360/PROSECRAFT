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
import { ChevronRight, Sparkles, ArrowLeft } from 'lucide-react-native'; // Import ArrowLeft
import { useRouter } from 'expo-router'; // Import useRouter

const LoginScreen = () => {
  const router = useRouter(); // Initialize the router hook

    const handleGoToLogin = () => {
        router.push('/login'); // Navigate to the login screen
    };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoToLogin}>
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
        {/* If you want the "PROSECRAFT" text under the logo, uncomment this: */}
        {/* <Text style={styles.appName}>PROSECRAFT</Text> */}
      </View>

      {/* Login Card */}
      <View style={styles.loginCard}>
        {/* Sign In Header */}
        <View style={styles.signInHeader}>
          <Text style={styles.signInText}>Sign up</Text>
          <TouchableOpacity onPress={handleGoToLogin}>
            <Text style={styles.dontHaveAccountText}>I already have an account</Text>
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
          <Text style={styles.continueButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Can't Sign Up Link */}
        <TouchableOpacity style={styles.cantSignInButton}>
          <Text style={styles.cantSignInText}>Can't sign up?</Text>
        </TouchableOpacity>

        {/* Social Sign-up Options */}
        <View style={styles.socialLoginContainer}>
          {/* Google Sign-up */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} // Google icon
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign up with Google</Text>
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>

          {/* Facebook Sign-up */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }} // Facebook icon
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>

          {/* Apple Sign-up */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/mac-os.png' }} // Apple icon (iOS filled)
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign up with Apple</Text>
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
    backgroundColor: '#1A1A2E', // Dark background
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  backButton: {
    position: 'absolute', // Position it absolutely
    top: 35, // Adjust top spacing
    left: 20, // Adjust left spacing
    zIndex: 10, // Ensure it's above other elements
    padding: 10, // Add padding for easier tapping
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
    marginBottom: 10, // Space between logo and app name if it's there
  },
  appName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginCard: {
    backgroundColor: '#2B2B3A', // Slightly lighter dark for the card
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 400, // Max width for larger screens
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