/** Меню навигации по сервисам Яндекса */

const menuItems = [
  'Видео', 'Картинки', 'Новости', 'Карты', 
  'Маркет', 'Переводчик', 'Эфир', 'ещё'
];

function NavMenu() {
  return (
    <ul className="nav-menu">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href="#" className="nav-link">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;