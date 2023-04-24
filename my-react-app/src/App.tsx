import "./App.css";
import Header from "./components/header/header";
import ListItem from "./components/listItem/listItem";
import { MAX_PEOPLE_VALUE } from "./const";

function App() {
  const users = [];
  for (let i = 0; i < MAX_PEOPLE_VALUE; i++) {
    const person = {
      name: "John",
      surname: "Doe",
    };
    users.push(person);
  }
  return (
    <div className="container">
      <Header />
      <ListItem user={users} />
    </div>
  );
}

export default App;
