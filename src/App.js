import AppRouters from './components/AppRouters/AppRouters';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouters/>
      <Footer/>
    </div>
  );
}

export default App;
