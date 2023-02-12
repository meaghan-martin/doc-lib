import './App.css';
import {Library} from './Library';
import {getTags} from './utils';

function App({domElement}) {
const data = domElement.getAttribute("data")

  return (
    <div className="App">
      <header className="App-header">
      <Library data={JSON.parse(data)}/>
      </header>
    </div>
  );
}

export default App;
