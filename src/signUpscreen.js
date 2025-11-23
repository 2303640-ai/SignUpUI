import React, { useState } from 'react';
import Logo from './assets/logo.png';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const SignUpScreen = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    contact_number: '',
    email: '',
    student_number: '',
    level: '',
    course: '',
    password: '',
  });

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                alt="App Logo"
                resizeMode="contain"
                style={styles.headerImg}
                source={Logo} />  
              <Text style={styles.title}>
                Sign up to <Text style={{ color: '#751f1fff' }}>UB-TutorConnect</Text>
              </Text>
              <Text style={styles.subtitle}>
                Connect with your Tutor now!
              </Text>
            </View>
            
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="default"
                  onChangeText={first_name => setForm({ ...form, first_name })}
                  placeholder="Juan"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.first_name} 
                />
              </View>
              
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="default"
                  onChangeText={last_name => setForm({ ...form, last_name })}
                  placeholder="Dela Cruz"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.last_name} 
                />
              </View>
              
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Contact Number</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="phone-pad"
                  onChangeText={contact_number => setForm({ ...form, contact_number })}
                  placeholder="09123456789"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.contact_number} 
                />
              </View>
              
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Email address</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="email-address"
                  onChangeText={email => setForm({ ...form, email })}
                  placeholder="1923456@ub.edu.ph"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.email} 
                />
              </View>
              
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Student Number</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="numeric"
                  onChangeText={student_number => setForm({ ...form, student_number })}
                  placeholder="1923456"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.student_number} 
                />
              </View>
              
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Academic Level</Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="default"
                  onChangeText={level => setForm({ ...form, level })}
                  placeholder="3rd Year College"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.level} 
                />
              </View>
              
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Course (College student only)</Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="default"
                  onChangeText={course => setForm({ ...form, course })}
                  placeholder="Bachelor of Science in Information Technology"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.course} 
                />
              </View>
              
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  onChangeText={password => setForm({ ...form, password })}
                  placeholder="********"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={form.password} 
                />
              </View>
              
              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                    console.log('Form data:', form);
                  }}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 10, // Reduced top padding
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20, 
  },
  headerImg: {
    width: 120, 
    height: 120, 
    alignSelf: 'center',
    marginBottom: 20, 
  },
  /** Form */
  form: {
    marginBottom: 24,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#751f1fff',
    borderColor: '#751f1fff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});

export default SignUpScreen;
