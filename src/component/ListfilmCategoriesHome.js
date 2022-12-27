import { Card, CardGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function SmallExample() {
  return (
    <>
    <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th bg="dark">Phim đang chiếu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
           
            <CardGroup style={{ width: 600, height: 100 }}>
            {/* 1 */}
              <Card bg="dark" >
                <Card.Img
                 
                  variant="top"
                  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                ></Card.Img>

                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* 2 */}
              <Card bg="dark">
                <Card.Img variant="top"   src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* 3 */}
              <Card bg="dark">
                <Card.Img variant="top"   src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
         
        </tr>
      </tbody>
    </Table>
    
    </>
  );
}
