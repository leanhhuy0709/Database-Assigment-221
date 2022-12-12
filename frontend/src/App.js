import Login from './page/Login/Login';
import NavigationBar from './component/NavigationBar/NavigationBar';
import Home from './page/Home/Home';
import Cart from './page/Cart/Cart';

import {Route, BrowserRouter, Routes} from 'react-router-dom';
import User from './page/User/User';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import UserList from './page/UserList/UserList';
import Register from './page/Register/Register';
import axios from 'axios';
import ErrorPage from './page/ErrorPage/ErrorPage';

function App() {
    //thông tin mà người dùng đã đăng nhập
    const [user, setUser] = useState({"id": 1, "username":"huy123", "FName": "Le", "MName": "Anh", "LName": "Huy", "BDate": "2002-09-07", "Email": "huy123@gmail.com", "Gender": "Male", "Age": 20});
    const [foods, setFoods] = useState([
      {"Res_id":1, "F_id": 1,"Type_ID": 4 , "Fname": 'Cơm sườn bì', "Unit_price": 30000, "Description": '1 suon+bi', "Status": 1, "size":'M', "PictureURL": "https://img-global.cpcdn.com/recipes/a9b651b21ea75cd5/1200x630cq70/photo.jpg"},
      {"Res_id":1, "F_id": 2,"Type_ID": 4 , "Fname": 'Cơm sườn bì', "Unit_price": 40000, "Description": '1 suon+bi', "Status": 1, "size":'L', "PictureURL": "https://img-global.cpcdn.com/recipes/a9b651b21ea75cd5/1200x630cq70/photo.jpg"},
      {"Res_id":2, "F_id": 3,"Type_ID": 4 , "Fname": 'Cơm sườn bì trứng', "Unit_price": 35000, "Description": '1 suon+bi+trung', "Status": 1, "size":'M', "PictureURL": "https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg"},
      {"Res_id":4, "F_id": 4,"Type_ID": 4 , "Fname": 'Cơm sườn bì chả', "Unit_price": 45000, "Description": '1 suon+bi+cha', "Status": 1, "size":'M', "PictureURL": "https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg"},
      {"Res_id":5, "F_id": 5,"Type_ID": 6 , "Fname": 'Bún riêu', "Unit_price": 25000, "Description": '1 bun', "Status": 1, "size":'M', "PictureURL": "https://cdn.tgdd.vn/Files/2019/03/07/1153440/cach-lam-bun-rieu-cua-chuan-vi-ngon-het-say-202110191053117105.jpg"},
      {"Res_id":1, "F_id": 6,"Type_ID": 4 , "Fname": 'Bún riêu', "Unit_price": 30000, "Description": '1 bun', "Status": 1, "size":'L', "PictureURL": "https://cdn.tgdd.vn/Files/2019/03/07/1153440/cach-lam-bun-rieu-cua-chuan-vi-ngon-het-say-202110191053117105.jpg"},
      {"Res_id":1, "F_id": 7,"Type_ID": 7 , "Fname": 'Hủ tiếu', "Unit_price": 25000, "Description": '', "Status": 1, "size":'M', "PictureURL": "https://cdn.tgdd.vn/2021/09/CookProduct/hutieugioheo1-1200x676.jpg"},
      {"Res_id":1, "F_id": 8,"Type_ID": 3 , "Fname": 'Hủ tiếu', "Unit_price": 30000, "Description": '', "Status": 1, "size":'L', "PictureURL": "https://cdn.tgdd.vn/2021/09/CookProduct/hutieugioheo1-1200x676.jpg"},
      {"Res_id":6, "F_id": 9,"Type_ID": 1 , "Fname": 'Trà sữa truyền thống', "Unit_price": 30000, "Description": '', "Status": 1, "size":'M', "PictureURL": "http://cdn.tgdd.vn/Files/2021/08/10/1374160/hoc-cach-pha-tra-sua-o-long-dai-loan-thom-ngon-chuan-vi-ai-cung-me-202108100039248020.jpg"},
      {"Res_id":1, "F_id": 10,"Type_ID": 4 , "Fname": 'Milo dầm', "Unit_price": 35000, "Description": '', "Status": 1, "size":'M', "PictureURL": "http://cdn.tgdd.vn/Files/2019/07/04/1177275/7-cach-lam-milo-dam-mat-lanh-sieu-ngon-kho-cuong-tai-nha-202207261610105437.jpg"},
      {"Res_id":7, "F_id": 11,"Type_ID": 4 , "Fname": 'Trà sữa socola', "Unit_price": 30000, "Description": '', "Status": 1, "size":'M', "PictureURL": "http://cdn.tgdd.vn/Files/2019/07/04/1177275/7-cach-lam-milo-dam-mat-lanh-sieu-ngon-kho-cuong-tai-nha-202207261610105437.jpg"},
      {"Res_id":1, "F_id": 12,"Type_ID": 2 , "Fname": 'Trà sữa khoai môn', "Unit_price": 34000, "Description": '', "Status": 1, "size":'M', "PictureURL": "https://cdnetworks.anchay.vn/media/2021/11/3-768x726.png"},
  ]);
    const [combos, setCombos] = useState([
      {"Res_id":1, "Cb_id": 1, "Cb_name": '2 Cơm sườn bì', "Cost": 50000, "Description": '2 suon+bi', "Status": 1, "PictureURL": "https://img-global.cpcdn.com/recipes/a9b651b21ea75cd5/1200x630cq70/photo.jpg"},
      {"Res_id":1, "Cb_id": 1, "Cb_name": '2 Cơm sườn bì trứng', "Cost": 50000, "Description": '2 suon+bi+trung', "Status": 1, "PictureURL": "https://cdn.daynauan.info.vn/wp-content/uploads/2015/06/com-tam-suon-bi-cha.jpg"},
      {"Res_id":1, "Cb_id": 1, "Cb_name": '3 Trà sữa ngẫu nhiên', "Cost": 70000, "Description": 'tra sua', "Status": 1, "PictureURL": "https://www.sweets.vn/wp-content/uploads/2021/08/foody-upload-api-foody-mobile-milo-dam-201103164830.jpg"},
      {"Res_id":1, "Cb_id": 1, "Cb_name": '2 Trà sữa ngẫu nhiên', "Cost": 50000, "Description": 'tra sua', "Status": 1, "PictureURL": "https://images.foody.vn/res/g95/941461/prof/s576x330/foody-upload-api-foody-mobile-ttttttt-190910172123.jpg"},
    
    ]);
    const [cart, setCart] = useState([
      {"Res_id": 1, "F_id": 1, "Type_ID": 3, "Fname": "com suon bi", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 4},
      {"Res_id": 1, "F_id": 2, "Type_ID": 4, "Fname": "com suon bi trung", "Unit_price": 35000, "Description": "1 suon+bi+trung", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 5},
      {"Res_id": 2, "F_id": 3, "Type_ID": 2, "Fname": "com suon bi cha", "Unit_price": 35000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 7},
      {"Res_id": 2, "F_id": 4, "Type_ID": 1, "Fname": "bun them", "Unit_price": 5000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 8},
      {"Res_id": 3, "F_id": 5, "Type_ID": 4, "Fname": "tra sua bac ha", "Unit_price": 20000, "Description": "1 suon+bi", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 10},
      {"Res_id": 4, "F_id": 6, "Type_ID": 3, "Fname": "tra sua truyen thong", "Unit_price": 25000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 2},
      {"Res_id": 5, "F_id": 7, "Type_ID": 2, "Fname": "tra sua olong", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 3},
    ]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      if (!localStorage.getItem("token")) return;

      axios.get('/api/v1/customer/info', {headers: {token: localStorage.getItem("token")}})
      .then(function (response) {
        //console.log(response.data);
        setUser(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
      /*
      axios.get('/api/v1/Cart/getFood', {headers: {token: localStorage.getItem("token")}})
      .then(function (response) {
        setFoods(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      axios.get('/api/v1/Cart/getCombo', {headers: {token: localStorage.getItem("token")}})
      .then(function (response) {
        setCombos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
      axios.get('/api/v1/admin/GetAllCus', {headers: {token: localStorage.getItem("token")}})
      .then(function (response) {
        //console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      }, []);

  if (localStorage.getItem("route") == "Customer"){ 
    if (foods.length == 0 || combos.length == 0) return (<h1>Loading...</h1>)
    return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <Routes>
        <Route path = '/cart' element = {<Cart foods = {foods} combos = {combos}/>}/>
        <Route path = '/user' element = {<User user = {user}/>}/>
        <Route path = '/' element = {<Home foods = {foods} myfilter = {""} combos = {combos}/>}/>
        <Route path = '/*' element = {<ErrorPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
  }
  else if (localStorage.getItem("route") == "Admin") {
    if (users.length == 0) return (<h1>Loading...</h1>)
    return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <Routes>
        <Route path = '/' element = {<UserList users = {users}/>}/>
        <Route path = '/*' element = {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );}
  else if (localStorage.getItem("route") == "Co-Restaurant") return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <Routes>
        <Route path = '/*' element = {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
  else return (
    <BrowserRouter>
      <Routes>
        
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/*' element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



