import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { PostDescription } from '../../Types/PostDescription';
import { useThemeContext, Theme } from '../../Context/themeModeContext';

import './PostCard.css';
import classNames from 'classnames';
import format from "date-fns/format";

type PostCardProps = {
    post: PostDescription;
  };

const PostCard: FC<PostCardProps> = ( { post } ) => {
    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    function newDateFormat(publishedAt: string) {
      const date = format(new Date(publishedAt), "PPP");
      return date;
    }
    
  return (
    <Link to={`/content/${post.id}`}>
      <div className={classNames({
            ['postWrapperLight']: isThemeLight,
            ['postWrapperDark']: !isThemeLight,
            })}>
          <img src={post.imageUrl} alt="post-image"
          className={classNames({
            ['postImgLight']: isThemeLight,
            ['postImgDark']: !isThemeLight,
            })}/>
          <div className={classNames({
            ['postInfoLight']: isThemeLight,
            ['postInfoDark']: !isThemeLight,
            })}>
            <div className={classNames({
            ['postDataLight']: isThemeLight,
            ['postDataDark']: !isThemeLight,
            })}>{newDateFormat(post.publishedAt)}</div>
            <div className={classNames({
            ['postTitleLight']: isThemeLight,
            ['postTitleDark']: !isThemeLight,
            })}>{post.title}</div>
          </div>
      </div>
    </Link>
  );
};

export default PostCard;
