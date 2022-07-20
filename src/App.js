
import './App.css';
import { Coin } from './feature/coin';
import { Counter } from './feature/counter/counter';
import { Theme } from './feature/theme/theme';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Coin/>
      <Theme/>

    </div>
  );
}

export default App;
