/** Сетка контента с виджетами погоды, карт, телепрограммы и популярного */
import WeatherWidget from './WeatherWidget';
import MapWidget from './MapWidget';
import TVSchedule from './TVSchedule/TVSchedule';
import PopularLinks from './PopularLinks/PopularLinks';
import './ContentGrid.css';

function ContentGrid() {
  return (
    <div className="content-grid">
      <WeatherWidget />
      <MapWidget />
      <TVSchedule />
      <PopularLinks />
    </div>
  );
}

export default ContentGrid;