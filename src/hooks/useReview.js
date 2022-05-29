import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('https://secret-atoll-95984.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return [reviews, setReviews]
}
export default useReview