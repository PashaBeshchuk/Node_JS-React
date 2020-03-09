const fs = require('fs')

Users = {
  getAllUsers:() => {
    const dataJson = fs.readFileSync('./data-users/users.json','utf-8');
    const users = JSON.parse(dataJson);
    return users;
  },
  getStatisticAllUsers:() => {
    const dataJson = fs.readFileSync('./data-users/users_statistic.json','utf-8');
    const usersStatistic = JSON.parse(dataJson);
    return usersStatistic;
  },
  // User availability check
  validUser: (allUsers, requiredUserId) => {
    return allUsers.some(elem => elem.id === Number(requiredUserId));
  },
  // Get get by id
  getUserId: ( allUsers, requiredUserId ) => {
    return allUsers.find(user => user.id === Number(requiredUserId))
  },
  // Get some users
  getUsersPortion: (allUsers, pageSize, portionOfUsers) => { 
    const endUser = (pageSize * portionOfUsers);
    const startUser = endUser - pageSize;
    const listUsers = [];
    for (let i = startUser; i < endUser; i++) {
      listUsers.push(allUsers[i]);
    }
    return listUsers;
  },
  // Get user by date
  userSelectionByDate: (allUsers, startDate, endDate) => {
    const listOfUsersByDate = allUsers.filter(users => {
      if(users.date >= startDate && users.date <= endDate) {
        return users.date;
      }
    });
    return listOfUsersByDate;
  }
}

module.exports = Users;