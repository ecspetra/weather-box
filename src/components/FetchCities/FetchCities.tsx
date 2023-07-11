import React, {FC, useEffect, useState} from 'react';
import {fetchCitiesByQuery} from "../../handlers/fetchCitiesByQuery";
import CurrentCitySearchResults from "../CurrentCitySearch/CurrentCitySearchResults/CurrentCitySearchResults";
import {ICurrentCity} from "../../types";

type FetchCitiesPropTypes = {
    src: string;
}

const FetchCities: FC<FetchCitiesPropTypes> = ({ src, ...rest }) => {
    const [citiesList, setCitiesList] = useState<Array<ICurrentCity>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (src !== '') {
            setIsLoading(true);

            fetchCitiesByQuery(src).then((data: Array<ICurrentCity>) => {
                if (data) setCitiesList(data);
                setIsLoading(false);
            });
        }
    }, [src]);

    if (src === '') return null;

    return (
        <CurrentCitySearchResults citiesList={citiesList} isLoading={isLoading} setIsLoading={setIsLoading} {...rest} />
    );
};

export default FetchCities;
