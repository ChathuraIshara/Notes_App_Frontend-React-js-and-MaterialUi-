import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
      <Routes>
       
        <Route path="/" element={<Notes/>}> </Route>
        <Route path="/create" element={<Create/>}></Route>
       
       
      </Routes>
      </Layout>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
