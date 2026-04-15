/** Блок посещаемых ресурсов и популярных ссылок */
import LinkItem from './LinkItem';

const popularLinks = [
  { category: 'Недвижимость', text: 'о сталинках', link: '#' },
  { category: 'Маркет', text: 'люстры и светильники', link: '#' },
  { category: 'Авто.ру', text: 'привод 4x4 до 500 000', link: '#' },
];

function PopularLinks() {
  return (
    <div className="widget popular-widget">
      <h3 className="widget-title">Посещаемое</h3>
      {popularLinks.map((link, index) => (
        <LinkItem key={index} {...link} />
      ))}
    </div>
  );
}

export default PopularLinks;