import { FaHome } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { IoMdMore } from 'react-icons/io';

export const sidebarItems = [
  { title: 'Home', icon: FaHome, link: '/home' },
  { title: 'Trendings', icon: IoMdTrendingUp, link: '/trendings' },
  {
    title: 'Notifications',
    icon: IoMdNotificationsOutline,
    link: '/notifications',
  },
  { title: 'History', icon: FaHistory, link: '/history' },
  { title: 'Settings', icon: IoMdSettings, link: '/settings' },
  { title: 'More', icon: IoMdMore, link: '/more' },
];
