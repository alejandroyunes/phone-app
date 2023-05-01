import './app.scss'
import PhoneBookHeader from "./components/phonebook-header";
import PhoneBookBody from './components/phonebook-body'
import RemoveModal from './components/remove-modal'
import { useState } from "react";

function PhoneApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [cancelAll, setCancelAll] = useState(false);

  return (
      <>
      <PhoneBookHeader />
      <PhoneBookBody />

      {!isOpen && <RemoveModal setIsOpen={setIsOpen} setIsCancel={setIsCancel} setCancelAll={setCancelAll} />}
      </>
  );
}

export default PhoneApp;
