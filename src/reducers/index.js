export const initialState = {
    foto: {
        fotoName: 'leo1',
        user: 'leo',
        likes: 2,
        comments: 4
    }
};

export default function rootReducer (state = initialState) {
    return state;
}
