import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ColorModeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Button for changing blog theme"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark',
        )
      }
      className="relative bg-sun dark:bg-moon self-center h-[33px] w-[33px] mr-[16px] lg:h-[33px] lg:w-[33px] rounded-full border-white border-4 shadow"
    />
  );
};

export default ColorModeSwitch;
