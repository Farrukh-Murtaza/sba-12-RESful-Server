const omdbClient = require("../client/omdbClient");

const searchMovies = async (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.status(400).json({
            error: "Title query parameter is required",
        });
    }

    try {
        const response = await omdbClient.get("/", {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY,
            },
        });

        return res.json(response.data);
    } catch (error) {
        console.error("Error searching movies:", error.message);

        return res.status(500).json({
            error: "Failed to fetch movies from OMDb",
        });
    }
};

const getMovieById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await omdbClient.get("/", {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY,
            },
        });

        return res.json(response.data);
    } catch (error) {
        console.error("Error fetching movie:", error.message);

        return res.status(500).json({
            error: "Failed to fetch movie details from OMDb",
        });
    }
};

module.exports = {
    searchMovies,
    getMovieById,
};