import React, { useEffect, useState } from 'react';
import ItemList from './components/ItemList';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // You can add any initial data fetching here if needed
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>MERN Stack Application</h1>
      <ItemList />
    </div>
  );
};

export default App;