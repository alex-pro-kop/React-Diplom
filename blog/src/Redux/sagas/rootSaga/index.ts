import { all } from 'redux-saga/effects';

import postsWatcher from '../postsSaga/index'

function* rootSaga() {
    yield all([postsWatcher()]);
};

export default rootSaga;
