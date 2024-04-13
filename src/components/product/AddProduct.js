import { useEffect, useState } from "react";
import Header from "../layout/Header";
import { Card, Container, Form, Button } from "react-bootstrap";
import { storage } from '../FirebaseConfig';
import { useNavigate } from "react-router-dom";
function AddProduct()
{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/get-all-category`)
    //         .then((result) => result.json())
    //         .then((response) => {
    //             setCategory(response);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);

          uploadImageToFirebase(e.target.files[0])
          uploadImageToFirebase(e.target.files[0])
            .then((downloadURL) => {
            setImageUrl(downloadURL);
            })
            .catch((error) => {
            console.error('Error uploading image:', error);
            });
        }
        console.log('Upload',imageUrl);
      };
        const uploadImageToFirebase = (file) => {
            return new Promise((resolve, reject) => {
            const storageRef = storage.ref();
        
            const imageRef = storageRef.child(file.name);
        
            imageRef.put(file).then((snapshot) => {
                console.log('Image uploaded successfully!', snapshot);
                imageRef.getDownloadURL().then((downloadURL) => {
                resolve(downloadURL); 
                }).catch((error) => {
                reject(error); 
                });
            }).catch((error) => {
                console.error('Error uploading image:', error);
                reject(error);
            });
            });
        };
  
    async function addProduct(e) {
    e.preventDefault();
      const userInfo = JSON.parse(localStorage.getItem("user-info"));
      console.log("userInfo",image)
      const data = {
        userId: userInfo.id,
        name: name,
        description: description,
        price: price,
        image: imageUrl,
      };
      try {
        let result = await fetch(`http://127.0.0.1:8000/api/add-product`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        // console.log("result",result);
        if (result.status === 201) {
          console.log("Product created successfully");
          navigate("/");
        } else {
          console.log("Failed to create product");
        }
      } catch (error) {
        console.error("Error creating product:", error);
      }
    }
    return (
    <>
    <Header/>
    
    <Container className="col-lg-4 my-4">
                <Card className="my-4">
                    <Card.Body className="my-4">
                        <Card.Title>Product</Card.Title>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label className="">Name</Form.Label>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label className="">Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPrice">
                                <Form.Label className="">Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicImage">
                                <Form.Label className="">Image</Form.Label>
                                <Form.Control type="file" placeholder="Choose Image" onChange={handleImageChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3" onClick={addProduct}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
    </>)
}
export default AddProduct;