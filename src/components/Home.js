import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Header from "./layout/Header";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  function fetchProducts()
  {
    fetch("http://127.0.0.1:8000/api/get-all-product", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        console.log("response", response.product);
        setData(response.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function deleteProduct(id) {
    console.log("Delete Product", id);
    fetch(`http://127.0.0.1:8000/api/delete-product/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        console.log("response", response);
        if(response.status === 200)
        {
          fetchProducts();
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
      <Header />
      <Container className="mt-2">
        <Row className="my-2">
          <Col className="d-flex justify-content-end ">
            <Button
              className="btn-sm mx-2"
              onClick={() => navigate("/add-product")}
            >
              Add Product
            </Button>
            <Button
              className="btn-sm mx-2"
              onClick={() => navigate("/add-category")}
            >
              Add Category
            </Button>
          </Col>
        </Row>
        <Row className="my-4">
          <Card className="my-4">
            <Card.Body>
              <Table bordered className="m-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((item, i) => (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        {" "}
                        <img
                          src={item.image}
                          alt="product_image"
                          width={100}
                          height={100}
                        />{" "}
                      </td>
                      <td>
                        <Button
                          onClick={() => deleteProduct(item.id)}
                          style={{ cursor: "pointer" }}
                        >
                          delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
export default Home;