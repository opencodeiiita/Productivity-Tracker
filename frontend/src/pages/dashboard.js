import React from "react";
import  PersistentDrawerLeft from "../component/PersistentDrawer"



function Dashboard(props) {

  return(
  <>
     <PersistentDrawerLeft state={props.state} func={props.func} />
    
   
     
  </>
  );
}
export default Dashboard;
