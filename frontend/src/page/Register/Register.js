import Form from 'react-bootstrap/Form';
import './Register.css';
import axios from 'axios';

function Register() {
    const handleRegister = async () => {
      if (document.getElementById("register_confirm_password").value != document.getElementById("register_password").value)
      {
        alert("Password and confirm password are not the same!");
        return;
      }
      try {
        const result = await axios.post(
            '/api/v1/customer/register',
            {username: document.getElementById("register_username").value,
              password: document.getElementById("register_password").value,
              FName: document.getElementById("register_fname").value,
              MName: document.getElementById("register_mname").value,
              LName: document.getElementById("register_lname").value,
              BDate: document.getElementById("register_bdate").value,
              Email: document.getElementById("register_email").value,
              Gender: document.getElementById("register_gender").value
            }
        );
        const message = JSON.stringify(result.data);
        switch(message) {
          case "\"Check constraint 'ct_pass_len' is violated.\"":
            alert("Mật khẩu phải có ít nhất 6 kí tự");
            break;
          case "Tao tai khoan thanh cong":
            
            alert("Tạo tài khoản thành công");
            break;
          case "\"username has been taken already\"":
            alert("Username has been taken already");
            break;
          default:
            alert(message);
            
        }


        if (message == "Tao tai khoan thanh cong")
        {
          window.location.pathname = "/login";
        }
    } catch (error) {
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
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                            <img src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Bach-Khoa-HCMUT.png"
                            alt="login form" style={{width: "50px", height: "50px", marginRight: "20px"}}/>
                          <span className="h1 fw-bold mb-0">Register</span>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input type="text" id="register_username" className="form-control form-control-lg"
                          placeholder='Enter username' />
                        </div>
      
                        <div className="form-outline mb-4 d-inline-block" style = {{width: "48%"}}>
                          <input type="password" id="register_password" className="form-control form-control-lg" 
                          placeholder='Enter password' />
                        </div>

                        <div className="form-outline mb-4 d-inline-block" style = {{width: "48%", marginLeft: "4%"}}>
                          <input type="password" id="register_confirm_password" className="form-control form-control-lg" 
                          placeholder='Confirm password' />
                        </div>

                        <div className="form-outline mb-4 d-inline-block" style = {{width: "48%"}}>
                          <input type="text" id="register_fname" className="form-control form-control-lg"
                          placeholder='Enter First Name' />
                        </div>

                        <div className="form-outline mb-4 d-inline-block" style = {{width: "48%", marginLeft: "4%"}}>
                          <input type="text" id="register_mname" className="form-control form-control-lg"
                          placeholder='Enter Mid Name' />
                        </div>

                        <div className="form-outline mb-4 d-inline-block" style = {{width: "48%"}}>
                          <input type="text" id="register_lname" className="form-control form-control-lg"
                          placeholder='Enter Last Name' />
                        </div>

                        <div className="form-outline mb-4 d-inline-block" style = {{width: "48%", marginLeft: "4%"}}>
                          <input type="date" id="register_bdate" className="form-control form-control-lg"
                          placeholder='Enter BDate' />
                        </div>

                        <div className="form-outline mb-4 d-inline-block" style = {{width: "70%"}}>
                          <input type="email" id="register_email" className="form-control form-control-lg"
                          placeholder='Enter Email' />
                        </div>

                        <Form.Select id="register_gender" className="d-inline-block select-form" aria-label="Gender" style = {{width: "26%", marginLeft: "4%"}}>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                              
                        <div className="pt-1 mb-2">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick = {handleRegister}>Register</button>
                        </div>
                        <p className="mb-0 pb-lg-2 d-inline-block" style={{color: "#393f81"}}>Already have an account? 
                        <a href="/login" style={{color: "#9A616D", textDecoration: "none", marginLeft: "10px"}}>Login here</a></p>

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

export default Register;
