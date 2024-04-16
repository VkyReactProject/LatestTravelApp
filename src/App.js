import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './screens/HomeScreen/home.screen';
import Register from './screens/RegisterScreen/register.screen';
import CardComponent from './components/card.components';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/navbar.components';
import PackageDetailsScreen from './screens/PackageDetailsScreen/packageDetails.screen';
import IntroScreen from './screens/IntroScreen/intro.screen';
import MayBeShowNavBar from './components/MaybeShowNavBar/maybe.shownavbar.helper';
import UserAccount from './screens/AccountScreen/account.screen';
import BookingDetails from './screens/BookingDetailsScreen/bookingDetails.screen';



function App() {
  return (
    <main className='master-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/package/:id' element = {<PackageDetailsScreen />}/>
        <Route path='/intro' element = {<IntroScreen/>}/>
        <Route path='/profile' element={<UserAccount/>} />
        <Route path='/bookingdetails/:id' element={<BookingDetails/>}/>
      </Routes>
      <div className='Navbar-Main-Container'>
        <MayBeShowNavBar>
        <NavBarComponent/>
        </MayBeShowNavBar>
      </div>

    </main>
  );
}

export default App;
