/** Рекламный баннер с промо-контентом */
import './Advertisement.css'

function Advertisement() {
  return (
    <div className="advertisement">
      <div className="ad-banner">
        <img src="/ad-placeholder.jpg" alt="Реклама: Форсаж Хоббс и Шоу" />
        <div className="ad-label">12+</div>
      </div>
    </div>
  );
}

export default Advertisement;