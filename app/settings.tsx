import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch, // Import Switch for toggle buttons
} from 'react-native';
import {
  ArrowLeft,        // Back arrow icon
  Wind,            // Prosecraft Assistant (swirl-like, or choose another if more fitting)
  Star,            // Quick Toggle (star outline)
  Globe,           // English UK (globe icon)
  Sparkles,        // Generative AI (sparkles icon)
  MoreVertical,    // Three dots for language settings
} from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const SettingsScreen = () => {
  const router = useRouter();

  // State for each toggle switch
  const [prosecraftAssistantEnabled, setProsecraftAssistantEnabled] = useState(true);
  const [quickToggleEnabled, setQuickToggleEnabled] = useState(true);
  const [generativeAIEnabled, setGenerativeAIEnabled] = useState(true);

  const handleGoBack = () => {
    router.back();
  };

  const handleLanguageSelect = () => {
    console.log('Open language selection modal/screen');
    // Example: router.push('/language-select');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <ArrowLeft size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        {/* Settings Items */}
        <View style={styles.settingsGroup}>
          {/* Prosecraft Assistant */}
          <View style={styles.settingItem}>
            <Wind size={24} color="#00BCD4" style={styles.itemIcon} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>Prosecraft Assistant</Text>
              <Text style={styles.itemDescription}>Floating bubble AI assistant</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#00BCD4' }}
              thumbColor={prosecraftAssistantEnabled ? '#F5F5F5' : '#F5F5F5'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setProsecraftAssistantEnabled}
              value={prosecraftAssistantEnabled}
            />
          </View>

          {/* Quick Toggle */}
          <View style={styles.settingItem}>
            <Star size={24} color="#00BCD4" style={styles.itemIcon} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>Quick Toggle</Text>
              <Text style={styles.itemDescription}>Turn Prosecraft on or off from notifications.</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#00BCD4' }}
              thumbColor={quickToggleEnabled ? '#F5F5F5' : '#F5F5F5'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setQuickToggleEnabled}
              value={quickToggleEnabled}
            />
          </View>

          {/* English UK (Language) */}
          <TouchableOpacity style={styles.settingItem} onPress={handleLanguageSelect}>
            <Globe size={24} color="#00BCD4" style={styles.itemIcon} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>English UK</Text>
              <Text style={styles.itemDescription}>Select your language</Text>
            </View>
            <MoreVertical size={24} color="#888" /> {/* Three dots icon */}
          </TouchableOpacity>

          {/* Generative AI */}
          <View style={styles.settingItem}>
            <Sparkles size={24} color="#00BCD4" style={styles.itemIcon} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>Generative AI</Text>
              <Text style={styles.itemDescription}>Brainstorm. Draft. Perfect. All with Prosecraft's generative AI.</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#00BCD4' }}
              thumbColor={generativeAIEnabled ? '#F5F5F5' : '#F5F5F5'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setGenerativeAIEnabled}
              value={generativeAIEnabled}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1A2E', // Dark background for the whole screen
  },
  scrollViewContent: {
    flexGrow: 1,
    // Removed all padding from scrollViewContent to allow header/group to touch edges
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#2B2B3A', // Header background
    marginBottom: 0, // No space below header
  },
  backButton: {
    paddingRight: 15,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  settingsGroup: {
    backgroundColor: '#2B2B3A', // Background for the group of settings items
    marginHorizontal: 0, // No horizontal margin
    paddingTop: 10, // Padding from the top of this group (from header)
    // To make it span height fully, if content is short, we can add flex: 1
    // or rely on the safeArea's flex:1 and scrollViewContent's flexGrow:1
    // The current setup allows it to grow and fill, but doesn't force a minimum height beyond content.
    // If you explicitly want this block to stretch to the bottom when content is short:
    // flex: 1,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A4A', // Separator line between items
  },
  itemIcon: {
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  itemTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  itemDescription: {
    color: '#BBBBBB',
    fontSize: 13,
  },
});