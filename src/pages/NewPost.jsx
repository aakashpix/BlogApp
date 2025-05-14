import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const NewPost = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) navigate('/login');
      setUser(user);
    });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return setError('Title and content are required.');
    const { error } = await supabase.from('posts').insert({
      title,
      content,
      author_email: user.email,
    });
    if (error) setError(error.message);
    else navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <textarea
            placeholder="Content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
