// css
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar_list">
        <Link to={'/'}>
          <li className="navbar__list__item__title">Rockr Blog</li>
        </Link>
        <li>Posts</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
