import Container from '../src/layouts/Container';
import Header from './components/header/Header';
import Home from '../src/pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        teste
      </Container>
    <div className='Home'>
      <Home>
        
      </Home>
    </div>
    </div>
  );
}

export default App;
