import './app.scss'
import PhoneBookHeader from "./components/phonebook-header";
import PhoneBookBody from './components/phonebook-body'
import RemoveContactModal from './components/modal-remove-contact'
import AddContactModal from './components/modal-add-contact';
import { useState } from "react";

function PhoneApp() {
  const [isCancel, setIsCancel] = useState(false);



  const [isContactOpen, setIsConctactOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);


  return (
      <>
      <PhoneBookHeader setIsConctactOpen={setIsConctactOpen}/>
      <PhoneBookBody setIsRemoveOpen={setIsRemoveOpen} />


      {isContactOpen && <AddContactModal setIsConctactOpen={setIsConctactOpen} />}

      {isRemoveOpen && <RemoveContactModal setIsRemoveOpen={setIsRemoveOpen} />}
      </>
  );
}

export default PhoneApp;
