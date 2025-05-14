import { useState, useEffect, useRef } from 'react';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  // Function to handle click outside the card
  const handleClickOutside = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      setExpanded(false);
    }
  };

  // Add event listener to detect outside click
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      ref={cardRef}
      className={`post-card transition-all duration-500 ${expanded ? 'expanded' : ''}`}
      onClick={handleToggle}
    >
      <h2>{post.title}</h2>
      <p>
        {expanded ? post.content : post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content}
      </p>
      <div className="author">
        Posted by {post.author || 'Anonymous'} on{' '}
        {new Date(post.created_at).toLocaleDateString()}
      </div>
    </div>
  );
};

export default PostCard;
