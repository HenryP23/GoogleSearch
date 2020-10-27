import React, { useState} from "react";
import {Col, Row, Button, Card, Container, Form} from "react-bootstrap";
import axios from 'axios';


function Search() {
  
  const [book, setBook] = useState("");
  
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setBook(event.target.value);
    console.log(book);
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&maxResults=40")
    .then(data => {
      setResult(data.data.items)
    }) .catch(error => console.error(error))
  }

  function handleSave(book){
    axios.post('/api', {
      title: book.title,
      authors: book.authors,
      description: book.description,
      image: book.imageLinks.thumbnail,
      link: book.previewLink
    })
    .then(bk => {
      console.log(bk)
    }).catch(error => console.log(error))
  }

  

  return (
    <>
   <Container className= "mx-auto">
     <Form onSubmit={handleSubmit}>
       <Form.Group>
        <Form.Label className= "mt-5"><h1>Google Book Search</h1></Form.Label>
        <input type="text" onChange={handleChange} className="form-control mt-10" id="book" placeholder="Search for Books"></input>
        <button type="submit" className="btn btn-danger">Search</button>
       </Form.Group>
     </Form>
     </Container>
<Container>
     <Row>
     {result.map(book => (
       <Col lg={6}>
       <Card className = "mb-3" bg="dark" text="light" style={{ width: '30rem'}} style={{height: '40rem'}}>
         <Card.Img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} height = "270px" className="pr-5 pl-5 pt-3"/>
         <Card.Body>
         <Card.Title>
        {book.volumeInfo.title}
         </Card.Title>
         <Card.Text>
         Authors: {book.volumeInfo.authors}
         </Card.Text>
         <Button onClick={(e) => { window.location.href = book.volumeInfo.previewLink; }} variant="primary">View</Button>
         <Button className="ml-3" onClick={() => {handleSave(book.volumeInfo)}}>Save</Button>
         <Card.Text>
         {book.volumeInfo.description}
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

export default Search;
