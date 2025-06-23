import React, { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, useRef
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

const RegisterScreen = () => { // Renamed component to RegisterScreen
  const router = useRouter();
  const [email, setEmail] = useState(''); // State for email input
  const [emailError, setEmailError] = useState(false); // State for email error
  const errorTimerRef = useRef<NodeJS.Timeout | null>(null); // Ref for timer ID

  const handleGoToLogin = () => { // Back button now goes to login
    router.push('/login'); // Navigate to the login screen
  };

  const handleSignUp = () => { // New function for Sign Up button
    // Clear any existing timer when attempting to sign up
    if (errorTimerRef.current) {
      clearTimeout(errorTimerRef.current);
    }

    if (email.trim() === '') { // Validate email input
      setEmailError(true); // Set error state to true
      // Set a timer to clear the error after 3 seconds
      //@ts-expect-error
      errorTimerRef.current = setTimeout(() => {
        setEmailError(false);
        errorTimerRef.current = null;
      }, 3000); // 3000ms = 3 seconds
    } else {
      setEmailError(false); // Clear error state if input is valid
      console.log('Registering with email:', email);
      // In a real app, you would proceed with registration logic
      // e.g., calling an API, then navigating to a success screen or home
      // router.push('/home');
    }
  };

  // Function to handle text input changes and clear error immediately
  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (emailError) { // If there was an error showing
      setEmailError(false); // Clear error immediately when user types
      if (errorTimerRef.current) { // Clear the auto-dismiss timer
        clearTimeout(errorTimerRef.current);
        errorTimerRef.current = null;
      }
    }
  };

  // Clean up the timer when the component unmounts
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
      <TouchableOpacity style={styles.backButton} onPress={handleGoToLogin}>
        <ArrowLeft size={28} color="#FFF" />
      </TouchableOpacity>

      {/* Header Section with Logo and App Name */}
      <View style={styles.headerSection}>
        <Image
          source={require('../assets/images/prosecraft1-logo.png')}
          style={styles.logoImage}
        />
      </View>

      {/* Register Card */}
      <View style={styles.registerCard}> {/* Changed to registerCard for clarity */}
        {/* Sign Up Header */}
        <View style={styles.signUpHeader}> {/* Changed to signUpHeader for clarity */}
          <Text style={styles.signUpText}>Sign up</Text> {/* Changed text to "Sign up" */}
          <TouchableOpacity onPress={handleGoToLogin}> {/* Link to Login screen */}
            <Text style={styles.alreadyHaveAccountText}>I already have an account</Text> {/* Changed text */}
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <TextInput
          style={[
            styles.emailInput,
            emailError && styles.emailInputError // Apply error style conditionally
          ]}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email} // Bind value to state
          onChangeText={handleEmailChange} // Update state on text change
        />
        {/* Error message tooltip */}
        {emailError && (
          <Text style={styles.errorMessage}>Email field must not be empty.</Text>
        )}

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}> {/* Attach new handler */}
          <Text style={styles.signUpButtonText}>Sign up</Text> {/* Changed text to "Sign up" */}
        </TouchableOpacity>

        {/* Can't Sign Up Link */}
        <TouchableOpacity style={styles.cantSignUpButton}> {/* Changed to cantSignUpButton for clarity */}
          <Text style={styles.cantSignUpText}>Can't sign up?</Text> {/* Changed text to "Can't sign up?" */}
        </TouchableOpacity>

        {/* Social Sign-up Options */}
        <View style={styles.socialLoginContainer}>
          {/* Google Sign-up */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign up with Google</Text> {/* Changed text */}
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>

          {/* Facebook Sign-up */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign up with Facebook</Text> {/* Changed text */}
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>

          {/* Apple Sign-up */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/mac-os.png' }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Sign up with Apple</Text> {/* Changed text */}
            <ChevronRight size={24} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen; // Export the renamed component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20, // Adjusted for consistency with LoginScreen
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
  registerCard: { // Renamed from loginCard
    backgroundColor: '#2B2B3A',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  signUpHeader: { // Renamed from signInHeader
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  signUpText: { // Renamed from signInText
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  alreadyHaveAccountText: { // Renamed from dontHaveAccountText
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
    borderColor: '#3A3A4A', // Default border color same as background
    marginBottom: 20, // Default margin bottom
  },
  emailInputError: {
    borderColor: '#FF6347', // Red border color for error
  },
  errorMessage: {
    color: '#FF6347', // Red text for error message
    fontSize: 14,
    marginTop: -15, // Move up to be closer to the input
    marginBottom: 15, // Space after the error message
    textAlign: 'left',
    paddingLeft: 5,
  },
  signUpButton: { // Renamed from continueButton
    backgroundColor: '#00BCD4',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  signUpButtonText: { // Renamed from continueButtonText
    color: '#1A1A2E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cantSignUpButton: { // Renamed from cantSignInButton
    alignSelf: 'center',
    marginBottom: 30,
  },
  cantSignUpText: { // Renamed from cantSignInText
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