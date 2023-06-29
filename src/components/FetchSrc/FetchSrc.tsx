import React, {FC, JSX, useEffect, useState, Dispatch} from 'react';
import { useAppDispatch } from "../../hooks/hooks";
import {Action} from "redux";
import {ICurrentCity} from "../CurrentCitySearch/CurrentCitySearchResults/CurrentCitySearchResults";


type FetchSrcPropTypes = {
    city: ICurrentCity | string;
    children: JSX.Element | JSX.Element[];
    fetchFunction: (city: ICurrentCity | string, dispatch: Dispatch<Action>) => Promise<object>;
}

const FetchSrc: FC<FetchSrcPropTypes> = ({ city, children, fetchFunction }) => {
    const [isResultExist, setIsResultExist] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsLoading(true);

        fetchFunction(city, dispatch).then((data: object) => {
            if (data) setIsResultExist(true);
            setIsLoading(false);
        });

    }, []);

    if (isLoading === true) {
        return <>Loading</>
    } else if (!isResultExist && isLoading === false) return null;

    return (
        <>
            {children}
        </>
    );
};

export default FetchSrc;
