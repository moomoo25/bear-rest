// JavaScript source code
import axios from 'axios';
export function fetchBear(){
    return (dispatch)=>{
     
        axios.get('http://localhost:8000/api/bears')
 .then(result=>{
    dispatch({type:'FETCH_BEAR',payload:result.data})
        //
        console.log('I was triggered during render')
 })
    }

}
export function deleteBear(id){
    
    return (dispatch)=>{
        axios.delete(`http://localhost:8000/api/bears/${id}`)
        .then(() =>{
            dispatch(fetchBear())
           // console.log(id)
        })
    }
}