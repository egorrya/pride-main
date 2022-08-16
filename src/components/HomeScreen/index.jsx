import React, { useState } from 'react';
import Popup from '../Popup';

import styles from './HomeScreen.module.scss';

const dataInsidePopup = [{ title: '1', description: '1', link: '#' }];

const HomeScreen = () => {
  const [data, setData] = useState({});
  const [openPopup, setOpenPopup] = useState(false);

  const onClickOpenPopup = (letterIndex) => {
    setData(dataInsidePopup[letterIndex]);

    setOpenPopup(!openPopup);
  };

  return (
    <div className={styles.homeScreen}>
      <div className='background__image'>
        <img src='' alt='' />
      </div>

      <div onClick={() => onClickOpenPopup(0)} className={styles.logo}>
        <b>
          <span className={styles.blinking}>P</span>RIDE
        </b>
      </div>

      {openPopup && <Popup setOpenPopup={setOpenPopup} data={data} />}
    </div>
  );
};

export default HomeScreen;
