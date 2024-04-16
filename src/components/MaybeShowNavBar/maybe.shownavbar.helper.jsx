import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

const MayBeShowNavBar = ({children}) => {

    const location = useLocation();
    const [showNavbar,setShowNavBar] = useState(false);

    useEffect(()=>{
        if(location.pathname == '/intro'){
            setShowNavBar(false);
        }else{
            setShowNavBar(true)
        }
    },[location]);
  return (
    <div>
      {showNavbar && children}
    </div>
  )
}

export default MayBeShowNavBar
