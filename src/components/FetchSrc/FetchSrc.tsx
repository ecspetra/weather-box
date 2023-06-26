import React, { FC, useEffect, useState } from 'react';
import { fetchDataFromAPI } from "../../handlers/fetchDataFromAPI";
import { addCity, City } from "../../redux/CitiesReducer";
import { useAppDispatch } from "../../hooks/hooks";
import WeatherList from "../WeatherList/WeatherList";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import { addForecast } from "../../redux/CurrentForecastReducer";


type FetchSrcPropTypes = {
    src: string;
    isFetchForecast?: boolean;
}

const FetchSrc: FC<FetchSrcPropTypes> = ({ src, isFetchForecast }) => {
    const [isResultExist, setIsResultExist] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const fetchCurrentForecast = async () => {
        const fetchedData = await fetchDataFromAPI(src);
        console.log(fetchedData)
        dispatch(addForecast(fetchedData));
        setIsResultExist(true);
        setIsLoading(false);
    }

    const fetchDefaultCitiesList = async () => {
        const fetchedData = await fetchDataFromAPI(src);
        fetchedData.list.map((item: City) => dispatch(addCity(item)));
        setIsResultExist(true);
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);

        if (isFetchForecast) {
            fetchCurrentForecast();
        } else {
            fetchDefaultCitiesList();
        }

    }, []);

    if (isLoading === true) {
        return <>Loading</>
    } else if (!isResultExist && isLoading === false) return;

    return (
        <>
            {isFetchForecast ? <CurrentForecast /> : <WeatherList />}
        </>
    );
};

export default FetchSrc;
