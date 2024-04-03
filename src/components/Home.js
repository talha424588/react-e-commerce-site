import React from "react";
import { Card, Container, } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Home() {
  return (
    <>
      <Container className="mt-2">
      <Card>
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
    </Container>
    </>
  );
}
export default Home;
