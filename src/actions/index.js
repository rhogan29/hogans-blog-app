// bring in axios
import axios from 'axios';
// the function of this action creator is to fetch a list of posts 
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=STEELSWORD1234';

export function fetchPosts() {
    // create the request for posts, pass it to payload
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}