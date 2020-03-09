const Users = require('../models/model_user')

exports.viewFile = (req, res) => {
  res.render("page");
}

exports.getUserDataPortion = (req, res, next) => {
  if(!req) return next('Неверный запрос на сервера');
  if(!res) return next('Нет ответа сервера');
  if(res) {
    const allUsers = Users.getAllUsers();
    const portionUsers = Users.getUsersPortion(allUsers, req.params.portionUsers, req.params.countUsers);
    res.json({saccess: true, value: portionUsers});
  };
};

exports.getUserSelectionByDate = (req, res, next) => {
  if(!req) return next('Неверный запрос на сервера');
  if(!res) return next('Нет ответа сервера');
  if(res) {
    const allUsersStatistic = Users.getStatisticAllUsers();
    const portionUsers = Users.userSelectionByDate(allUsersStatistic, req.params.dateBefore, req.params.dateAfter);
    res.json({saccess: true, value: portionUsers});
  };
}

exports.getUserById = (req, res, next) => {
  if(!req) return next('Неверный запрос на сервера');
  if(!res) return next('Нет ответа сервера');
  if(res) {
    const allUsers = Users.getAllUsers();
    const validUser = Users.validUser(allUsers, req.params.userId);
    if(validUser){
      const user = Users.getUserId(allUsers, req.params.userId)
      res.json({saccess: true, value: user});
    } else {
      return next('Пользователь не найден'); 
    }
  }
}
