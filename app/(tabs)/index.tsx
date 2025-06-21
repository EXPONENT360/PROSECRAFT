import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProsecraftScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/prosecraft-logo.jpg')} // Replace with your actual image path
        style={styles.logo}
      />

      {/* Header Text */}
      <Text style={styles.headerText}>
        The perfect AI assistant for all grammar and style suggestions!
      </Text>

      {/* Suggestion Box */}
      <View style={styles.suggestionBox}>
        <Text style={styles.composeText}>Compose</Text>

        <Text style={styles.suggestionText}>
          Anything you would like <Text style={styles.strikeThrough}>too*</Text> say?
        </Text>

        {/* Suggestion Replacement */}
        <View style={styles.suggestionReplacement}>
          <Image
            source={require('../assets/images/prosecraft-logo.jpg')}
            style={styles.suggestionLogo}
          />
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionButtonText}>to*</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Prosecraft is free</Text>
    </View>
  );
};

export default ProsecraftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B2F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: '600',
  },
  suggestionBox: {
    backgroundColor: '#2E2E3E',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginVertical: 10,
  },
  composeText: {
    color: '#aaa',
    marginBottom: 10,
  },
  suggestionText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  suggestionReplacement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  suggestionButton: {
    backgroundColor: '#00C2FF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  suggestionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  getStartedButton: {
    backgroundColor: '#00C2FF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  getStartedText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: '#aaa',
    fontSize: 14,
  },
});
