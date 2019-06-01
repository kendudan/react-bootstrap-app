import { SET_MARKS } from '../types/types';

const setMarks = newComment => ({
    type: SET_MARKS,
    payload: newComment
});

export default setMarks;
