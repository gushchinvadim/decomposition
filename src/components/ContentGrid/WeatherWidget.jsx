/** Виджет погоды с текущей температурой и прогнозом */

function WeatherWidget() {
  return (
    <div className="widget weather-widget">
      <h3 className="widget-title">Погода</h3>
      <div className="weather-content">
        <span className="weather-icon">🌧️</span>
        <span className="temperature">+17°</span>
        <div className="weather-details">
          <span>Утром +17,</span>
          <span>днём +20</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;