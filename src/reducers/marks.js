import { SET_MARKS } from '../types/types';

const initialState = {
    marks: [
        {
            id: 1,
            imgUrl: '/client/images/marks/leo1.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        },
        {
            id: 2,
            imgUrl: '/client/images/marks/leo2.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        },
        {
            id: 3,
            imgUrl: '/client/images/marks/leo3.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        },
        {
            id: 4,
            imgUrl: '/client/images/marks/leo4.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        },
        {
            id: 4,
            imgUrl: '/client/images/marks/leo5.jpg',
            likes: 0,
            comments: 0,
            commentsList: []
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_MARKS:
        return {
            ...state,
            marks: action.payload
        };
    default:
        return state;
    }
}
