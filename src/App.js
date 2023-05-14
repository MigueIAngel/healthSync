import Register from "./views/registerUser";
// import RegisterPage from "./views/register"
import Home from "./views/home"
import UserView from "./views/userView";
import UserViewP from "./views/userViewP";
import Login from "./views/loginUser";
import AboutUs from "./views/aboutUs";
import ContactUs from "./views/contactUs";
import Vitals from "./views/vitals";
import VitalsD from "./views/vitalsDoc";

import { BrowserRouter, Routes, Route, /*Navigate */} from 'react-router-dom'
//import { useContext } from 'react'




export default function App() {

     return (
       <BrowserRouter>
         
           <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/registerUser" element={<Register />}></Route>
             <Route path="/user" element={<UserView />}></Route> 
             <Route path="/userViewP" element={<UserViewP/>}></Route>
             <Route path="/loginUser" element={<Login/>}></Route>
             <Route path="/aboutUs" element={<AboutUs/>}></Route>  
             <Route path="/contactUs" element={<ContactUs/>}></Route> 
             <Route path="/vitals" element={<Vitals/>}></Route>
             <Route path="/vitalsDoc" element={<VitalsD/>}></Route>        
             {/* <Route path="/dashboard" exact component={Dashboard} />
             <Route path="/customers" exact component={CustomersList} />
             <Route path="/cart" exact component={ShoppingCart} />
             <Route path="*" component={NoMatchPage} /> */}
             
           </Routes>
         
       </BrowserRouter>
     );
   }
 
