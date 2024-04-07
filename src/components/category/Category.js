import { useState } from "react";
import Header from "../layout/Header";
import { Card, Container, Form, Button } from "react-bootstrap";

function Category()
{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    async function addProduct(e)
    {
        e.preventDefault();
        const data = {name:name, description:description}
        let result = await fetch(`http://127.0.0.1:8000/api/add-category`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(data),
        });
        result = await result.json();
        setName("")
        setDescription("")
        console.log("result",result);
    }
    return (
        <div>
             <Header/>
        <div className="my-4">
            <Container className="col-lg-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Category</Card.Title>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label className="">Name</Form.Label>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="">Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3" onClick={addProduct}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>

        </div>
    )
}
export default Category;