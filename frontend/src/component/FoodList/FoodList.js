import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';
import {Table, Container, Row, Col} from 'react-bootstrap';

import './foodList.css';

function FoodList({foods, combos, myfilter}) {  
    const [myFilters, setMyFilters] = useState([]);
    const [myFoods, setMyFoods] = useState(foods);
    const [myCombos, setMyCombos] = useState(combos);


    const setUpFilter = () => {
        setMyFoods(foods);
        setMyCombos(combos);
        for (let i = 0; i < myFilters.length; i++)
        {
            setMyFoods(myFoods.filter((item)=>item.Fname.includes(myFilters[i])));
            setMyCombos(myCombos.filter((item)=>item.Cb_name.includes(myCombos[i])));
        }

    }

    const handleFilter = (value) => {
        if(value == "")
        {
            alert("Bạn chưa nhập vào Filter!");
            return;
        }

        if (myFilters.length >= 5)
        {
            alert("Filter được giới hạn là 5!");
            return;
        }
        myFilters.push(value);
        setMyFilters([...myFilters]);
        setUpFilter();
    }

  return (
    <>
        <Container className='text-left' style={{backgroundColor: "#DDDDDD", marginTop: "20px"}}>
                <div className = "text-left d-inline-block" style = {{width: "50%"}}>
                {
                myFilters.map((item, idx)=>(
                    <div key={idx} className='d-inline-block border border-dark p-2 m-2 rounded'>{item}
                    </div>
                ))}
                </div>
                <div className = "d-inline-block text-right" style = {{width: "50%"}}>
                <input id = "foodlist_food" className="p-2 rounded"/>
                <button className='p-2 rounded m-2 apply-button' 
                    onClick={() => {handleFilter(document.getElementById("foodlist_food").value);document.getElementById("foodlist_food").value = ""}}>
                    Apply Filter</button>
                <button className='p-2 rounded m-1 apply-button' 
                    onClick={() => {setMyFilters([]);setUpFilter();}}>
                    Clear Filter</button>
                </div>

        </Container>

        <div style={{textAlign: "center"}}>
            <Container className = "text-left mt-3 pt-2 pb-2" style={{backgroundColor: "#DDDDDD"}}><h1>Food List</h1></Container>
            <Container style={{display: "inline-block", textAlign: "center"}}>
                {myFoods.map((item, idx) => 
                (
                <Card key = {idx} className = 'm-3 p-1 card-height' style={{ width: '18rem', display: 'inline-block',verticalAlign: "text-bottom" }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={myFoods[idx].PictureURL}/>
                <Card.Body>
                    <Card.Title>{myFoods[idx].Fname}</Card.Title>
                    <Card.Text>
                        {myFoods[idx].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{myFoods[idx].Unit_price.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card>)
                
            )}
            </Container>
            <Container className = "text-left mt-3 pt-2 pb-2" style={{backgroundColor: "#DDDDDD"}}><h1>Combo List</h1></Container>
            <Container style={{display: "inline-block", textAlign: "center"}}>
                {myCombos.map((item, idx) => 
                 (
                <Card key = {idx} className = 'm-3 p-1 card-height' style={{ width: '18rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={myCombos[idx].PictureURL} />
                <Card.Body>
                    <Card.Title>{myCombos[idx].Cb_name}</Card.Title>
                    <Card.Text>
                        {myCombos[idx].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{myCombos[idx].Cost.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card>)
                
                
            )}
            </Container>
        </div>
    </>
  );
}

export default FoodList;
