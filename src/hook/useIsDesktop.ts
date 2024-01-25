import { DESKTOP_WIDTH } from '@/constants';
import { useEffect, useState } from 'react';

export default function useIsDesktop() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const setCurrentWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', setCurrentWidth);

    return () => {
      window.removeEventListener('resize', setCurrentWidth);
    };
  }, [mounted]);

  return { isDesktop: width >= DESKTOP_WIDTH };
}
