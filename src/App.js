import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav/NavBar';
import CreateAccount from './pages/createaccount';
import Home from './pages/home'
import UserContextProvider from './contexts/UserContext';
import Deposit from './pages/Deposit';
import Withdraw from './pages/withdraw';
import AllData from './pages/alldata'


function App() {
  return (
    <HashRouter>
      <NavBar />
        <UserContextProvider value={{users:[]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route exact path="/" component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Deposit/" component={Deposit} />
            <Route path="/Withdraw/" component={Withdraw} />
            <Route path="/AllData/" component={AllData} />
          </div> 
        </UserContextProvider>      
    </HashRouter>
  );
}

export default App;
