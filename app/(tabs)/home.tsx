import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {
  Settings,
  LayoutGrid,
  SquareSlash,
  MessageSquare,
  FileText,
  LifeBuoy,
  Edit3,
  Info,
} from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  // Placeholder functions for navigation/actions
  const handleSettingsPress = () => {
    // console.log('Navigate to Settings');
    router.push('/settings');
  };

  const handleAppearancePress = () => {
    console.log('Navigate to Appearance');
    // router.push('/appearance');
  };

  const handleBlockedAppsPress = () => {
    console.log('Navigate to Blocked Apps');
    // router.push('/blocked-apps');
  };

  const handleShareFeedbackPress = () => {
    console.log('Open feedback form');
  };

  const handlePrivacyPolicyPress = () => {
    console.log('Open Privacy Policy');
  };

  const handleSupportPress = () => {
    console.log('Open Support');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* Prosecraft Watermark/Background Logo - Placed within the ScrollView's content */}
        {/* We'll use absolute positioning relative to the ScrollView's content container */}
        <View style={styles.watermarkAbsoluteContainer}>
            <Image
                source={require('../assets/images/prosecraft1-logo.png')}
                style={styles.watermarkImage}
                resizeMode="contain"
            />
            <Text style={styles.watermarkText}>PROSECRAFT</Text>
        </View>

        {/* Division 1: Top Section (Avatar and Draft) */}
        <View style={styles.topSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>ET</Text>
          </View>
          <View style={styles.draftContainer}>
            <View style={styles.draftHeader}>
              <Text style={styles.draftTitle}>Draft</Text>
              <Info size={18} color="#888" />
            </View>
            <View style={styles.textInputWrapper}>
              <Edit3 size={18} color="#888" style={styles.pencilIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Type something..."
                placeholderTextColor="#888"
                multiline={true}
              />
            </View>
          </View>
        </View>

        {/* Division 2: Middle Menu Group */}
        <View style={styles.middleMenuGroup}>
          <TouchableOpacity style={styles.menuItem} onPress={handleSettingsPress}>
            <Settings size={24} color="#00BCD4" style={styles.menuIcon} />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleAppearancePress}>
            <LayoutGrid size={24} color="#00BCD4" style={styles.menuIcon} />
            <Text style={styles.menuText}>Appearance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleBlockedAppsPress}>
            <SquareSlash size={24} color="#00BCD4" style={styles.menuIcon} />
            <Text style={styles.menuText}>Blocked apps</Text>
          </TouchableOpacity>
        </View>

        {/* Division 3: Bottom Menu Group */}
        <View style={styles.bottomMenuGroup}>
          <TouchableOpacity style={styles.menuItem} onPress={handleShareFeedbackPress}>
            <MessageSquare size={24} color="#00BCD4" style={styles.menuIcon} />
            <Text style={styles.menuText}>Share feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handlePrivacyPolicyPress}>
            <FileText size={24} color="#00BCD4" style={styles.menuIcon} />
            <Text style={styles.menuText}>Privacy policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleSupportPress}>
            <LifeBuoy size={24} color="#00BCD4" style={styles.menuIcon} />
            <Text style={styles.menuText}>Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1A2E', // Dark background for the whole screen
  },
  scrollViewContent: {
    flexGrow: 1, // Allows content to grow within ScrollView
    paddingVertical: 10, // Overall vertical padding for the content blocks
  },
  // Main Divisions Styles
  topSection: {
    backgroundColor: '#2B2B3A', // Background color for the top section
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15, // Match card-like appearance
    marginHorizontal: 15, // Space from screen edges
    marginBottom: 10, // Space between this and next division
  },
  middleMenuGroup: {
    backgroundColor: '#2B2B3A', // Background for the middle menu group
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 10, // Space between this and next division
    overflow: 'hidden', // Ensures inner items respect border radius
  },
  bottomMenuGroup: {
    backgroundColor: '#2B2B3A', // Background for the bottom menu group
    borderRadius: 15,
    marginHorizontal: 15,
    // No marginBottom if it's the last division, or adjust as needed
  },

  // Content Styles (Avatar, Draft)
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: '#1A1A2E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  draftContainer: {
    // No specific background for this, it's part of topSection
  },
  draftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  draftTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 8,
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#3A3A4A',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  pencilIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  textInput: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    minHeight: 40,
    paddingVertical: 0,
  },

  // Menu Item Styles (No individual borders)
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    // Removed borderBottomWidth and borderBottomColor from here
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    color: '#FFF',
    fontSize: 18,
  },

  // Watermark/Background Logo Styles
  watermarkAbsoluteContainer: {
    position: 'absolute',
    top: '40%', // Adjust to visually center in the background
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1, // Ensure it's behind other content
  },
  watermarkImage: {
    width: 250, // Made bigger
    height: 250, // Made bigger
    opacity: 0.15, // More visible, but still a watermark
  },
  watermarkText: {
    color: '#FFF',
    fontSize: 30, // Made bigger
    fontWeight: 'bold',
    opacity: 0.15, // More visible
    marginTop: 10,
  },
});