/** Отдельная новостная запись с иконкой и текстом */

function NewsItem({ icon, text, link }) {
  return (
    <li className="news-item">
      <span className="news-icon">{icon}</span>
      <a href={link} className="news-text">{text}</a>
    </li>
  );
}

export default NewsItem;