const db = require("./../../configs/mysql/index");

var Customer = function (data) {
  this.Cus_id = data.Cus_id;
  this.username = data.username;
  this.password = data.password;
  this.FName = data.FName;
  this.MName = data.MName;
  this.LName = data.LName;
  this.BDate = data.BDate;
  this.Email = data.Email;
  this.Gender = data.Gender;
};

Customer.login = (data, result) => {
  db.query(
    "select * from ((Customer join Account on Customer.username = Account.username) join Cart on Customer.Cus_id = Cart.Cus_id) where Account.username = ? and Account.password = ?",
    [data.username, data.password],
    (error, user) => {
      if (user.length == 0 || error) {
        result(null);
      } else {
        result(user);
      }
    }
  );
};

Customer.info = (data, result) => {
  
  db.query(`call getCustomerInfo('${data.Cus_id}')`, (error, user) => {
    if (user.length == 0 || error) {
      result(null);
    } else {
      result(user);
    }
  });
};

Customer.update = (data, result) => {
  //console.log(data);
  db.query(
    `call updateCus('${data.FName}', '${data.MName}', 
                    '${data.LName}', '${data.BDate}', '${data.Email}',
                     '${data.username}', '${data.Gender}')`,
    (error, user) => {
      if (error) {
        result(error.sqlMessage);
      } else {
        result("Cập nhật thành công");
      }
    }
  );
};

Customer.register = (data, result) => {
  db.query(
    `call insertCus('${data.FName}', '${data.MName}', 
    '${data.LName}', '${data.BDate}', '${data.Email}',
    '${data.username}', '${data.password}' ,'${data.Gender}')`,
    (error) => {
      if (error) {
        //console.log(error);
        result(error.sqlMessage);
      } else {
        result("Tao tai khoan thanh cong");
      }
    }
  );
};

Customer.delete = (params, data, result) => {
  //console.log(params.id);

  if (params.id != data.username) {
  db.query(`call delete_customer('${params.id}')`, (error) => {
    if (error) {
      console.log(error);
      result(error.sqlMessage);
    } else {
      result("Xóa người dùng thành công");
    }
  });
}
};



module.exports = Customer;
