import HomeSidebar from '../components/HomeSidebar';
import Profile from '../components/Profile';
import Search from '../components/Search';

export default function ProfilePage() {
  return (
    <main className="main">
      <HomeSidebar />
      <Profile />
      <Search />
    </main>
  );
}
