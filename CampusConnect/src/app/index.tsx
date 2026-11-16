import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';
import AnnouncementPanel from '../components/AnnouncementPanel';

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
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Campus Connect</Text>

        <Text style={styles.subtitle}>One campus. Connected students.</Text>

        <Text style={styles.welcome}>Welcome to the Week 1 project foundation.</Text>

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

        <AnnouncementPanel />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 32,
    backgroundColor: '#F4F7FB',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 480,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 10,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
  },
  welcome: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DCE3EC',
    marginBottom: 28,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },
  info: {
    fontSize: 13,
    color: '#334155',
    marginBottom: 4,
  },
  item: {
    fontSize: 13,
    color: '#334155',
    marginTop: 6,
  },
});