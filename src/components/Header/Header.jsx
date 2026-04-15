/** Шапка сайта с новостями, курсами валют и промо-блоком */
import TopNews from '../TopNews/TopNews';
import ExchangeRates from '../ExchangeRates/ExchangeRates';
import PromoBlock from '../PromoBlock/PromoBlock';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <TopNews />
        <ExchangeRates />
      </div>
      <PromoBlock />
    </header>
  );
}

export default Header;