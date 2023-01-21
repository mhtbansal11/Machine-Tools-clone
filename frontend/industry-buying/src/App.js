import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './Pages/firebase';
import LoginPage from './Pages/LoginPage';
// import SidebarContent from './Components/Sidebar1_H';
// import Sidebar1_H from './Components/Sidebar1_H';



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
   

   <AllRoutes/>
   <LoginPage/>

    {/* <SidebarContent /> */}
    
    </div>
  );
}

export default App;
