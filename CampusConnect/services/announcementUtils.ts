import type { Announcement } from '../types/announcement';

export type ApiAnnouncement = {
  id: string;
  title: string;
};

export function getUnreadAnnouncements(items: Announcement[]): Announcement[] {
  return items.filter((item) => !item.read);
}

export function getAnnouncementTitles(items: Announcement[]): string[] {
  return items.map((item) => item.title);
}

export function formatStudentName(firstName: string, lastName: string): string {
  return `${firstName.trim()} ${lastName.trim()}`.trim();
}

export function sumNumbers(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export async function loadAnnouncements(): Promise<ApiAnnouncement[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data: unknown = await response.json();
    return data as ApiAnnouncement[];
  } catch (error) {
    console.error('Unable to load announcements:', error);
    throw error;
  }
}
