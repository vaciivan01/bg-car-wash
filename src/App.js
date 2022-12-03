import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Form from './components/Form';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#f6f4f4"}}>
      <NavBar/>
      <Body/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
