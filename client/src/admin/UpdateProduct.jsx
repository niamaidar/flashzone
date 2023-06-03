import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UpdateProduct(props) {
  const { id } = useParams();
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  console.warn("props:", props);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await fetch(`http://localhost:8000/api/getProduct/${id}`);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        setBrand(result.brand);
        setQuantity(result.quantity);
        setCategory(result.category);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('brand', brand);
      formData.append('quantity', quantity);
      formData.append('category', category);
      if (file) {
        formData.append('file_path', file);
      }

      const response = await fetch(`http://localhost:8000/api/updateProduct/${id}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Product updated successfully!');
        alert('Product updated successfully!');
        navigate("/list");

        // Perform any additional actions upon successful update
      } else {
        console.error('Failed to update product.');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <h2 className='text-center'>Update Product</h2>
      <div className="col-sm-6 offset-sm-3">
        <form onSubmit={handleUpdate}>
          <fieldset>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='name' /> <br /> <br />
            <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder='price' /> <br /> <br />
            <input type='file' onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder='file path' /> <br /> <br />
            <img style={{ width: 100 }} src={`http://localhost:8000/${data.file_path}`} alt="Product Image" /> <br /> <br />
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder='description' /> <br /> <br />
            <input type='text' value={brand} onChange={(e) => setBrand(e.target.value)} className="form-control" placeholder='brand' /> <br /> <br />
            <input type='text' value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder='quantity' /> <br /> <br />
            <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" placeholder='category' /> <br /> <br />
            <button type="submit" className="btn btn-primary">Update product</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
