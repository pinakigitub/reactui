import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


export const ChildOne=(props)=>{
  const {name} =props;
  const firstNAme = useSelector((state) => state.userData.name.firstNAme);
  const dispatch = useDispatch()
  const HandelChangeNameEvt=(e)=>{
    dispatch({type:"CHANGE_NAME",payload:{
        firstNAme:"pinaki",
        surName: "Mohapatra"
       }})  
  }
  console.log(firstNAme)
    return (<>
     <div>ChildOne Component</div>
     <div>{firstNAme}</div>
     <button onClick={(e)=>{HandelChangeNameEvt(e)}}>Change Name</button>
    </>)
}