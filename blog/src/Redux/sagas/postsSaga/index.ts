import { all, takeLatest, put, call } from "redux-saga/effects";
import { getAllPostsApi, getSelectedPostApi, getPostsCountApi } from "../../api";
import { getPosts,
            setPosts, 
            setLoadingPosts, 
            setSelectedPost, 
            setSelectedPostLoading, 
            setTotalAllPostsCounter,
            setTotalAllPostsCounterLoading } from '../../reducers/posts';

function* getPostsSaga(action: any) {
    yield put(setLoadingPosts(true));
    const { data, status, problem } = yield call(getAllPostsApi, action.payload);

    if(status === 200 && data) {
        yield put(setPosts(data))
    } else {
        console.log('ERROR FETCHING POSTS', problem)
    } 
    
    yield put(setLoadingPosts(false));
};

function* getSelectedPostSaga(action: any) {
    yield put(setSelectedPostLoading(true));
    const { data, status, problem } = yield call(getSelectedPostApi, action.payload);

    if (status === 200 && data) {
        yield put(setSelectedPost(data))
    } else {
        console.log('ERROR FETCHING POST', problem)
    }

    yield put(setSelectedPostLoading(false));
};

function* getTotalAllPostsCounterSaga(action: any) {
    yield put(setTotalAllPostsCounterLoading(true));
    const { data, status, problem } = yield call(getPostsCountApi, action.payload);

    if (status === 200 && data) {
        yield put(setTotalAllPostsCounter(data))
    } else {
        console.log('ERROR FETCHING POSTS COUNT', problem)
    }

    yield put(setTotalAllPostsCounterLoading(false));
};

export default function* postsWatcher() {
    yield all([
        takeLatest(getPosts, getPostsSaga),
        takeLatest(setSelectedPost, getSelectedPostSaga),
        takeLatest(setTotalAllPostsCounter, getTotalAllPostsCounterSaga),
    ]);
};

