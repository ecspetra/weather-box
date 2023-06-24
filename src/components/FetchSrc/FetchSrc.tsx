import React, { FC, useEffect, useState } from 'react';
import { fetchDataFromAPI } from "../../handlers/fetchDataFromAPI";

type FetchSrcPropTypes = {
    src: string;
    children: JSX.Element|JSX.Element[];
}

const FetchSrc: FC<FetchSrcPropTypes> = ({ src, children }) => {
    const [result, setResult] = useState<any>();
    const [error, setError] = useState<any>();

    useEffect(() => {
        (async () => {
            const fetchedData = await fetchDataFromAPI(src);
            setResult(fetchedData);
        }) ();
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default FetchSrc;
