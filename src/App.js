import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Component } from 'react';
import AddRappel from './components/AddRappel';
import ShowRappel from './components/ShowRappel';
class App extends Component
{
  render()
  {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShowRappel/>}></Route>
        <Route path='/add' element={<AddRappel/>}></Route>




      </Routes>
    </Router>
  );
}
}

export default App;
