const jwt = require("jsonwebtoken");
const Customer = require("./../../models/customer/index");

exports.login = (req, res) => {
  Customer.login(req.body, (result) => {
    if (result === null) {
      res.status(500).send("Tài khoản không tồn tại hoặc mật khẩu sai!");
    } else {
      const token = jwt.sign(
        {
          username: result[0].username,
          Cus_id: result[0].Cus_id,
          Cart_id: result[0].Cart_id
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      const user = {
        id: result[0].Cus_id,
        username: result[0].username,
        FName: result[0].FName,
        MName: result[0].MName,
        LName: result[0].LName,
        BDate: result[0].BDate,
        Email: result[0].Email,
        Age: result[0].Age,
        Gender: result[0].Gender,
      };

      res.json({
        message: "Đăng nhập thành công!",
        token,
        user,
      });
    }
  });
};

exports.info = (req, res) => {
  Customer.info(req.user, (result) => {
    if (result === null) {
    } else {
      res.send(result[0]);
    }
  });
};

exports.update = (req, res) => {
  Customer.update(req.body, (result) => {
    //console.log("result", result);
    res.send(result);
  });
};

exports.register = (req, res) => {
  Customer.register(req.body, (result) => {
      res.send(result);
  });
};

exports.delete = (req, res) => {
  
  Customer.delete(req.params, req.body, (result) => {
    console.log(req.user);
    console.log(req.params.id);
    if (req.user.username != req.params.id) {
        res.send(result);
    } 
    else {
      res.send("Không thể cập nhật người dùng này!");
    }
  });
};

exports.TotalPrice = (req, res) => {
  Customer.TotalPrice(req.body, (result) => {
        res.send(result);
      });
};
