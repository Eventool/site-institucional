// import Container from '../src/layouts/Container';
// import Home from '../src/pages/Home';
import Footer from './components/Footer/Footer.jsx';
import HeaderComponent from './components/header/Header.jsx';
import Section from './components/Home/Section.jsx';
import Section2 from './components/SobreNos/Section2.jsx';
import Section3 from './components/Objetivos/Section3.jsx';
import Section4 from './components/Cases/Section4.jsx';


function App() {
  return (
    <>
   
    <HeaderComponent />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

export default App;
