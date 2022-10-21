import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './ContactModal.scss';
import Input from '../Input/Input';
import { PaperPlaneRight, X } from 'phosphor-react';

const ContactModal = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="contact__modal--overlay">
        <Dialog.Content className="contact__modal--content">
          <Dialog.Title className="contact__modal--title">Contact</Dialog.Title>

          <form className="contact__modal--form">
            <div className="contact__modal--name">
              <label htmlFor="">Name</label>
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Fill your full name"
              />
            </div>
            <div className="contact__modal--email">
              <label htmlFor="">E-mail</label>
              <Input
                name="email"
                type="text"
                id="email"
                placeholder="Fill a valid e-mail"
              />
            </div>
            <div className="contact__modal--phone">
              <label htmlFor="">Phone</label>
              <Input
                name="phone"
                type="phone"
                id="phone"
                placeholder="Fill your phone"
              />
            </div>
            <div className="contact__modal--post">
              <label htmlFor="">Post</label>
              <textarea
                name="post"
                id="post"
                cols="10"
                rows="10"
                placeholder="Hello..."
              />
            </div>
            <footer className="">
              <Dialog.Close className="contact__modal--close">
                <X size={28} />
              </Dialog.Close>
              <button type="submit" className="contact__modal--submit">
                <PaperPlaneRight size={20} /> Submit
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};

export default ContactModal;
