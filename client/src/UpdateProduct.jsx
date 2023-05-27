import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UpdateProduct() {
  const [name, setName] = useState('');
  const [file_path, setFile] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [marque, setMarque] = useState('');
  const [category, setCategory] = useState('');
  const { id } = useParams();
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await fetch(`http://localhost:8000/api/getProduct/${id}`);
        result = await result.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  async function updateProduct() {
    const formData = new FormData();
    formData.append('file_path', file_path);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('marque', marque);
    formData.append('quantity', quantity);
    formData.append('category', category);

    console.log({
      name: name,
      file_path: file_path,
      price: price,
      description: description,
      marque: marque,
      quantity: quantity,
      category: category,
    });

    const response = await fetch(`http://localhost:8000/api/updateProduct/${id}`, {
      method: 'POST',
      body: formData,
    });

    navigate('/list');
    console.log(response);
    alert('Data has been updated');
  }

  return (
    <div>
      <h2 className="text-center">Update Product</h2>
      <div className="col-sm-6 offset-sm-3">
        <form>
          <fieldset>
            <input
              type="text"
              defaultValue={data.name}
              className="form-control"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br /> <br />
            <input
              type="text"
              defaultValue={data.price}
              className="form-control"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br /> <br />
            <input
              type="file"
              defaultValue={data.file_path}
              className="form-control"
              placeholder="file path"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <br /> <br />
            <img style={{ width: 100 }} src={`http://localhost:8000/${data.file_path}`} alt="Product" />
            <br /> <br />
            <input
              type="text"
              defaultValue={data.description}
              className="form-control"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br /> <br />
            <input
              type="text"
              defaultValue={data.marque}
              className="form-control"
              placeholder="marque"
              onChange={(e) => setMarque(e.target.value)}
            />
            <br /> <br />
            <input
              type="text"
              defaultValue={data.quantity}
              className="form-control"
              placeholder="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br /> <br />
            <input
              type="text"
              defaultValue={data.category}
              className="form-control"
              placeholder="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <br /> <br />
            <button onClick={updateProduct} className="btn btn-primary">
              Update product
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
