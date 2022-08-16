import { useEffect, useRef, useState } from 'react';
import styles from './Popup.module.scss';

const Popup = ({ data, setOpenPopup }) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isMounted) {
      const handleClickOutside = (event) => {
        if (ref.current !== event.target) setOpenPopup(false);
      };

      document.body.addEventListener('click', handleClickOutside);

      return () => {
        document.body.removeEventListener('click', handleClickOutside);
      };
    }
    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return (
    <div ref={ref} className={styles.popup}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <a href={data.link && '#/'}>Перейти</a>
    </div>
  );
};

export default Popup;
