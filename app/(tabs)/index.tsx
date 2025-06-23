import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import { ArrowLeft, Paperclip, Send, MoreVertical, ChevronRight, Sparkles } from 'lucide-react-native';
import { useRouter } from 'expo-router'; // Import useRouter

const ProsecraftScreen = () => {
  const router = useRouter(); // Initialize the router hook

  const handleGetStarted = () => {
    router.push('/login'); // Navigate to the login screen
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" />

      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* For strict adherence to the image, the logo is an icon, not a full image. */}
        {/* <Sparkles size={60} color="#00BCD4" style={styles.logoIcon} /> */}
        <Image
          source={require('../assets/images/prosecraft1-logo.png')}
          style={styles.logo}
        />
        {/* Header Text */}
        <Text style={styles.headerText}>
          The perfect AI assistant for all grammar and style suggestions!
        </Text>
      </View>

      {/* Suggestion Box */}
      <View style={styles.suggestionBox}>
        {/* Top bar of the suggestion box */}
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderLeft}>
            <ArrowLeft size={24} color="#FFF" />
            <Text style={styles.composeText}>Compose</Text>
          </View>
          <View style={styles.cardHeaderRight}>
            <Paperclip size={24} color="#888" style={styles.cardIcon} />
            <Send size={24} color="#888" style={styles.cardIcon} />
            <MoreVertical size={24} color="#888" style={styles.cardIcon} />
          </View>
        </View>

        {/* Input Text Area */}
        <TextInput
          style={styles.inputSuggestionText}
          placeholder="Anything you would like too* say?"
          placeholderTextColor="#AAA"
          multiline={true}
          editable={false}
        />

        {/* Suggestion Replacement */}
        <View style={styles.suggestionReplacementContainer}>
          <Sparkles size={20} color="#1A1A2E" style={styles.suggestionIcon} />
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionButtonText}>too* to*</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Floating Right Arrow (assuming you still want this visually, but it's not a navigation element here) */}
      {/* If this arrow is meant to also trigger navigation, you'd wrap it in a TouchableOpacity */}
      <View style={styles.floatingArrowContainer}>
         {/* <ChevronRight size={40} color="#444" /> Uncomment if you want the arrow */}
      </View>


      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Get Started Button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>

        {/* Footer Text */}
        <Text style={styles.footerText}>Prosecraft is free</Text>
      </View>
    </View>
  );
};

export default ProsecraftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E', // Dark background
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between', // Distribute content vertically
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  logo: {
    width: 170,
    height: 170
  },
  appName: { // Note: Your provided code doesn't have an appName text, just the image and headerText.
             // If you want "PROSECRAFT" text under the logo, add it back in.
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 30, // Adjust line height for better readability
    fontWeight: '500', // Matches the image's text weight more closely
    marginHorizontal: 10,
  },
  suggestionBox: {
    backgroundColor: '#2B2B3A', // Slightly lighter dark for the card
    padding: 15,
    borderRadius: 15, // More rounded corners like the image
    width: '100%',
    alignSelf: 'center', // Center the box horizontally
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  composeText: {
    color: '#FFF', // Compose text is white in the image
    fontSize: 18,
    marginLeft: 8, // Space between arrow and text
  },
  cardHeaderRight: {
    flexDirection: 'row',
  },
  cardIcon: {
    marginLeft: 20, // Spacing between icons
  },
  inputSuggestionText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 15,
    borderBottomWidth: 1, // Line under the input
    borderBottomColor: '#444', // Color of the line
    paddingBottom: 10, // Padding for the text above the line
  },
  suggestionReplacementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BCD4', // Light blue bubble background
    borderRadius: 20, // Rounded bubble
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-start', // Make the bubble only as wide as its content
    marginTop: 10, // Space below the input
  },
  suggestionIcon: {
    marginRight: 8,
  },
  suggestionButton: {
    // No specific button style, as the whole container acts as the clickable part
  },
  suggestionButtonText: {
    color: '#1A1A2E', // Dark text color for the bubble
    fontWeight: '600', // Bold text in the bubble
    fontSize: 16,
  },
  floatingArrowContainer: {
    position: 'absolute',
    bottom: 150, // Adjust this value to position it relative to the bottom button
    right: 30, // Adjust this value for horizontal positioning
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: 30, // Space above the button
  },
  getStartedButton: {
    backgroundColor: '#00BCD4', // Light blue button
    paddingVertical: 18, // Taller button
    paddingHorizontal: 60, // Wider button
    borderRadius: 30, // More rounded corners
    marginBottom: 15, // Space between button and footer text
  },
  getStartedText: {
    color: '#1A1A2E', // Dark text for the button
    fontWeight: 'bold',
    fontSize: 20, // Larger text for the button
  },
  footerText: {
    color: '#888', // Lighter grey for footer text
    fontSize: 16,
  },
});