import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ProjectRoutes } from './Routes';
import Header from './Component/Header';


function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <ProjectRoutes/>
    </BrowserRouter>
    </>
  );
}

export default App;
