import { SET_POSTS } from '../types/types';

const setPosts = newComment => ({
    type: SET_POSTS,
    payload: newComment
});

export default setPosts;
