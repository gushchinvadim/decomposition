/** Поисковая строка с кнопкой поиска */
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Найдётся всё. Например, фаза луны сегодня"
      />
      <button className="search-button">Найти</button>
    </div>
  );
}

export default SearchBar;