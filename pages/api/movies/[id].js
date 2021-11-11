export default async function userHandler(req, res) {
    const {
        query: {id},
    } = req

    const locale = req.headers["accept-language"] || "en";
    const movie = await fetch(`${process.env.API_TEST_URL}/films/${id}`).then(r => r.json())
    return res.status(200).json({
        language: locale,
        movie: { title: movie.title, description: movie.description}
    })
}

