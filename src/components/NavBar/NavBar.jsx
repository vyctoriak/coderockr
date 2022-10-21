// css
import { Link } from 'react-router-dom';
import './NavBar.scss';
import * as Dialog from '@radix-ui/react-dialog';
import ContactModal from '../ContactModal/ContactModal';

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar_list">
        <Link to={'/'}>
          <li className="navbar__list__item__title">Rockr Blog</li>
        </Link>
        <li>Posts</li>
        <Dialog.Root>
          <Dialog.Trigger>
            <li>Contact</li>
          </Dialog.Trigger>
          <ContactModal />
        </Dialog.Root>
      </ul>
    </div>
  );
}
