

import './App.scss';
import Header from "./components/Header"
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <footer>
          ©Little Lemon Restaurant @ 2024
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
