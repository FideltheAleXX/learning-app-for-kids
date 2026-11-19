import Content from '../components/Content';
import HomeSidebar from '../components/HomeSidebar';
import Search from '../components/Search';

export default function MainPage() {
  return (
    <main className="main">
      <HomeSidebar />
      <Content />
      <Search />
    </main>
  );
}
