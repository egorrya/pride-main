import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Home from './pages/Home';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Home />
    </>
  );
};

export default App;
