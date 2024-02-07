import { SCROLL_POINT } from '@/constants';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const setScrollHeight = () => setScreenHeight(window.scrollY);
    window.addEventListener('scrollend', setScrollHeight);

    return () => {
      window.removeEventListener('scrollend', setScrollHeight);
    };
  }, []);

  useEffect(() => {
    if (screenHeight > SCROLL_POINT) {
      setIsVisible(true);
    }
    if (screenHeight === 0) {
      setIsVisible(false);
    }
  }, [screenHeight]);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button
      className="bg-white h-fit dark:bg-dark-sky-200 rounded-[5px] px-[14px] py-[8px]"
      aria-label="Scroll up button"
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  ) : null;
};

export default ScrollUpButton;
