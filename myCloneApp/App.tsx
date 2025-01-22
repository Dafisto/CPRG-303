import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert('Sign In Button pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* Logo */}
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
          {/* Icons */}
          <View style={styles.icons}>
            <Image
              source={require('./assets/gps.png')}
              style={styles.iconImage}
            />
            <Image
              source={require('./assets/question.png')}
              style={styles.iconImage}
            />
          </View>
        </View>

        {/* Sign-In Section */}
        <View style={styles.signInContainer}>
          <Text style={styles.title}>Sign in to Online Banking</Text>

          {/* Dropdown Placeholder */}
          <Text style={styles.label}>Choose a card</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Sign in with a different card</Text>
          </View>

          {/* Card Number Input */}
          <Text style={styles.label}>Card number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your 16-digit card number"
          />

          {/* Remember Card */}
          <View style={styles.rememberContainer}>
            <Text style={styles.label}>Remember card</Text>
          </View>

          {/* Password Input */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />
          <Text style={styles.forgotPassword}>Forgot your password?</Text>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton} onPress={showAlert}>
            <Text style={styles.signInButtonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Match the app background color
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0073e6',
    padding: 16,
    borderRadius: 8,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
  },
  iconImage: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  signInContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginVertical: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
  },
  dropdownText: {
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  forgotPassword: {
    color: '#0073e6',
    marginBottom: 16,
  },
  signInButton: {
    backgroundColor: '#0073e6',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
