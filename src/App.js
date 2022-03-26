
import './App.css';
import Card from './components/card/Card';
import data from './helper/data';

function App() {
  return (
    <div className="App">
      <p> {'>>'} App.js is working</p>
      
      <Card cardsData={data}/>


    </div>
  );
}

export default App;
