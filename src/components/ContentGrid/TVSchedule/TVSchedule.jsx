/** Блок телепрограммы с расписанием передач */
import TVProgramItem from './TVProgramItem';

const tvPrograms = [
  { time: '02:00', channel: 'ТНТ. Best', program: 'ТНТ International', isLive: false },
  { time: '02:15', channel: 'Джинглики', program: 'Карусель INT', isLive: false },
  { time: '02:25', channel: 'Наедине со всеми', program: 'Первый', isLive: false },
];

const tvShows = [
  { title: 'Управление как искусство', channel: 'Успех', isLive: true },
  { title: 'Ночь. Мир в это время', channel: 'earthTV', isLive: true },
  { title: 'Андрей Возн...', channel: 'Совершенно секретно', isLive: true },
];

function TVSchedule() {
  return (
    <div className="widget tv-widget">
      <h3 className="widget-title">
        <a href="#">Эфир</a>
      </h3>
      
      <div className="tv-section">
        <h4 className="tv-section-title">Телепрограмма</h4>
        <button className="live-btn">🔴 Эфир</button>
        {tvPrograms.map((program, index) => (
          <TVProgramItem key={index} {...program} />
        ))}
      </div>

      <div className="tv-section">
        {tvShows.map((show, index) => (
          <div key={index} className="tv-show-item">
            <span className="live-indicator">🔵</span>
            <span className="show-title">{show.title}</span>
            <span className="show-channel">{show.channel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TVSchedule;