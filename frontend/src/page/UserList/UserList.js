
import {Container, Table, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import UserListModal from './UserListModal';
import axios from 'axios';


function UserList({users}) {
  const handleDelete= async (idx) => {
    try {
      //console.log(idx);
      const result = await axios.put(
          '/api/v1/customer/delete/' + myUsers[idx].username,
          {},
          {headers: { token: localStorage.getItem("token")}}

      );
      const message = JSON.stringify(result.data);
      alert(message);
  } catch (error) {
      alert(error.response);
  }
  }

  const [myUsers, setMyUsers] = useState(users);
  const [myFilters, setMyFilters] = useState([]);

  const setUpFilter = () => {
    setMyUsers(users);
    for (let i = 0; i < myFilters.length; i++)
    {
      setMyUsers(myUsers.filter((item)=>item.FName.includes(myFilters[i])));
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

        <Container style={{marginTop: "40px"}}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Mid Name</th>
          <th>Last Name</th>
          <th>BDate</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Rank</th>
          <th>Member ID</th>
          <th>Accumulated Point</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
            myUsers.map((item, idx)=>{
                return (
                <tr key = {idx}>
                    <td>{item.Cus_id}</td>
                    <td>{item.FName}</td>
                    <td>{item.MName}</td>
                    <td>{item.LName}</td>
                    <td>{item.BDate.substring(0, 10)}</td>
                    <td>{item.Email}</td>
                    <td>{item.Gender}</td>
                    <td>{2022 - Number(item.BDate.substring(0, 4))}</td>
                    <td>{item.Rank}</td>
                    <td>{item.Mem_id}</td>
                    <td>{item.Accumulated_point}</td>
                    <td><Button onClick={()=>{handleDelete(idx)}}><i className='gg-trash'/></Button></td>
                </tr>
                );
            })
        }
      </tbody>
        </Table>
        </Container>

        </>
    )
}

export default UserList;
