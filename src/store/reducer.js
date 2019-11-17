let reducer = (state=[],action) => {
    if(action.type==='add_lists'){
        
    }
   if(action.type==='add_godds'){
       let aNewState = JSON.parse(JSON.stringify(state));
       let oFindGoods = aNewState.find(item => item.id === action.value.id);
       if(oFindGoods){
           oFindGoods.num+=1;
           return aNewState;
       }else{
           aNewState.push(action.value);
           return aNewState;
       }

   }
}

export default reducer;