
export const initialState = {
    posts: {
        id: 0,
        imgUrl: '',
        likes: 0,
        comments: []
    },
    marks: {
        id: 0,
        imgUrl: '',
        likes: 0,
        comments: []
    }
};

export default function rootReducer (state = initialState) {
    return state;
}
