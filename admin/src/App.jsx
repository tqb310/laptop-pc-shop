import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/Main';
import './App.css'


function App() {

  return (
    <div className="">
      <Router>
        <MainLayout />
      </Router>
    </div>
  )
}

export default App
