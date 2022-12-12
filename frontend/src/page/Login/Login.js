import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const handleLogin = async () => {
    //localStorage.setItem("route", document.getElementById("login_route").value);
      if (document.getElementById("login_username").value == "")
      {
        alert("Please input username!");
        return;
      }
      try {
          console.log(document.getElementById("login_username").value);
          const result = await axios.post(
              '/api/v1/customer/login',
              {username: document.getElementById("login_username").value,
                password: document.getElementById("login_password").value
              }
          );
          console.log(result.data);
          const {message, token, user} = result.data;
          alert(message);
          localStorage.setItem("route", document.getElementById("login_route").value);
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          window.location.pathname = "/";
      } catch (error) {
          alert(error.response.data);
          console.log(error);
      }
  }
    return (
        <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://kenh14cdn.com/2019/1/8/4995656719667929102966318149136050321345958n-15469318684021678696220.jpg"
                      alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body px-4 py-0 text-black">
      
                      <form>
      
                        <div className="d-flex align-items-center mb-3 pb-1" style={{marginTop: "30px"}}>
                          <img src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Bach-Khoa-HCMUT.png"
                            alt="login form" style={{width: "50px", height: "50px", marginRight: "20px"}}/>
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="username" id="login_username" className="form-control form-control-lg"
                          placeholder='Enter username'/>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="password" id="login_password" className="form-control form-control-lg" 
                          placeholder='Enter password'/>
                        </div>

                        <Form.Select id="login_route" className="d-inline-block select-form" style = {{marginBottom: "15px"}}>
                          <option value="Customer">Customer</option>
                          <option value="Co-Restaurant">Co-Restaurant</option>
                          <option value="Admin">Admin</option>
                        </Form.Select>
      
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleLogin}>Login</button>
                        </div>

                        <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? 
                        <a href="/register" style={{color: "#9A616D", textDecoration: "none", marginLeft: "10px"}}>Register here</a></p>
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Login;
