import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import { auth } from './Pages/firebase';

// import ProductPage from './Pages/ProductPage';
// import SidebarContent from './Components/Sidebar1_H';
// import Sidebar1_H from './Components/Sidebar1_H';


// import Sidebar1_H from './Components/Sidebar1_H';
// import Sidebar2_P from './Components/Sidebar2_P';

import { AllRoutes } from './Routes/AllRoutes';


function App() {
  const [useName,setUserName]=useState("");


  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else setUserName("")
      console.log(user)
    })
    
  },[])


  return (
    <div className="App">
   
    {/* <ProductPage /> */}
    
   <AllRoutes/>
   <Footer/>
    
    </div>
  );
}

export default App;
