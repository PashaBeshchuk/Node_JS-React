import instance from "./instance"

const apiUserStatistics = {
    getUserPotrion(countUsers, countPage){
        return instance.get(`users=${countUsers}&count=${countPage}`);
    },
    getStatisticsByDate(filterData){
        return instance.get(`dateBefore=${filterData.from}&dateAfter=${filterData.to}&userId=${filterData.userId}`);
    },
    getStatisticsByName(name, surname) {
        return instance.get(`name=${name}&surname=${surname}`)
    }
}

export default apiUserStatistics;