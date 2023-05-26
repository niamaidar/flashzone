import {withRouter} from 'react-router-dom'
import {useState,useEffect} from 'react'
function UpdateProduct(){
    const [data,setData]=useState("")
    console.warn("props",props.match.params.id)
    useEffect(()=>{
        fetch("http://localhost:8000/api/product/"+props.match.params.id)
    })
    return(
        <div>
            <h1>UpdateProduct page</h1>
        </div>
    )
}
export default UpdateProduct;