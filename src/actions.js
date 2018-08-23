import axios from 'axios';
export default function fetchPostsWithRedux() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        axios.get('../details.json')
            .then(res => {
                if (res.status === 200) {
                    const data = res.data;
                    dispatch(fetchPostsSuccess(data))
                }
                else {
                    dispatch(fetchPostsError())
                }

            })
    }
    function fetchPostsRequest() {
        return {
            type: "FETCH_REQUEST"
        }
    }

    function fetchPostsSuccess(payload) {
        return {
            type: "FETCH_SUCCESS",
            payload
        }
    }

    function fetchPostsError() {
        return {
            type: "FETCH_ERROR"
        }
    }
    function fetchPosts() {
        const URL = "../details.json";
        return fetch(URL, { method: 'GET' })
            .then(response => Promise.all([response, response.json()]));
    }
}


