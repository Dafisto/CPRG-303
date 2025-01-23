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
        <View style={styles.insideContent}>
          {/* Sign-In Section */}
          <View style={styles.signInContainer}>
            <Text style={styles.title}>Sign in to Online Banking</Text>

            {/* Dropdown Placeholder */}
            <Text style={styles.label}>Choose a card</Text>
            <View style={styles.dropdown}>
              <View style={styles.icons}>
                <View style={styles.insideText}>
                  <Text style={styles.dropdownText}>Sign in with a different card</Text>
                  <Image
                    source={require('./assets/arrow.png')}
                    style={styles.iconImage}
                  />
                </View>
              </View>
            </View>

            {/* Card Number Input */}
            <Text style={styles.label}>Card number</Text>
            <TextInput
              style={styles.input2}
              placeholder=""
            />
            <Text style={styles.belowText}>Enter your 16-digit card number</Text>
            
            {/* Remember Card */}
            <View style={styles.rememberContainer}>
              <TextInput
                style={styles.rememberBox}
                placeholder=""
              />
              <Text style={styles.rememberText}>Remember card</Text>
              <Image
                source={require('./assets/i.png')}
                style={styles.iImage}
              />
            </View>

            {/* Password Input */}
            <Text style={styles.label}>Password</Text>
              <View style={styles.dropdown}>
                <View style={styles.icons}>
                  <View style={styles.eyeBox}>
                    <Image
                      source={require('./assets/show.png')}
                      style={styles.eyeImage}
                    />
                  </View>
                </View>
              </View>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} onPress={showAlert}>
              <Text style={styles.signInButtonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* New Registration Container*/}
        <View style={styles.insideContent}>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Register a new card for online</Text>
            <Text style={styles.title}>banking</Text>
          </View>
        </View>
        {/* Footer for page*/}
        <View style={styles.footer}>
          <View style={styles.icons}>
            <Image
              source={require('./assets/options.png')}
              style={styles.iconImage}
              />
          </View>
          <View style={styles.icons}>
            <Image
              source={require('./assets/center.png')}
              style={styles.iconImage}
              />
          </View>
          <View style={styles.icons}>
            <Image
              source={require('./assets/back.png')}
              style={styles.iconImage}
            />
          </View>
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
    flex: 0,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0073e6',
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 8,
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
    marginHorizontal: 14,
  },
  signInContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 7,
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
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding:8,
    borderRadius: 4,
    marginBottom: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  forgotPassword: {
    color: '#0073e6',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#0073e6',
    padding: 20,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 30,
    marginBottom: 16,
    },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  insideText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  belowText: {
    opacity: 0.5,
    fontSize: 13,
    paddingTop: 0,
  },
  insideContent: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  input2: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
    marginBottom: 3,
  },
  rememberBox: {
    borderWidth: 2,
    borderColor: '#757575',
    padding: 4,
    borderRadius: 2,
    marginTop: 16,
    marginRight: 13,
    width: 25,
    height: 25,
  },
  eyeBox: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  rememberText: {
    fontWeight: '400',
    paddingBottom: 4,
  },
  iImage: {
    width: 24,
    height: 24,
    marginHorizontal: 7,
  },
  eyeImage: {
    width: 24,
    height: 24,
  },
  bottomContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    borderRadius: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#0073e6',
    paddingVertical: 15,
  },
});
