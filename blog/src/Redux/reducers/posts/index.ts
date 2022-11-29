import { PostDescription } from './../../../Types/PostDescription';
import { RootState } from './../../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    postsList: any[];
    isPostsLoading: boolean;
    selectedPost: PostDescription | null;
    isSelectedPostLoading: boolean;
    totalAllPostsCounter: number;
    isTotalAllPostsCounterLoading: boolean;
};

const initialState: InitialStateType = {
    postsList: [],
    isPostsLoading: false,
    selectedPost: null,
    isSelectedPostLoading: false,
    totalAllPostsCounter: 0,
    isTotalAllPostsCounterLoading: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        getPosts: (state: any, action:  PayloadAction<any>) => {},
        setLoadingPosts:(state: any, action: PayloadAction<boolean>) => {
            state.isPostsLoading = action.payload;
        },
        setPosts: (state: any, action: PayloadAction<any[]>) => {
            state.postsList = action.payload;
        },
        setSelectedPost: (state: any, action: any) => {
            state.selectedPost = action.payload;
        },
        setSelectedPostLoading: (state: any, action: PayloadAction<boolean>) => {
            state.isSelectedPostLoading = action.payload;
        },
        setTotalAllPostsCounter: (state: any, action: any) => {
            state.totalAllPostsCounter = action.payload;
        },
        setTotalAllPostsCounterLoading: (state: any, action: any) => {
            state.isTotalAllPostsCounterLoading = action.payload;
        },
    },
});

export const { 
    getPosts, 
    setLoadingPosts, 
    setPosts, 
    setSelectedPost, 
    setSelectedPostLoading ,
    setTotalAllPostsCounter,
    setTotalAllPostsCounterLoading,
} = postsSlice.actions;

const reducer = postsSlice.reducer;

export default reducer;

export const PostsSelectors = {
    getPosts: (state: RootState) => state.posts.postsList,
    getPostsLoading: (state: RootState) => state.posts.isPostsLoading,
    getSelectedPost: (state: RootState) => state.posts.selectedPost,
    getSelectedPostLoading: (state: RootState) => state.posts.isSelectedPostLoading,
    getTotalAllPostsCounter: (state: RootState) => state.posts.totalAllPostsCounter,
    getTotalAllPostsCounterLoading: (state: RootState) => state.posts.isTotalAllPostsCounterLoading,
};

