import { SET_LIKES, SET_POSTS } from '../types/types';

const initialState = {
    posts: [
        {
            id: 1,
            imgUrl: '/client/images/posts/leo1.jpg',
            likes: 10,
            comments: 56,
            commentsList: []
        },
        {
            id: 2,
            imgUrl: '/client/images/posts/leo2.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        },
        {
            id: 3,
            imgUrl: '/client/images/posts/leo3.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        },
        {
            id: 4,
            imgUrl: '/client/images/posts/leo4.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_POSTS:
        return {
            ...state,
            posts: action.payload
        };
    case SET_LIKES:
        return {
            ...state,
            posts: action.payload
        };
    default:
        return state;
    }
}
