import { ContactForm } from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { AppContainer, Title, Subtitle } from './App.styled';

export function App() {
  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>

      <Filter />
      <ContactList />
    </AppContainer>
  );
}
