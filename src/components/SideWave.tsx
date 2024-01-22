import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const SideWaveSvg = ({ isDark }: { isDark: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 236 738"
    width="236"
    height="100%"
    preserveAspectRatio="none"
  >
    <path
      fill={isDark ? '#56738C' : '#32838C'}
      fillRule="evenodd"
      d="M1.718 0v738h125.645l21.323-20.5C170.238 697 212.54 656 227.975 615c15.434-41 2.858-82-12.177-123-7.631-20.5-16.02-41-24.409-61.5s-16.778-41-24.41-61.5c-15.034-41-27.611-82-12.176-123 6.929-18.405 19.271-36.81 31.614-55.215 15.153-22.595 30.306-45.19 35.441-67.785 8.975-41-15.035-82-27.439-102.5L182.242 0H1.718Z"
      clipRule="evenodd"
      className="shadow"
    />
    <path
      fill={isDark ? '#82A8BF' : '#60BFBF'}
      className="shadow"
      d="m23.5 738 27.392-20.5C78.578 697 132.922 656 152.75 615c19.828-41 3.672-82-15.642-123C117.5 451 94 410 74.392 369c-19.314-41-35.47-82-15.642-123s74.172-82 86.142-123c11.53-41-19.314-82-35.25-102.5L94 0H0v738h23.5Z"
    />
  </svg>
);

const SideWave = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return !mounted ? null : (
    <SideWaveSvg isDark={theme === 'dark' || resolvedTheme === 'dark'} />
  );
};

export default SideWave;
