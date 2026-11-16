import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './AnnouncementCard';

const initialAnnouncements: Announcement[] = [
  {
    id: 'ANN-001',
    title: 'Enrollment Reminder',
    category: 'Academic',
    read: false,
  },
  {
    id: 'ANN-002',
    title: 'Sports Festival Announcement',
    category: 'Events',
    read: false,
  },
  {
    id: 'ANN-003',
    title: 'Campus Clean-up Drive',
    category: 'Community',
    read: true,
  },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);

  const unreadAnnouncements = announcements.filter((announcement) => !announcement.read);

  const toggleAnnouncementRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement,
      ),
    );
  };

  return (
    <View style={styles.panelWrapper}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.counter}>Unread Announcements: {unreadAnnouncements.length}</Text>

      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AnnouncementCard
            title={item.title}
            category={item.category}
            read={item.read}
            onMarkRead={() => toggleAnnouncementRead(item.id)}
          />
        )}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  panelWrapper: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#F4F7FB',
    paddingTop: 4,
    paddingBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },
  counter: {
    fontSize: 14,
    color: '#3B475A',
    marginBottom: 16,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 8,
  },
});
