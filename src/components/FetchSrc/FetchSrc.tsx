import React, { FC, useEffect, useState } from 'react';
import { fetchDataFromAPI } from "../../handlers/fetchDataFromAPI";
import { addCity, ICity } from "../../redux/CitiesReducer";
import { useAppDispatch } from "../../hooks/hooks";
import WeatherList from "../WeatherList/WeatherList";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import { addForecast, ICurrentForecastList } from "../../redux/CurrentForecastReducer";


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
        const newForecast = {
            city: {
                id: fetchedData.city.id,
                name: fetchedData.city.name,
                country: fetchedData.city.country,
                sunrise: fetchedData.city.sunrise,
                sunset: fetchedData.city.sunset,
            },
            list: fetchedData.list.map((item: ICurrentForecastList) => {
                return {
                    dt: item.dt,
                    main: {
                        feels_like: item.main.feels_like,
                        humidity: item.main.humidity,
                        pressure: item.main.pressure,
                        temp: item.main.temp,
                    },
                    visibility: item.visibility,
                    weather: [
                        {
                            id: item.weather[0].id,
                            description: item.weather[0].description,
                        },
                    ],
                    wind: {
                        speed: item.wind.speed,
                    }
                }
            })
        }

        dispatch(addForecast(newForecast));
        setIsResultExist(true);
        setIsLoading(false);
    }

    const fetchDefaultCitiesList = async () => {
        const fetchedData = await fetchDataFromAPI(src);

        fetchedData.list.map((item: ICity) => {
            const newCity = {
                id: item.id,
                name: item.name,
                main: {
                    feels_like: item.main.feels_like,
                    humidity: item.main.humidity,
                    pressure: item.main.pressure,
                    temp: item.main.temp,
                },
                sys: {
                    country: item.sys.country,
                    sunrise: item.sys.sunrise,
                    sunset: item.sys.sunset,
                },
                visibility: item.visibility,
                weather: [
                    {
                        id: item.weather[0].id,
                        description: item.weather[0].description,
                    },
                ],
                wind: {
                    speed: item.wind.speed,
                },
            }

            dispatch(addCity(newCity));
        });

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
