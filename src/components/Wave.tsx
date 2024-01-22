import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const WaveSvg = ({ isDark }: { isDark: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    width="100%"
    height="85"
    preserveAspectRatio="none"
  >
    <path
      fill={isDark ? '#56738C' : '#32838C'}
      fillRule="evenodd"
      d="M1440 0H0v147.505h1440V0ZM40 201.759 0 172.557v-25.052h1440v100.209l-40 16.676c-40 16.988-120 49.869-200 37.578-44.09-7.032-88.18-27.784-132.26-48.536-35.92-16.904-71.828-33.808-107.74-43.296-80-21.138-160-3.915-240 16.675-40 10.452-80 21.94-120 33.429s-80 22.978-120 33.43c-80 20.589-160 37.813-240 16.675S80 231.274 40 201.759Z"
      clipRule="evenodd"
    />
    <path
      fill={isDark ? '#82A8BF' : '#60BFBF'}
      fillRule="evenodd"
      d="m0 32 40 37.3C80 107 160 181 240 208c80 27 160 5 240-21.3 80-26.7 160-58.7 240-85.4C800 75 880 53 960 80c80 27 160 101 240 117.3 80 15.7 160-26.3 200-48l40-21.3V0H0v32Z"
      clipRule="evenodd"
    />
  </svg>
);

const Wave = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return !mounted ? null : (
    <WaveSvg isDark={theme === 'dark' || resolvedTheme === 'dark'} />
  );
};

export default Wave;
