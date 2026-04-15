/** Главный компонент приложения, объединяющий все секции интерфейса */
import Header from './components/Header/Header';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Advertisement from './components/Advertisement/Advertisement';
import ContentGrid from './components/ContentGrid/ContentGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainNavigation />
      <Advertisement />
      <ContentGrid />
    </div>
  );
}

export default App;