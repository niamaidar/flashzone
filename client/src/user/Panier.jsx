// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from'react-router-dom';
import React from "react";
import img from "../images/login3.jpg"
function Panier(){
    // const navigate = useNavigate();
    // const [loading, setLoading] = useState(true);
    // const [cart,setCart] = useState([]);

    // useEffect(()=>{
    //     let isMounted = true;
    //     axios.post('http://localhost:8000/api/carts').then(res=>{
    //         if(isMounted){
    //             if(res.data.status === 200)
    //             {
    //                 setCart(res.data.cart);
    //                 setLoading(fals);
    //             }
    //             else if(res.data.status == 401)
    //             {
    //                 navigate('/');
    //                 console.log('warning',res.data.message,"error")
    //             }
    //         }
    //     });

    //     return () => {
    //         isMounted = false;
    //     };
    // },[navigate]);

    // if (loading) {
    //     return <h5>Loading...</h5>;
    //   }

    return(
        <div>
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Home / cart</h6>
                </div>
            </div>
            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Quantity</th>
                                            <th className='text-center'>Total Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{alignItems:"center"}}>
                                            <td width="10%">
                                                <img src={img} alt="Prod Image" width="50px" height="50px"/>
                                            </td>
                                            <td>Product name</td>
                                            <td width="15%" className='text-center'>500</td>
                                            <td width="25%">
                                                <div className="input-group">
                                                    <button className='input-group-text'>-</button>
                                                    <div className='form-control text-center'>2</div>
                                                    <button className='input-group-text'>+</button>
                                                </div>
                                            </td>
                                            <td width="15%" className='text-center'>100</td>
                                            <td width="10%">
                                                <button className='btn btn-danger btn-sm'>Remove</button>
                                            </td> 
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Panier;