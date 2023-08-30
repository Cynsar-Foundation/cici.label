import React, { useEffect, useState } from 'react';
import { setLocalStorageItem, getLocalStorageItem } from '@components/utils/localStorage'; // Import utility functions

const UserObservationComponent = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const applyBlur = (blurValue: string) => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.filter = blurValue;
    }
  };

  useEffect(() => {
    const userClicked = getLocalStorageItem('userClicked'); // Fetch user click state
    if (userClicked) {
      return;
    }

    const timer = setInterval(() => {
      setTimeSpent(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setShowMessage(true);
        applyBlur('blur(5px)');
        setLocalStorageItem('userClicked', true); // Record user click
      }
    };

    const userClicked = getLocalStorageItem('userClicked'); // Fetch user click state
    if (userClicked) {
      return;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const userClicked = getLocalStorageItem('userClicked'); // Fetch user click state
    if (userClicked || timeSpent <= 10) {
      return;
    }

    setShowMessage(true);
    applyBlur('blur(5px)');
  }, [timeSpent]);

  const handleClose = () => {
    setShowMessage(false);
    applyBlur('none');
    setLocalStorageItem('userClicked', true); // Record user click
  };

  return (
    <>
      {showMessage && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999 }}>
          <div style={{ color: 'white', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10000 }}>
            <h1>Looks like you like enjoying what we are doing?</h1>
            <h2>Lets start a relationship?</h2>
            <button className='nice-button' onClick={handleClose}>Oh Yeah</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserObservationComponent;
