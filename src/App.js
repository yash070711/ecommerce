
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NewArrivals from "./New Arrivals";
import Womens from "./Womens";
import Myaccount from './Myaccount';
import Mens from "./Mens";
import Collaboration from "./Collaboration";
import Sport from "./Sport";
import Camp from "./Camp";
import Checkout from "./Checkout";
import { useEffect } from "react";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useDispatch } from "react-redux";

function App() {
 /* const [{}, dispatch] = useStateValue();
  console.log();*/
const dispatch=useDispatch();
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>




            <Route path="/" element={<Dashboard />} />
            <Route path="/NewArrivals" element={<NewArrivals/>} />
            <Route path="/Womens" element={<Womens/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Myaccount" element={<Myaccount />} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Collaboration" element={<Collaboration />} />
            <Route path="/Sport" element={<Sport />} />
            <Route path="/Camp" element={<Camp />} />
            <Route path="/Checkout" element={<Checkout />} />
            
            
          

          

          

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
