import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PostsSelectors, setSelectedPost, getPosts } from "../../Redux/reducers/posts";
import { PostDescription } from "../../Types/PostDescription";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PostCard from "../../Components/PostCard";
import classNames from "classnames";
import './Content.css';
import Loader from "../../Components/Loader";
import { useThemeContext, Theme } from '../../Context/themeModeContext';

const Content: FC = () => {
    const dispatch = useDispatch();
    const post = useSelector(PostsSelectors.getSelectedPost);
    const isSelectedPostLoading = useSelector(PostsSelectors.getSelectedPostLoading)
    const postsList = useSelector(PostsSelectors.getPosts);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(getPosts({
            _limit: 12,
            _start: 0,
        }));
        window.scrollTo(0, 0);
    }, [ ]);

    useEffect(() => {
        if (id) {
            dispatch(setSelectedPost(id));
        };
        window.scrollTo(0, 0);
    }, [id]);

    const anotherPosts = useMemo(() => {
        return postsList
        ?.slice(5, 8)
        .map((post: PostDescription) => <PostCard key={id} post={post} />)
    }, [postsList]);

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    return (
        <>
        <Header />
        {isSelectedPostLoading ? 
        (<div className={classNames({
            ['loaderLight']: isThemeLight,
            ['loaderDark']: !isThemeLight,
            })}><Loader /></div>) 
        : (<div className={classNames({
            ['contentContainerLight']: isThemeLight,
            ['contentContainerDark']: !isThemeLight,
            })}>
            <div className={classNames({
            ['contentNavLight']: isThemeLight,
            ['contentNavDark']: !isThemeLight,
            })}>
                <Link to={'/main'} className={classNames({
            ['contentLinkLight']: isThemeLight,
            ['contentLinkDark']: !isThemeLight,
            })}>Home</Link>
                <div>/ Post{post?.id}</div>
            </div>
            <div className={classNames({
            ['contentTitleLight']: isThemeLight,
            ['contentTitleDark']: !isThemeLight,
            })}>{post?.title}</div>
            <img src={post?.imageUrl} alt="content-image" className={classNames({
            ['contentImgLight']: isThemeLight,
            ['contentImgDark']: !isThemeLight,
            })} />
            <div className={classNames({
            ['contentTextLight']: isThemeLight,
            ['contentTextDark']: !isThemeLight,
            })}>{post?.summary}</div>
            <div className={classNames({
            ['anotherPostsLight']: isThemeLight,
            ['anotherPostsDark']: !isThemeLight,
            })}>{anotherPosts}</div>
        </div>)}
        <Footer />
        </>

    );
};

export default Content;

