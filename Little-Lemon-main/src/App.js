import './App.css';
import { useState, useEffect, React } from 'react';
import { Navbar, Header, Main, Footer, Reservations, OrderOnline } from './components';
import {Routes, Route, useLocation  } from "react-router-dom";
import { headerData, reservationData, orderOnline } from './constants';
import DataContext from './DataContext';
import ConfirmedBooking from './components/Reservations/ConfirmedBooking';

function App() {
// use state to set data
// use effect to get path
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  // set path name on route change
  useEffect(()=> {
    setPath(location.pathname);
  }, [location.pathname]);


    // Send data to header to based on route
    let data = {};
    if(path === '/' || path === '/Little-Lemon') {

      data = headerData;

    } else if (path === '/Reservations') {

      data = reservationData;

    } else if (path === '/OrderOnline') {

      data = orderOnline;

    }

    
  return (
      <>
      
          <Navbar />
            <DataContext.Provider value={data}>
                <Routes>
                  <Route path='/Little-Lemon' element ={ 
                    <>

                      <Header />
                      <Main />


                    </>
                  } />                  
                  <Route path='/' element ={ 
                    <>

                      <Header />
                      <Main />


                    </>
                  } />
                  <Route path='/Reservations' element={
                    <>

                      <Header />
                      <Reservations />

                        
                    </>
                  } />
                  <Route path='/OrderOnline' element={
                    <>
                      <Header />
                      <OrderOnline />  
                    </>
                  } />                  

                  {/* Path for booking confirmation */}
                  <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}/>

                </Routes>
            </DataContext.Provider>
          <Footer />

      </>
  );
}

export default App;
