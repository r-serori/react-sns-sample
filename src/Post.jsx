import React from "react";

const Post = ({ post, updateLikes }) => {
  const handleLike = () => {
    updateLikes(post.id); // いいね数を更新
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-avatar"></div>
        <div className="post-username">ユーザー {post.id}</div>
      </div>
      <div className="post-content">
        {post.id}つ目の投稿。
        <br />
        いいねをクリックし、Reactの効率的な描画を体感してください!
      </div>
      <div className="post-actions">
        <button className="like-button" onClick={handleLike}>
          いいね
        </button>
        <span className="like-count">{post.likes} いいね</span>
      </div>
    </div>
  );
};

export default Post;
