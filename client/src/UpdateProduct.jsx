import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UpdateProduct() {
  const { id } = useParams();
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await fetch(`http://localhost:8000/api/product/${id}`);
        result = await result.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
        <h2 className='text-center'>Update Product</h2>
        <div className="col-sm-6 offset-sm-3">
            <form>
            <fieldset>
                <input type='text' defaultValue={data.name} className="form-control" placeholder='name'/> <br/> <br/>
                <input type='text' defaultValue={data.price} className="form-control" placeholder='price'/> <br/> <br/>
                <input type='file' defaultValue={data.file_path} className="form-control" placeholder='file patj'/> <br/> <br/>
                <img style={{width:100}} src={"http//:localhost:8000/"+data.file_path} /> <br/> <br/>
                <input type='text' defaultValue={data.description} className="form-control" placeholder='description'/> <br/> <br/>
                <input type='text' defaultValue={data.marque} className="form-control" placeholder='marque'/> <br/> <br/>
                <input type='text' defaultValue={data.quantity} className="form-control" placeholder='quantity'/> <br/> <br/>
                <input type='text' defaultValue={data.category} className="form-control" placeholder='category'/> <br/> <br/>
                <button className="btn btn-primary">Update product</button>
            </fieldset>
            </form>
        </div>
    </div>
  );
}

export default UpdateProduct;

{/* <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          placeholder="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="brand"
          onChange={(e) => setMarque(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <br /> */}