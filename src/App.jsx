import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./styles.css"; // CSSファイルをインポート

const App = () => {
  const [posts, setPosts] = useState([]);

  // 初期データを作成
  useEffect(() => {
    const initialPosts = [];
    for (let i = 1; i <= 100; i++) {
      initialPosts.push({ id: i, likes: getLikesFromStorage(i) });
    }
    setPosts(initialPosts);
  }, []);

  // ローカルストレージからいいね数を取得
  const getLikesFromStorage = (postId) => {
    const likes = localStorage.getItem(`likes_post_${postId}`);
    return likes ? parseInt(likes) : 0;
  };

  // 投稿のいいね数を更新
  const updateLikes = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
    saveLikesToStorage(postId, getLikesFromStorage(postId) + 1);
  };

  // ローカルストレージにいいね数を保存
  const saveLikesToStorage = (postId, likeCount) => {
    localStorage.setItem(`likes_post_${postId}`, likeCount);
  };

  return (
    <div className="app">
      <div className="container">
        {posts.map((post) => (
          <Post key={post.id} post={post} updateLikes={updateLikes} />
        ))}
      </div>
    </div>
  );
};

export default App;
