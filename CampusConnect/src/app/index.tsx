import { StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text style={styles.subtitle}>One campus. Connected students.</Text>

      <Text style={styles.welcome}>
        Welcome to the Week 1 project foundation.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Announcement Utility Test</Text>

        <Text style={styles.info}>Total Announcements: {sampleAnnouncements.length}</Text>

        <Text style={styles.info}>Unread Announcements: {unread.length}</Text>

        {unread.map((item) => (
          <Text key={item.id} style={styles.item}>
            • {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#222',
  },
  welcome: {
    fontSize: 14,
    color: '#222',
    marginBottom: 26,
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  info: {
    fontSize: 13,
    color: '#333',
  },
  item: {
    fontSize: 13,
    color: '#333',
  },
});