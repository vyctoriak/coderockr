// css
import './styles.scss';

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar_list">
        <li className="navbar__list__item__title">Rockr Blog</li>
        <li>Posts</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
