

import './App.scss';
import Header from "./components/Header"
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
