
import FoodList from '../../component/FoodList/FoodList';
import {Container, Table, Col, Row, Button, Card} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Cart({foods, combos}) {
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        axios.get('/api/v1/Cart/TotalPrice', {headers: {token: localStorage.getItem("token")}})
        .then(function (response) {
        //console.log(response.data.total);
        setTotal(response.data.total);
        //setUser(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, [])

    const handlePayment = () => {
        alert("Cám ơn bạn đã mua hàng!");

    }
	return (<>
    <Container className='mt-4'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Size</th>
          <th>Unit Price</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((item, idx)=>
        (<tr key={idx}>
            <td>{item.Fname}</td>
            <td>{item.Quantity}</td>
            <td>{item.Size}</td>
            <td>{item.Unit_price}</td>
          </tr>))}
        {combos.map((item, idx)=>
        (<tr key={idx}>
            <td>{item.Cb_name}</td>
            <td>{item.Quantity}</td>
            <td>{item.Size}</td>
            <td>{item.Cost}</td>
          </tr>))}
        <tr>
            <td>Tổng tiền</td>
            <td></td>
            <td></td>
            <td>{total}</td>
        </tr>
      </tbody>
    </Table>
    <Button onClick = {handlePayment}>Payment</Button>
    </Container>
    </>
	);
}

export default Cart;


