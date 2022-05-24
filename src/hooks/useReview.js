import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('https://boiling-badlands-76374.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return [reviews, setReviews]
}
export default useReview