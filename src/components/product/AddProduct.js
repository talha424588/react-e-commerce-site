import { useEffect, useState } from "react";
import Header from "../layout/Header";
import { Card, Container, Form, Button } from "react-bootstrap";

function AddProduct()
{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    useEffect((e)=>{
         fetch(`http://127.0.0.1:8000/api/get-all-category`)
         
    })

    function addProduct(e){
        e.preventDefault();
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
                            <Form.Select>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </Form.Select>
                            <Form.Group controlId="formBasicImage">
                                <Form.Label className="">Image</Form.Label>
                                <Form.Control type="file" placeholder="Choose Image" value={image} onChange={(e) => setImage(e.target.value)} />
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