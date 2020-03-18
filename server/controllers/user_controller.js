const Users = require('../models/model_user')
const users = new Users()

exports.viewFile = (req, res) => {
  res.render("page");
}

exports.getUserDataPortion = (req, res, next) => {
  if (!res) return next('Нет ответа сервера');
  if (res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    const portionUsers = users.getUsersPortion(req.params.portionUsers, req.params.countUsers);
    const countOfUsers = users.getAllUsers()
    res.json({
      saccess: true,
      users: portionUsers.listOfUnitedUsers,
      usersStatistics: portionUsers.usersStatistics,
      countOfUsers: countOfUsers.length,
    });
  };
};

exports.getStatisticsByDate = (req, res, next) => {
  if (!res) return next('Нет ответа сервера');
  if (res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    const portionUserStatistic = users.getStatisticsByDate(req.params.dateBefore, req.params.dateAfter, req.params.userId);
    res.json({ saccess: true, portionUserStatistic });
  };
}

