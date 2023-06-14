import {useState, useEffect} from 'react';
import {postsClient} from '../../axios/instance/posts';
import LoadingSpinner from '../../global/components/loadingspinner/LoadingSpinner';

const Posts = () => {

    const [error, setError] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    const url = '/posts';

     // https://axios-http.com/docs/res_schema
     const getPosts = async () => {
        try {
            const {data, headers, request, status, statusText, config} = await postsClient.get(`${url}`, {
                responseType: 'json',
                headers: {
                    'Content-Encoding': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                },
                method: 'get',
                timeout: 10000,
                withCredentials: true,
                maxContentLength: 10000,
                maxRedirects: 10,
                responseEncoding: 'utf-8'
            });
            setLoading(true);
            setPosts(data);
            setLoading(false);
            
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(error);
              } else if (error.request) {
                // The request was made but no response was received
                setError(error);
              } else {
                // Something happened in setting up the request that triggered an Error
                setError(error);
              }
        }
    }


    useEffect(() => {
        getPosts();
    }, []);


    const ListPostItem = () => {
        return(
            <>
                {
                    (posts !== null && posts !== undefined) ? 
                        posts.map((post) =>
                            <li key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </li>
                        )
                        : 
                    <>{showNothing}</>
                }
            </>
        );
    };

    const showNothing = () => {
        return (
            <>
                <span></span>
            </>
        )
    };

    const showError = (error) => {
        return (
            <>
                <span>Error {error}</span>
            </>
        )
    };

 /*    multiple ternary operator SyntaxErrorvar 
    yourVar = condition1 ? someValue
    : condition2 ? anotherValue
    : defaultValue; */

    return (
        <>
            {
                error ? showError(error) :
                loading ? <LoadingSpinner /> 
                : (posts !== null && posts !== undefined) ? <><ul>{ListPostItem()}</ul></>
                : <></> 
            }
        </>
    )
}

export default Posts;
