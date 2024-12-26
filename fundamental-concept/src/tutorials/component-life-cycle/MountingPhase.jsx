import { useEffect, useState } from "react";

function MountingPhase(){
const [ data, setData]=useState(null);
// let cnt = 0;
console.log("this will print imidiately ");


// --------------------------------- ComponnetDid mount 
useEffect( ()=>{
  setTimeout( ()=>  setData(data+1), 1000)
// setData(data+1)
console.log("this will print after insitial render");

return () =>{
    console.log("Component un- mount");
    
}
},[data])

//-----------------------------
useEffect( ()=>{
  console.log("this will also print");
  
  },[])
//-------------------
useEffect( ()=>{
    console.log("always print with data state :", data);
    
    },[data])

    return <h1>{data? data : 'Loading .... please wait'} </h1>
}


export default MountingPhase;