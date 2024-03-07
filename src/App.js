

import './App.scss';
import Header from "./components/Header"
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <footer>
          Here is a footer
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
