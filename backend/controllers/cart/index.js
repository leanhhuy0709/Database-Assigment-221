const Cart = require("./../../models/cart/index");

exports.TotalPrice = (req, res) => {
  Cart.TotalPrice(req.user, (result) => {
    console.log(result);
    
    if (typeof result === "string") {
      res.status(500).send(result);
    } else {
      res.send({total: result});
    }
  });
};

exports.getFood = (req, res) => {
  //console.log(req.user)
  Cart.getFood(req.user, (result) => {
    if (typeof result === "string") {
      res.status(500).send(result);
    } else {
      res.send(result);
    }
  });
};

exports.getCombo = (req, res) => {
  Cart.getCombo(req.user, (result) => {
    if (typeof result === "string") {
      res.status(500).send(result);
    } else {
      res.send(result);
    }
  });
};

exports.deleteFood = (req, res) => {
  Cart.deleteFood(req.params, req.body, (result) => {
    if (req.body.Cart_id == req.params.id) {
      if (typeof result === "string") {
        res.status(500).send(result);
      } else {
        res.send(result);
      }
    } else {
      res.status(400).send("Không thể xóa món này!");
    }
  });
};

exports.deleteCombo = (req, res) => {
  Cart.deleteCombo(req.params, req.body, (result) => {
    if (req.body.Cart_id == req.params.id) {
      if (typeof result === "string") {
        res.status(500).send(result);
      } else {
        res.send(result);
      }
    } else {
      res.status(400).send("Không thể xóa món này!");
    }
  });
};

exports.deleteAllCart = (req, res) => {
  Cart.deleteAllCart(req.params, req.body, (result) => {
    if (req.body.Cart_id == req.params.id) {
      if (typeof result === "string") {
        res.status(500).send(result);
      } else {
        res.send(result);
      }
    } else {
      res.status(400).send("Không thể xóa món này!");
    }
  });
};
