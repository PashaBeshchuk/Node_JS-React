import React from 'react';
import './App.css';
import Main from './components/main/Main';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import UsersStatisticsContainer from './components/users-statistics/UsersStatisticsContainer';
import UserPersonalDataContainer from './components/user-personal-data/UserPersonalDataContainer';


function App(props) {
  return (
    <div>
      <AppMainRedirect/> 
      <div className="App">
        <Switch>             
          <Route exact path='/Main' render={()=><Main/>}/>
          <Route exact path='/Main/User-Statistics/:userId?' render={(history)=><UsersStatisticsContainer {...history}/>}/>
          <Route exact path='/Main/User-Statistic/:userName?' render={()=><UserPersonalDataContainer/>}/>
        </Switch>
      </div>
    </div>
  );
}

const AppMainRedirect = (props) =>{
  const location = useLocation()
  const history = useHistory();
  const redirect = ()=> history.push("/Main");
  if(location.pathname === '/'){
    redirect()
  }
 return <></>
}
export default App;
