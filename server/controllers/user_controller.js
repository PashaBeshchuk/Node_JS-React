const Users = require('../models/model_user')
const users = new Users()

exports.viewFile = (req, res) => {
  res.render("page");
}

exports.getUserDataPortion = (req, res, next) => {
  if (!res) return next('Server is not responding');
  if (res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    const portionUsers = users.getUsersPortion(req.params.portionUsers, req.params.countUsers);
    const countOfUsers = users.getAllUsers();
    res.json({
      saccess: true,
      users: portionUsers.listOfUnitedUsers,
      usersStatistics: portionUsers.fullStatisticsOfUsers,
      countOfUsers: countOfUsers.length,
    });
  };
};

exports.getStatisticsByDate = (req, res, next) => {
  if (!res) return next('Server is not responding');
  if (res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    const portionUserStatistic = users.getStatisticsByDate(req.params.dateBefore, req.params.dateAfter, req.params.userId);
    res.json({ saccess: true, portionUserStatistic });
  };
}

exports.getStatisticsByName = (req, res, next) => {
  if(!res) return next('Server is not responding');
  if(res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    const arrUserStatistic = users.getUserAllDataByName(req.params.name, req.params.surname);
    const userStatistic = arrUserStatistic[0]
    res.json({ saccess: true, userStatistic });
  };
}
