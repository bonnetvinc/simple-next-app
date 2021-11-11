import React from 'react';

import { useRouter } from 'next/router';
import useMovieDetail from "../../hooks/useMovieDetail";

const Movie= () => {

    const  {locale, query} = useRouter();
    const { id } = query;

    const { data } = useMovieDetail(id, locale)

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Movie;
