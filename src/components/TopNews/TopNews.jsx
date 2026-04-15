/** Блок актуальных новостей с заголовками и иконками */
import NewsItem from './NewsItem';

const newsData = [
  { id: 1, icon: '🌍', text: 'Путин упростил получение автомобильных номеров', link: '#' },
  { id: 2, icon: '🌍', text: 'В команде Зеленского раскрыли план реформ на Украине', link: '#' },
  { id: 3, icon: '📰', text: '«Турпомощь» прокомментировала гибель десятков россиян в Анталье', link: '#' },
  { id: 4, icon: '⚖️', text: 'Суд закрыл дело Демпартии США против России', link: '#' },
  { id: 5, icon: '🚀', text: 'На Украине призвали создать ракеты для удара по Москве', link: '#' },
];

function TopNews() {
  return (
    <div className="top-news">
      <div className="news-tabs">
        <span className="tab active">Сейчас в СМИ</span>
        <span className="tab">в Германии</span>
        <span className="tab">Рекомендуем</span>
        <span className="date">31 июля, среда 02:32</span>
      </div>
      <ul className="news-list">
        {newsData.map(item => (
          <NewsItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default TopNews;