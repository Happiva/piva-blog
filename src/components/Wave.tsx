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
      d="M1440 0H0V147.505V163V172.557L40 201.759C80 231.273 160 289.207 240 310.345C320 331.483 400 314.259 480 293.67C520 283.218 560 271.729 600 260.24C640 248.751 680 237.263 720 226.811C800 206.221 880 188.998 960 210.136C995.912 219.624 1031.82 236.528 1067.74 253.432C1111.82 274.184 1155.91 294.936 1200 301.968C1280 314.259 1360 281.378 1400 264.39L1440 247.714V163V147.505V0Z"
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
