import { Counter } from './counter/Counter'
import './App.css';
import store from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
