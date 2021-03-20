import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import FakeData from './fakedata.json'
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import DefaultDestination from './Components/Destination/DefaultDestination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const RideContext = createContext();
function App() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    const carData = [...FakeData];
    setVehicle(carData);
  }, [])

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
  <RideContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home vehicle={vehicle}></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <PrivateRoute path="/destination/:id">
          <Destination vehicle={vehicle}></Destination>
        </PrivateRoute>

        <Route path="/destination/">
          <DefaultDestination vehicle={vehicle}></DefaultDestination>
        </Route>
        
        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>

      </Switch>
    </Router>
    </RideContext.Provider>
  ); 
}

export default App;
