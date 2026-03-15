import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default function App() {
  return (
    <div>
      <h1>Phone Book</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
