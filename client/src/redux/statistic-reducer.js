import apiUserStatistics from '../api/api-user-statistics';

const UPDATE_USERS = 'UPDATE-USERS';
const UPDATE_COUNT_ALL_USERS = 'UPDATE-COUNT-ALL-USERS';
const UPDATE_USER_STATISTICS = 'UPDATE-USER-STATISTICS';
const UPDATE_COUNT_PAGE = 'UPDATE-COUNT-PAGE';
const UPDATE_STATUS_LOAD = 'UPDATE-STATUS-LOAD';
const UPDATE_PERSONAL_DATA = 'UPDATE-PERSONAL-DATA';
const UPDATE_STATISTICS_BY_DATE = 'UPDATE-STATISTICS-BY-DATE';
const UPDATE_FULL_NAME = 'UPDATE-FULL-NAME';
const UPDATE_COUNT_USERS = 'UPDATE-COUNT-USERS';


const initialStatistic = {
    users:null,
    countUsers: 10,
    countPage: 1,
    paginationSize: 5,
    countAllUsers: null,
    usersStatistics: [],
    load: true,
    personalData: null,
    statisticsByDate: null,
    months: ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ],
    fullName: {},

}

const statisticReducer = (state = initialStatistic, action) => {
    switch (action.type){
        case UPDATE_USERS:
            return { ...state, users: action.users };
        case UPDATE_COUNT_ALL_USERS:
            return { ...state, countAllUsers: action.countAllUsers };
        case UPDATE_USER_STATISTICS:
            return { ...state, usersStatistics: action.userStatistics };
        case UPDATE_COUNT_PAGE:
            return { ...state,  countPage: action.numberPage };
        case UPDATE_STATUS_LOAD:
            return { ...state, load: action.status };
        case UPDATE_PERSONAL_DATA:
            return { ...state, personalData: action.personalData };
        case UPDATE_STATISTICS_BY_DATE: 
            return { ...state, statisticsByDate: action.statisticsByDate };
        case UPDATE_FULL_NAME:
            return { ...state, fullName: action.fullName };
        case UPDATE_COUNT_USERS:
            return  { ...state, countUsers: action.countUsers };
        default:
            return state;    
    }
}

const updateUsersAC = (users) => ({type: UPDATE_USERS, users});
const updateCountAllUsersAC = (countAllUsers) => ({type: UPDATE_COUNT_ALL_USERS, countAllUsers});
const updateUserStatisticsAC = (userStatistics) => ({type: UPDATE_USER_STATISTICS, userStatistics});
const updateCountPageAC = (numberPage) => ({type: UPDATE_COUNT_PAGE, numberPage});
const updateStatusLoadAC = (status) => ({type: UPDATE_STATUS_LOAD, status});
const updateStatisticsByDateAC = (statisticsByDate) => ({type: UPDATE_STATISTICS_BY_DATE, statisticsByDate});
export const updatePersonalDataAC = (personalData) => ({type: UPDATE_PERSONAL_DATA, personalData});
export const updateFullNameAC = (fullName) => ({type: UPDATE_FULL_NAME, fullName});
export const updateCountUsers = (countUsers) => ({type: UPDATE_COUNT_USERS, countUsers});

export const getPortionUsersThunk = (countUsers, countPage) => {
    return async (dispatch) => {
        const statistics = await apiUserStatistics.getUserPotrion(countUsers, countPage);
        dispatch(updateUsersAC(statistics.data.users));
        dispatch(updateCountAllUsersAC(statistics.data.countOfUsers));
        dispatch(updateUserStatisticsAC(statistics.data.usersStatistics));
        dispatch(updateCountPageAC(countPage));
        dispatch(updateStatusLoadAC(false));
    }
}

export const getStatisticsByDateThunk = (filterData) => {
    return async (dispatch) => {
        const statisticsByDate = await apiUserStatistics.getStatisticsByDate(filterData);
        dispatch(updateStatisticsByDateAC(statisticsByDate.data.portionUserStatistic));
    }
}

export default statisticReducer;

