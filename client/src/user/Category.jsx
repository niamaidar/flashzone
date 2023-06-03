import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import img1 from '../images/cam1.jpg';
import img2 from '../images/cam2.jpg';
import img3 from '../images/access1.jpg';
import img4 from '../images/add.png';
import { Link } from "react-router-dom";
import Header from "../admin/Header";

import './category.css';
function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/categories'); // Assuming the API endpoint is '/api/categories'
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div>
    <div className="card-container">
      <div className="row">
        <div className="col-md-4">
          <Card>
          <Link to={"/ProductByCat/"+categories[0]?.category}><Card.Img
              variant="top"
              src={img1}
              alt="Image 1"
            /></Link>
            <Card.Body>
            <Card.Title>{categories[0]?.category}</Card.Title>
              <Card.Text>Cameras are devices used to capture and record visual images. They have become an integral part of our lives, playing a crucial role in various fields such as photography, videography, surveillance, and more.
                 By utilizing the principles of optics and light sensitivity, cameras enable us to freeze moments in time and preserve them for future reference.
            There are different types of cameras available, each catering to specific needs and preferences. Digital cameras have gained popularity with their ability to capture and store images in digital format, allowing for instant review and easy sharing. DSLR and mirrorless cameras provide advanced features and flexibility, appealing to professional photographers and enthusiasts alike. Point-and-shoot cameras offer simplicity and portability, while action cameras are designed for capturing fast-paced activities and adventures.
            Film cameras. These cameras use traditional photographic film to create images, offering a distinct aesthetic that resonates with certain individuals.
            </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <Link to={"/ProductByCat/"+categories[1]?.category}><Card.Img
              variant="top"
              src={img2}
              alt="Image 2"
            /></Link>
            <Card.Body>
            <Card.Title>{categories[1]?.category}</Card.Title>
              <Card.Text>Video cameras have become more accessible than ever, with many smartphones equipped with high-quality video recording capabilities. This has democratized video creation and opened up new avenues for content creation and storytelling.
                From personal vlogs to professional productions, video cameras have revolutionized the way we capture and share moving images. 
                Video cameras have become more accessible than ever, with many smartphones equipped with high-quality video recording capabilities. This has democratized video creation and opened up new avenues for content creation and storytelling.
                From personal vlogs to professional productions, video cameras have revolutionized the way we capture and share moving images. They enable us to convey emotions, tell stories, and engage audiences through the power of visual storytelling. Whether it's for personal enjoyment, educational purposes,
                or professional endeavors, video cameras continue to play a vital role in our modern multimedia-driven world.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
          <Link to={"/ProductByCat/"+categories[2]?.category}> <Card.Img
              variant="top"
              src={img3}
              alt="Image 3"
            /></Link>
            <Card.Body>
            <Card.Title>{categories[2]?.category}</Card.Title>
              <Card.Text>Camera accessories are essential tools that enhance the functionality and creative potential of cameras.
                 They include lenses, tripods, camera bags, external flashes, filters, wireless remote controls, and more. 
                 Lenses offer different focal lengths for various perspectives, while tripods provide stability and precise composition.
                  Camera bags protect and transport equipment, while external flashes and lighting accessories control light.
                 Filters modify images for better color, exposure, and artistic effects. Wireless remote controls enable remote triggering,
                  and additional accessories like straps, battery grips, and microphones further enhance the camera experience. 
                  Together, these accessories expand capabilities, protect equipment, and unlock creative possibilities for photographers and videographers.
                  Camera accessories play a vital role in expanding the capabilities of cameras and empowering photographers to push their boundaries..</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Category;
