import React, {FC, JSX, useEffect, useState, Dispatch, SetStateAction} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Action} from "redux";
import {ICurrentCity} from "../../types";
import Loader from "../Loader/Loader";
import {forecastSelector} from "../../redux/CurrentForecastReducer";


type FetchSrcPropTypes = {
    city: ICurrentCity | string;
    children: JSX.Element | JSX.Element[];
    fetchFunction: (city: ICurrentCity | string, dispatch: Dispatch<Action>) => Promise<object>;
}

const FetchSrc: FC<FetchSrcPropTypes> = ({ city, children, fetchFunction }) => {
    const [isResultExist, setIsResultExist] = useState<boolean>();
    const dispatch = useAppDispatch();
    const selectedForecast = useAppSelector(forecastSelector);
    const isDataLoading = selectedForecast && selectedForecast.isLoading;

    useEffect(() => {
        fetchFunction(city, dispatch).then((data: object) => {
            if (data) setIsResultExist(true);
        });
    }, []);

    if (isDataLoading === true) {
        return <Loader />
    } else if (!isResultExist && isDataLoading === false) return <div className="app__current-forecast-empty"><span className="app__current-forecast-empty-text">No results found</span></div>;

    return (
        <>
            {children}
        </>
    );
};

export default FetchSrc;
