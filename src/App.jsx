import './App.css';
import Content from './components/Content';
import HomeSidebar from './components/HomeSidebar';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <main className="main">
        <HomeSidebar />
        <Content />
        <Search />
      </main>
    </div>
  );
}

export default App;
