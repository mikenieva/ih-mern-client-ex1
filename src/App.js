import './App.css';
import Proyectos from './components/Proyectos'
import Home from './components/Home'
import NotFound from './components/NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProyectoState from './context/proyectos/ProyectoState'


function App() {
  return (
    <>

    <ProyectoState>

        <Router>

          <Switch>
            <Route exact path="/proyectos" component={Proyectos} />
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />

          </Switch>

        </Router>

      </ProyectoState>

    </>
  );
}

export default App;
