import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, PostsSelectors, setSelectedPost, setTotalAllPostsCounter } from '../../Redux/reducers/posts';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import PostCard from '../../Components/PostCard';
import Loader from '../../Components/Loader';
import Pagination from '../../Components/Pagination';

import classNames from 'classnames';
import { useThemeContext, Theme } from '../../Context/themeModeContext';
import { PostDescription } from '../../Types/PostDescription';

import './Main.css';
import { useParams } from 'react-router-dom';

const Main: FC = ({ }) => {

    const postsList = useSelector(PostsSelectors.getPosts);
    const post = useSelector(PostsSelectors.getSelectedPost);
    const isPostsLoading = useSelector(PostsSelectors.getPostsLoading);
    const totalCount = useSelector(PostsSelectors.getTotalAllPostsCounter);

    const [_limit, setLimit] = useState(12);
    const [page, setPage] = useState(1);
    const [pageSelected, setPageSelected] = useState(page);

    const pagesCount = Math.ceil(totalCount /_limit);
    
    const dispatch = useDispatch();
    const { id } = useParams<{id:string}>();

    useEffect(() => {
        const _start = (page - 1) * _limit;
        dispatch(getPosts({_limit, _start}));
    }, [_limit, page, pageSelected])

    useEffect(() => {
        dispatch(setSelectedPost(id));
    }, [])

    useEffect(() => {
        dispatch(setTotalAllPostsCounter({}));
    }, [])

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    const onPrevClick = () => setPage(page - 1);
    const onNextClick = () => setPage(page + 1);
    const onPageClick = () => {
        setPageSelected(page + pageSelected);
        setPage(pageSelected);
    }

    return (
        <>
        <Header />
        {isPostsLoading ? 
        (<div className={classNames({
            ['loaderLight']: isThemeLight,
            ['loaderDark']: !isThemeLight,
            })} ><Loader /></div>) 
        : (<><div className={classNames({
            ['titleLight']: isThemeLight,
            ['titleDark']: !isThemeLight,
            })}>
                <div>
                Blog
                </div>
                
            </div>
        <div className={classNames({
            ['postsContainerLight']: isThemeLight,
            ['postsContainerDark']: !isThemeLight,
            })}>
            {postsList?.map((post: PostDescription) => (
            <PostCard key={post.id} post={post} />))}
            <Pagination
                pageNum={page}
                pagesCount={pagesCount}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                onPageClick={onPageClick}
                />
        </div></>)}
        <Footer />
        </>
        
    );
};    

export default Main;

