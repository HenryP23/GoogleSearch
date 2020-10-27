import React, { useState, useEffect } from "react";
import { Col, Row, Button, Card, Container, Form } from "react-bootstrap";
import axios from 'axios';


function Saved() {


  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, [])

  
  function loadBooks() {
    axios.get('/api')
    .then(bk => {
      setBooks(bk.data);
      console.log(bk.data);
    }).catch(error => console.log(error))
  }

  function deleteBook(id) {
    console.log(id);
    axios.delete("/api/" + id)
    .then(res => {
      window.location.reload();
    }).catch(error => console.log(error))
  }





  return (
    <>
      <Container>
     <Row>
     {books.map(book => (
       <Col lg={6}>
       <Card className = "mb-3" bg="dark" text="light" style={{ width: '30rem'}} style={{height: '40rem'}}>
         <Card.Img src={book.image} alt={book.title} height = "270px" className="pr-5 pl-5 pt-3"/>
         <Card.Body>
         <Card.Title>
        {book.title}
         </Card.Title>
         <Card.Text>
         Authors: {book.authors}
         </Card.Text>
         <Button onClick={(e) => { window.location.href = book.previewLink; }} variant="primary">View</Button>
         <Button className="ml-3" onClick={() => {deleteBook(book._id)}}>Delete</Button>
         <Card.Text>
         {book.description}
         </Card.Text>
         </Card.Body>
       </Card>
       </Col>
     ))}
   </Row>
   </Container>
    </>
  )

}

export default Saved;
