import React from 'react';
import Logo from './assets/logo.png';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';



const StudentHomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <ScrollView style={styles.container}>
<Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={Logo} />

        <Text style={styles.headerTitle}>Welcome to UB-TutorConnect</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.cardGrid}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.icon}>📅</Text>
              <Text style={styles.cardText}>Book Appointment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.icon}>⏱️</Text>
              <Text style={styles.cardText}>My Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.icon}>💬</Text>
              <Text style={styles.cardText}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.icon}>🔔</Text>
              <Text style={styles.cardText}>Notifications</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointment</Text>

          <View style={styles.appointmentCard}>
            <Text style={styles.apptLabel}>Tutor:</Text>
            <Text style={styles.apptInfo}>GERALD</Text>

            <Text style={styles.apptLabel}>Date & Time:</Text>
            <Text style={styles.apptInfo}>November 26, 2025 • 1:00 PM - 3:00 PM</Text>

            <Text style={styles.apptLabel}>Status:</Text>
            <Text style={styles.apptStatus}>Pending Confirmation</Text>

            <View style={styles.apptActions}>
              <TouchableOpacity style={styles.cancelBtn}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          <View style={styles.announceCard}>
            <Text style={styles.announceTitle}>System Update</Text>
            <Text style={styles.announceText}>Maintenance will occur on Dec 1, 2025.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1D2A32',
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#751f1fff',
    marginBottom: 15,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 15,
    borderColor: '#C9D3DB',
    borderWidth: 1,
  },
  icon: {
    fontSize: 40,
    textAlign: 'center',
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#1D2A32',
  },
  appointmentCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  apptLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    color: '#222',
  },
  apptInfo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1D2A32',
  },
  apptStatus: {
    fontSize: 16,
    fontWeight: '700',
    color: '#751f1fff',
    marginTop: 5,
  },
  apptActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelBtn: {
    backgroundColor: '#ffe5e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cancelText: {
    color: '#B00020',
    fontWeight: '600',
  },
  editBtn: {
    backgroundColor: '#751f1fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
  },
  announceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  announceTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1D2A32',
  },
  announceText: {
    fontSize: 15,
    color: '#333',
    marginTop: 5,
  },
});

export default StudentHomePage;

