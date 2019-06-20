import { SET_LIKES_POST, SET_POSTS } from '../types/types';

const initialState = {
    posts: [
        {
            id: 1,
            imgUrl: '/client/images/posts/leo1.jpg',
            likes: 10,
            isLiked: false,
            comments: 5,
            commentsList: [
                {
                    commentId: 1,
                    commentText: 'Первый комммент.@natgeo: Photo by Paul Nicklen @PaulNicklen | An Antarctic fur seal relaxes atop a'
                },
                {
                    commentId: 2,
                    commentText: 'Второй комммент.Уникальность сайта\nУникальность документа\nРегулярная проверка\n +'
                },
                {
                    commentId: 3,
                    commentText: 'Третий комммент. s;lgkhas;ljgha;g n;gjklag jgchvcbvc hcgc'
                },
                {
                    commentId: 4,
                    commentText: 'Четвертый комммент. ;jf;laskhdfn;lag;ja gh;ajgh;l jhvfjg ufvhg'
                },
                {
                    commentId: 5,
                    commentText: 'Пятый комммент. ;jf;laskhdfn;lag;ja gh;ajgh;l jhvfjg ufvhg'
                }
            ]
        },
        {
            id: 2,
            imgUrl: '/client/images/posts/leo2.jpg',
            likes: 0,
            isLiked: false,
            comments: 0,
            commentsList: []
        },
        {
            id: 3,
            imgUrl: '/client/images/posts/leo3.jpg',
            likes: 0,
            isLiked: false,
            comments: 0,
            commentsList: []
        },
        {
            id: 4,
            imgUrl: '/client/images/posts/leo4.jpg',
            likes: 0,
            isLiked: false,
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
    case SET_LIKES_POST:
        return {
            ...state,
            posts: action.payload
        };
    default:
        return state;
    }
}
