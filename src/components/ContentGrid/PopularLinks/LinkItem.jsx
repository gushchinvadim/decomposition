/** Отдельная ссылка в блоке популярного с категорией и текстом */

function LinkItem({ category, text, link }) {
  return (
    <div className="link-item">
      <strong className="link-category">{category}</strong>
      <span className="link-separator"> — </span>
      <a href={link} className="link-text">{text}</a>
    </div>
  );
}

export default LinkItem;