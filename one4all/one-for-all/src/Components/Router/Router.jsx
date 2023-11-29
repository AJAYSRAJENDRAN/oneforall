import React, {} from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import Registration from "../Registration";
import Studiobooking from "../Studiobooking";
import Employeedisplay from "../Employeedisplay";
import Housecleaning from "../Housecleaning";
import Carpenter from "../Carpenter";
import Housepainting from "../Housepainting";
import Electrician from "../Electrician";
import Plumber from "../Plumber";
import Contactus from "../Contactus";
import Booking from "../Booking";
import Body from "../Body";
import Adminlogin from "../Adminlogin";
import Adminpage from "../Adminpage";
import Employeepage from "../Employeepage";
import Employeelogin from "../Employeelogin";
import Employeesignup from "../Employeesignup";
import Employeeprofile from "../Employeeprofile";

function Router() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [username, setUsername] = useState('');

  // const handleLogin = (user) => {
  //   setIsAuthenticated(true);
  //   setUsername(user.name);
  // }
  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   setUsername('');
  // }
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar isAuthenticated={isAuthenticated} username={username} onLogout={handleLogout} /> */}
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/studiobooking" element={<Studiobooking />}></Route>
          <Route path="/employee/:id" element={<Employeedisplay />}></Route>
          <Route path="/cleaning" element={<Housecleaning />}></Route>
          <Route path="/carpenter" element={<Carpenter />}></Route>
          <Route path="/housepainter" element={<Housepainting />}></Route>
          <Route path="/electrician" element={<Electrician />}></Route>
          <Route path="/plumber" element={<Plumber />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
          <Route path="/adminlogin" element={<Adminlogin/>}></Route>
          <Route path="/adminpage" element={<Adminpage/>}></Route>
          <Route path="/employeepage" element={<Employeepage/>}></Route>
          <Route path="/employeelogin" element={<Employeelogin/>}></Route>
          <Route path="/employeesignup" element={<Employeesignup/>}></Route>
          <Route path="/employeeprofile" element={<Employeeprofile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
