import Layout from "./components/phonebook-body";
import './app.scss'
import PhoneBookHeader from "./components/phonebook-header";
import PhoneBookBody from './components/phonebook-body'

function PhoneApp() {
  return (
      <>
      <PhoneBookHeader />
      <PhoneBookBody />
      </>
  );
}

export default PhoneApp;
