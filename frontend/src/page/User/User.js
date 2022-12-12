
import {Container, Table, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function ModalUpdateUser(user) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);

    const handleUpdate = async () => {
        try {
          const result = await axios.put(
              'api/v1/customer/update',
              {
                username: document.getElementById("user_username").value,
                FName: document.getElementById("user_fname").value,
                MName: document.getElementById("user_mname").value,
                LName: document.getElementById("user_lname").value,
                BDate: document.getElementById("user_bdate").value,
                Email: document.getElementById("user_email").value,
                Gender: document.getElementById("user_gender").value
              },
              {headers: { token: localStorage.getItem("token")}}

          );
          console.log(result);
          const message = result.data;
          
          alert("message: " + message);
      } catch (error) {
          alert(error);
      }
      }

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton className="bg-light">
            <Modal.Title>Update Infomation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
                <Form.Control id="user_username" type="text" placeholder="Enter Username" style={{marginBottom: "20px", display: "inline-block"}} autoFocus/>
                <Form.Control id="user_fname" type="text" placeholder="Enter First Name" style={{marginBottom: "20px", display: "inline-block", width: "48%"}}/>
                <Form.Control id="user_mname" type="text" placeholder="Enter Mid Name" style={{marginBottom: "20px", display: "inline-block", width: "48%", marginLeft: "4%"}}/>
                <Form.Control id="user_lname" type="text" placeholder="Enter Last Name" style={{marginBottom: "20px", display: "inline-block", width: "48%"}}/>
                <Form.Select id="user_gender" className="d-inline-block" aria-label="Gender" style={{marginBottom: "20px", display: "inline-block", width: "48%", marginLeft: "4%"}}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </Form.Select>
              <Form.Control id="user_email" type="text" placeholder="Enter Email" style={{marginBottom: "20px", display: "inline-block", width: "48%"}}/>
              <Form.Control id="user_bdate" type="date" placeholder="Enter bdate" style={{marginBottom: "20px", display: "inline-block", width: "48%", marginLeft: "4%"}}/>
              
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{handleUpdate();handleClose();}}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function User({user}) {
    return (
            <>
        <Container className = 'm-3 p-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User infomation</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.FName + ' ' + user.MName + ' ' + user.LName}</td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>{user.username}</td>
                </tr>
                <tr>
                    <td>Day Of Birth</td>
                    <td>{user.BDate.substring(0, 10)}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{user.Email}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.Gender}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{2022 - Number(user.BDate.substring(0, 4))}</td>
                </tr>
            </tbody>
            </Table>
            <ModalUpdateUser/>
        </Container>
        
        </>
        );
}

export default User;
