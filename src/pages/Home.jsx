import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center mt-10 mb-8">All Blog Posts</h1>
      <div className="posts-wrapper">
        {posts.length ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-center text-gray-500 w-full">No posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
