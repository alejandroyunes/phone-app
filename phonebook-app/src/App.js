import './app.scss'
import PhoneBookHeader from "./components/phonebook-header";
import PhoneBookBody from './components/phonebook-body'
import RemoveModal from './components/modal-remove'
import AddModal from './components/modal-add';
import { useState } from "react";

function PhoneApp() {
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const [addContact, setAddContact] = useState(false);
  const [closeContact, setCloseContact] = useState(false);

  return (
      <>
      <PhoneBookHeader />
      <PhoneBookBody />

      {isRemoveOpen && <RemoveModal setIsRemoveOpen={setIsRemoveOpen} setIsCancel={setIsCancel} />}
      {addContact && <AddModal setAddContact={setAddContact} setCloseContact={setCloseContact}/>}
      </>
  );
}

export default PhoneApp;
