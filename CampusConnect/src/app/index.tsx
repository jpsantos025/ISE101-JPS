import { useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';
import ActionButton from '../components/ActionButton';
import AnnouncementPanel from '../components/AnnouncementPanel';
import SectionHeading from '../components/SectionHeading';

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

const campusSeal = require('../../assets/images/santa-rita-college-seal.webp');

export default function HomeScreen() {
  const scrollViewRef = useRef<any>(null);
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  const handleViewAllAnnouncements = () => {
    scrollViewRef.current?.scrollTo({ y: 520, animated: true });
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View style={styles.contentWrapper}>
        <SectionHeading
          title="Campus Connect"
          subtitle="One campus. Connected students."
          titleStyle={styles.headingTitle}
          subtitleStyle={styles.headingSubtitle}
        />

        <View style={styles.bannerCard}>
          <Text style={styles.bannerTitle}>Campus Announcements</Text>
          <Text style={styles.bannerSubtitle}>Stay updated with the latest campus news.</Text>

          <ActionButton
            label="View All Announcements"
            onPress={handleViewAllAnnouncements}
            accessibilityLabel="View all announcements"
          />

          <Image
            source={campusSeal}
            accessibilityLabel="Santa Rita College seal"
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.card}>
          <SectionHeading
            title="Announcement Utility Test"
            subtitle=""
            titleStyle={styles.sectionTitle}
            containerStyle={styles.utilityHeading}
          />

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
    paddingHorizontal: 18,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: '#F4F7FB',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 500,
  },
  headingTitle: {
    fontSize: 32,
    lineHeight: 38,
  },
  headingSubtitle: {
    fontSize: 14,
    color: '#526070',
  },
  bannerCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DCE3EC',
    padding: 18,
    marginBottom: 20,
  },
  bannerTitle: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  bannerSubtitle: {
    color: '#526070',
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    marginTop: 18,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
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
  utilityHeading: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 28,
  },
  info: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 6,
    lineHeight: 20,
  },
  item: {
    fontSize: 13,
    color: '#334155',
    marginTop: 6,
    lineHeight: 18,
  },
});