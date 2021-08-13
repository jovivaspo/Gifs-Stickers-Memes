const API_KEY='36JNJOj088JRnsPw3mlago2mDzHOqGS3'
const API_URL_GIFS='https://api.giphy.com/v1/gifs'
const CATEGORY_TREDING=`${API_URL_GIFS}/trending`
const N_OBJECT='30'
const URL_TREDING=`${CATEGORY_TREDING}?api_key=${API_KEY}&limit=${30}&rating=g`

const URL_SERCH_GIFS=`${API_URL_GIFS}/search`

const API_URL_STICKERS="https://api.giphy.com/v1/stickers"
const CATEGORY_TREDING_STICKERS=`${API_URL_STICKERS}/trending`
const URL_TREDING_STICKERS=`${CATEGORY_TREDING_STICKERS}?api_key=${API_KEY}&limit=${30}&rating=g`

//https://api.giphy.com/v1/gifs/trending?api_key=36JNJOj088JRnsPw3mlago2mDzHOqGS3&limit=25&rating=g
//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
export default{
    API_KEY,
    API_URL_GIFS,
    CATEGORY_TREDING,
    N_OBJECT,
    URL_TREDING,
    URL_SERCH_GIFS,
    API_URL_STICKERS,
    CATEGORY_TREDING_STICKERS,
    URL_TREDING_STICKERS,
}