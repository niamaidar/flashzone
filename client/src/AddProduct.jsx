import Header from "./Header";
import React, { useState } from 'react';function AddProduct(){
    const [name,setName] = useState('');
    const [file,setFile] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    async function addProduct(){
        console.warn(name,file_path,price,description)
        const formData= new FormData();
        formData.append('file_path',file_path);
        formData.append('price',price);
        formData.append('description',description);
        formData.append('name',name);
        let  result = await fetch("http://localhost:8000/api/addproduct",{
            method:'POST',
            body: formData
        });
    }   alert('Data has been saved');
    return(
        <div>
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <input type="text" className="form-control" placeholder="name" onchange={(e)=>setName(e.target.value)} />
                <br/>
                <input type="text" className="form-control" placeholder="file" onchange={(e)=>setFile(e.target.value)} />
                <br/>
                <input type="text" className="form-control" placeholder="description" onchange={(e)=>setDescription(e.target.value)} />
                <br/>
                <input type="text" className="form-control" placeholder="price" onchange={(e)=>setPrice(e.target.value)} />
                <br/>
                <button  onclick={addProduct} className="btn btn-primary">Add product</button>
            </div>
        </div>
    )
}
export default AddProduct;