


const intialState={
   name:{
    firstNAme:"firstNAme",
    surName: "surName"
   }
};

function userInfoReducer(state=intialState, acttion ){
    switch(acttion.type){
        case "CHANGE_NAME":
               return {...state,name: acttion.payload};
        default:
             return state;

        
    }
}
export default userInfoReducer;
