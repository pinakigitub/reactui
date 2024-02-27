import React, {useEffect, useState} from "react";


function useUSerInfo(nameTemp){

    const [name, setName] = useState("SD");

useEffect( ()=>{
    setName(nameTemp);

}  ,[nameTemp]);


  return  name;
}

export default useUSerInfo;


