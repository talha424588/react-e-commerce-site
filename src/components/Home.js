import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Header from "./layout/Header";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <Container className="mt-2">
        <Row className="my-2">
          <Col className="d-flex justify-content-end ">
          <Button className="btn-sm mx-2" onClick={() => navigate('/add-product') }>Add Product</Button>
          <Button className="btn-sm mx-2" onClick={() => navigate('/add-category') }>Add Category</Button>
          </Col>
        </Row>
        <Row className="my-4">
          <Card className="my-4">
            <Card.Body>
              <Table bordered className="m-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
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
