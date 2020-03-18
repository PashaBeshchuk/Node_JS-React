const fs = require('fs')

class Users {
  constructor() {
    this.actualUsers = null;
    this.actualStatistics = null;
  }
  getAllUsers() {
    const dataJson = fs.readFileSync('./data-users/users.json', 'utf-8');
    const users = JSON.parse(dataJson);
    return users;
  }
  getStatisticAllUsers() {
    const dataJson = fs.readFileSync('./data-users/users_statistic.json', 'utf-8');
    const usersStatistics = JSON.parse(dataJson);
    return usersStatistics;
  }
  setActualUsers(users) {
    this.actualUsers = users;
  }
  getActualUsers() {
    return this.actualUsers;
  }
  setActualStatistics(statistics) {
    this.actualStatistics = statistics;
  }
  getActualStatistics() {
    return this.actualStatistics;
  }
  // User availability check
  validUser(requiredUserId) {
    const allUsers = this.getAllUsers();
    return allUsers.some(elem => elem.id === Number(requiredUserId));
  }
  // Get some users
  getUsersPortion(pageSize, portionOfUsers) {
    const allUsers = this.getAllUsers()
    const endUser = (pageSize * portionOfUsers);
    const startUser = endUser - pageSize;
    const listUsers = [];
    for (let i = startUser; i < endUser; i++) {
      listUsers.push(allUsers[i]);
    }
    this.setActualUsers(listUsers);
    const usersStatistics = this.getUsersStatisticsPortion(listUsers);
    const generalUserStatistics = this.getGeneralUserStatistics(usersStatistics);
    this.setActualStatistics(usersStatistics)
    const listOfUnitedUsers = this.combineUsersData(listUsers, generalUserStatistics);
    return { listOfUnitedUsers, usersStatistics };
  }

  getUsersStatisticsPortion(listUsers) {
    const usersStatistics = this.getStatisticAllUsers();
    const listUsersStatistics = [];
    for (let i = 0; i < listUsers.length; i++) {
      const arrUsersStatistics = [];
      for (let j = 0; j < usersStatistics.length; j++) {  
        if (listUsers[i].id === usersStatistics[j].user_id) {
          arrUsersStatistics.push(usersStatistics[j]);
        }
      }
      if(arrUsersStatistics.length > 0 ){
        listUsersStatistics.push(arrUsersStatistics);
      }
    }
    return listUsersStatistics;
  }

  getGeneralUserStatistics(usersStatistics) {
    const generalUserStatistics = [];
    for ( let i = 0; i < usersStatistics.length; i++ ) {
      const obj = { page_views: 0, clicks: 0};
      for ( let j = 0; j < usersStatistics[i].length; j++ ) {
        obj.page_views += usersStatistics[i][j].page_views;
        obj.clicks += usersStatistics[i][j].clicks;
        
      }
      generalUserStatistics.push(obj);
    }
    return generalUserStatistics;
  }
  // Get statistic getStatisticsByDate
  getStatisticsByDate(startDate, endDate, userId) {
    const validUser = this.validUser(userId);
    if(!validUser) return 'User is not found';
    const usersStatistics = this.getActualStatistics();
    const userStatistic = [];
    for ( let i = 0; i < usersStatistics.length; i++) {
      for ( let j = 0; j < usersStatistics[i].length; j++ ){
        if(Number(userId) === usersStatistics[i][j].user_id) {
          userStatistic.push(usersStatistics[i][j]);
        }
      }
    }
    const listOfUsersByDate = userStatistic.filter(users => {
      if (users.date >= startDate && users.date <= endDate) {
        return users.date;
      }
    });
    return listOfUsersByDate;
  }

  combineUsersData(users, usersStatistics) {
    const listOfUnitedUsers = [];
    for (let i = 0; i < users.length; i++) {    
      listOfUnitedUsers.push({...users[i], ...usersStatistics[i]});
    }
    return listOfUnitedUsers;
  }
}




module.exports = Users;