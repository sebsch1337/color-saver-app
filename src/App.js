import "./App.css";

import CardList from "./components/cardlist/CardList";

const db = [
  {
    id: "a3k2k35",
    hexCode: "#ccc",
  },
  {
    id: "j4o3m45",
    hexCode: "#4c6ef5",
  },
  {
    id: "go43ogi",
    hexCode: "#82c91e",
  },
];

function App() {
  return (
    <div className="App">
      <CardList cards={db} />
    </div>
  );
}

export default App;
