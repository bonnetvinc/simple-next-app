import useSWR from "swr";

const fetcher = async (url , locale) => {
    console.info(url)
    return await fetch(url, {
        headers: { "Accept-Language": locale },
    }).then( response => response.json());
};

export default function useMovies( locale) {
    return useSWR(["/api/movies", locale, "en"], fetcher);
}
