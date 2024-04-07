import { useEffect, useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import Header from "../layout/Header";
function Register() {
    const navigate = useNavigate(); 
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/');
        }
    },[])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function register(e) {
        let userData = { name, email, password };
        e.preventDefault();
        let result = await fetch(`http://127.0.0.1:8000/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/');
    }

    return (
        <>
        <Header/>
        <div className="my-4">
            <Container className="col-lg-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label className="">Name</Form.Label>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="text-left">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3" onClick={register}>
                                Register
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
        </>
    );
}

export default Register;
