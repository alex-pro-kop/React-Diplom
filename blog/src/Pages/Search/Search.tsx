import React, { FC }  from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getPosts, PostsSelectors, setSelectedPost, setTotalAllPostsCounter } from '../../Redux/reducers/posts';
import { PostDescription } from '../../Types/PostDescription';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import PostCard from '../../Components/PostCard';

import classNames from 'classnames';
import { useThemeContext, Theme } from '../../Context/themeModeContext';
import './Search.css';

const Search: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const postsList = useSelector(PostsSelectors.getPosts);

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    return (
        <>
        <Header />
        <div className={classNames({
            ['searchLight']: isThemeLight,
            ['searchDark']: !isThemeLight,
            })}>
        Search results {' '}
        {searchParams.get('contains') ? `'${searchParams.get('contains')}'` : null}

            <div className={classNames({
                ['postsWrapperLight']: isThemeLight,
                ['postsWrapperDark']: !isThemeLight,
                })}>
            {postsList ? (
                postsList
                ?.filter((post) => post.title.toLowerCase().includes(`${searchParams.get('contains')}`))
                .map((post: PostDescription) => (
                    <PostCard key={post.id} post={post} />))) 
                : (<div>No results</div>)}
            </div>
        </div>
        <Footer />
    </>
    );
};

export default Search;

