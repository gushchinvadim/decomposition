/** Отдельная передача в телепрограмме со временем и каналом */

function TVProgramItem({ time, channel, program }) {
  return (
    <div className="tv-program-item">
      <span className="program-time">{time}</span>
      <span className="program-channel">{channel}</span>
      <span className="program-name">{program}</span>
    </div>
  );
}

export default TVProgramItem;