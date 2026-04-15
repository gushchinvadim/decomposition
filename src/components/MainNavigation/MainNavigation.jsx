/** Основная навигация с логотипом, поиском и меню */
import Logo from './Logo.jsx';           // ← файл есть?
import SearchBar from './SearchBar.jsx'; // ← только что создали ✅
import NavMenu from './NavMenu.jsx';     // ← файл есть?
import './MainNavigation.css';

function MainNavigation() {
  return (
    <nav className="main-navigation">
      <Logo />
      <div className="navigation-center">
        <NavMenu />
        <SearchBar />
      </div>
    </nav>
  );
}

export default MainNavigation;