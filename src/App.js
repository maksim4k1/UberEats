import AppRouters from './components/AppRouters/AppRouters';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouters/>
    </div>
  );
}

export default App;
