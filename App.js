import React ,{Fragment}from 'react'
//import { useSelector } from 'react-redux';
import HomeScreen from  './screens/HomeScreen';
import Signup from  './screens/Signup';
import logo from './ui/logo.png';

import {BrowserRouter, Route,Switch} from 'react-router-dom'

import activation from './screens/activation';
import Dashboard from './screens/Dashboard';
import live from './screens/live';
import Signin from './screens/Signin';
import CoachSingUp from './screens/CoachSignUp';
import coachlogin from './screens/coachlogin';
import coachactivation from './screens/coachactivation';
import coachDashboard from './screens/coachDashboard';
import todoScreen from './screens/todoScreen';
import course from './screens/course';
import createCourse from './screens/createCourse';
import createBlogpost from './screens/createBlogpost';
import testtodo from './screens/testtodo';
import appointments from './screens/appointments';





function App() {
   


  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/coachDashboard" component={coachDashboard}></Route>
          <Route path="/live" component={live}></Route>

          <div className="grid-containerr">
            <main>
              <div className="homescreen">
                <div className="backhome">
                  <div className="signupLogo">
                    <img src={logo} alt="" />
                  </div>
                  <Switch>
                    <Route path="/" component={HomeScreen} exact></Route>
                    <Route path="/JoinNow" component={Signup}></Route>
                    <Route path="/signin" component={Signin}></Route>
                    <Route path="/activation" component={activation}></Route>
                    <Route path="/coachsignup" component={CoachSingUp}></Route>
                    <Route path="/coachlogin" component={coachlogin}></Route>
                    <Route path="/testtodo" component={testtodo}></Route>
                    <Route path="/appointments" component={appointments}></Route>

                    <Route
                      path="/coachactivation"
                      component={coachactivation}
                    ></Route>
                    <Route path="/course" component={course}></Route>
                    <Route path="/todolist" component={todoScreen}></Route>
                    <Route
                      path="/createcourse"
                      component={createCourse}
                    ></Route>
                    <Route
                      path="/createBlogpost"
                      component={createBlogpost}
                    ></Route>
                  </Switch>
                </div>
              </div>
            </main>
          </div>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
