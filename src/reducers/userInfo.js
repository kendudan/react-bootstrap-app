import { SET_SUBSCRIBES } from '../types/types';

const initialState = {
    user: {
        id: 1,
        name: 'leonardodicaprio',
        numOfPosts: 3435,
        numOfFollowers: 234,
        numOfFollowing: 45,
        userImageURL: '/client/images/leo.jpg',
        fullName: 'Leonardo DiCaprio',
        userDescription: 'Actor and Environmentalist',
        isFollowed: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_SUBSCRIBES:
        return {
            ...state,
            user: action.payload
        };
    default:
        return state;
    }
}
