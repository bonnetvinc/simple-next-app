export default async function handler(req, res) {

    const locale = req.headers["accept-language"] || "en";
    const movies = await fetch(`${process.env.API_TEST_URL}/films`).then(r => r.json())
    const converted = movies.map( (movie) => {return {id: movie.id, title: movie.title}})
    return res.status(200).json({language: locale, movies: converted})

}
