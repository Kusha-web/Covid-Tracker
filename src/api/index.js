import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async(country) => {
    let changeUrl = url;
    if(country) {
        changeUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, deaths, recovered, lastUpdate }} = await axios.get(changeUrl);
        const modifiedData = {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }

        return modifiedData;

    } catch (error) {
        console.log(error.message);
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch(error) {
        console.log(error.message);
    }
}

export const countries = async() => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch(error) {
        console.log(error.message);
    }
}