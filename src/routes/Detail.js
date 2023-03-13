import { useEffect, useState } from "react";
import { useParams } from  "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const arrayA = ["array0", "array1", "array2", "array3", "array4", "array5"]
    const arrayB = ["가", 0, "나", 1]

    const arrays = [...arrayA, ...arrayB];

    console.log(`arrays : ${arrays}`);

    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();

        console.log(json);
        setMovieDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return(
        <div>
            {loading ? (
                <p>wait...</p>
            ) : (
                <>
                    <div>
                        <img src={movieDetail.large_cover_image} alt={movieDetail.title}/>
                    </div>
                    <strong>{movieDetail.title}</strong>
                    <div>
                        <span>{movieDetail.like_count}</span>
                        <span>{movieDetail.download_count}</span>
                    </div>
                    <div>
                        <p>{movieDetail.description_full}</p>
                    </div>
                </>
            )}
        </div>
        
    )
}
export default Detail;