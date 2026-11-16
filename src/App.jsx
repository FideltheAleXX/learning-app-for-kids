import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import HomeSidebar from './components/HomeSidebar';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <HomeSidebar />
        <Content />
        <div className="info">info</div>
      </main>
    </div>
  );
}

export default App;
