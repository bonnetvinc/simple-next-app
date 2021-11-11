import { useRouter } from "next/router";
import Link from "next/link";
import { useIntl } from "react-intl";
import useMovies from "../hooks/useMovies";
import {useEffect} from "react";


export default function Home() {
    const { locale } = useRouter();
    const { data } = useMovies(locale);

    const { formatMessage: f } = useIntl();
    return (
        <div>
            <h1>{f({ id: "name" })}</h1>
            <ul>
                {data && data.movies.map((movie)=> (
                    <li key={movie.id}>
                     <Link key={movie.id} href={`/detail/${movie.id}`} locale={locale} >
                        <a>{movie.title}</a>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
