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
    const fullStatisticsOfUsers = this.allUsersAddMissingDates(usersStatistics);
    this.setActualStatistics(fullStatisticsOfUsers);
    const listOfUnitedUsers = this.combineUsersData(listUsers, generalUserStatistics);
    return { listOfUnitedUsers, fullStatisticsOfUsers };
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
  // Get statistic by date
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

  getDaysInAMonth(year, month) {
    const dateFirst = new Date(year, month, 1);
    const dateSecond = new Date(year, Number(month)+1, 1);        
    return Math.round((dateSecond-dateFirst)/1000/3600/24);
  }

  addMissingDates (arrUsersStatistics) {
    const arrOfDays = arrUsersStatistics[0].date.split('-');
    const actualYear = arrOfDays[0];
    const actualMonth = arrOfDays[1];
    const daysInAMonth = this.getDaysInAMonth(arrOfDays[0], arrOfDays[1])
    const fullArrUsersStatistics = arrUsersStatistics.slice();
    let newFullArrUsersStatistics;
    for (let i = 1; i <= daysInAMonth; i++) {
        let dayIsPresent = true;
        let actualDay = i;
        if(i < 10){
            actualDay=`0${i}`;
        }
        for ( let j = 0; j < arrUsersStatistics.length; j++ ) {
            const actualArrOfDays = arrUsersStatistics[j].date.split('-');
            if(Number(actualDay) === Number(actualArrOfDays[2])) {
                dayIsPresent = false;
                break;
            } 
        }
        if(dayIsPresent) {
            const objDataUser = {
                user_id: arrUsersStatistics[0].user_id, 
                date: `${actualYear}-${actualMonth}-${actualDay}`, 
                page_views: 0, 
                clicks: 0
            }
            fullArrUsersStatistics.unshift(objDataUser);
        }   
    }
    newFullArrUsersStatistics = fullArrUsersStatistics.sort((prev, next) => {
        return Number(prev.date.split('-')[2]) - Number(next.date.split('-')[2]);
    })
    return newFullArrUsersStatistics;
  }
  
  allUsersAddMissingDates(listUsers) {
    const newUserStatisticsList = [];
    for ( let i = 0; i < listUsers.length; i++){
      newUserStatisticsList.push(this.addMissingDates(listUsers[i]));
    }
    return newUserStatisticsList;
  }

  getUserAllDataByName(name, surname) {
    const userData = this.getUserDataByName(name, surname);
    const userStatistic = [];
    userStatistic.push(this.getUserStatisticByName(userData.id));
    const fullUserStatistic = this.allUsersAddMissingDates(userStatistic);
    return fullUserStatistic;
  }

  getUserDataByName(name, surname) {
    const allUsers = this.getAllUsers();
    for ( let i = 0; i < allUsers.length; i++ ) {
      if(name === allUsers[i].first_name && surname === allUsers[i].last_name) {
        return allUsers[i]
      }
    }  
  }

  getUserStatisticByName (id) {
    const allUsersStatistics = this.getStatisticAllUsers();
    const userStatistic = [];
    for ( let i = 0; i < allUsersStatistics.length; i++ ) {
      if(id === allUsersStatistics[i].user_id) {
        userStatistic.push(allUsersStatistics[i]);
      }
    }
    return userStatistic
  }
}

module.exports = Users;

