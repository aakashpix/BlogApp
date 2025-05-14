// Navbar.js
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <nav>
      <Link to="/" className="font-bold text-2xl">BlogApp</Link>
      <div>
        {user ? (
          <>
            <Link to="/new">New Post</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
