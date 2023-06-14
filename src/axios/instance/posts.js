import axios from 'axios';
import { baseURL } from '../../global/constants/url';

const postsClient = axios.create({
    baseURL: baseURL,
})

export {postsClient};