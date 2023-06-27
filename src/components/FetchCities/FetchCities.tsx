import React, {FC, useEffect, useState} from 'react';
import {fetchCitiesByQuery} from "../../handlers/fetchCitiesByQuery";
import CurrentCitySearchResults, {
    ICurrentCity
} from "../CurrentCitySearch/CurrentCitySearchResults/CurrentCitySearchResults";


type FetchCitiesPropTypes = {
    src: string;
}

const FetchCities: FC<FetchCitiesPropTypes> = ({ src }) => {
    const [citiesList, setCitiesList] = useState<Array<ICurrentCity>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            fetchCitiesByQuery(src).then((data: []) => {
                if (data) setCitiesList(data);
                setIsLoading(false);
            });
        }, 300);

    }, [src]);

    if (isLoading === true) {
        return <>Loading</>
    } else if (!citiesList.length && isLoading === false) return;

    return (
        <CurrentCitySearchResults citiesList={citiesList} />
    );
};

export default FetchCities;
