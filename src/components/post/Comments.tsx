import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comments = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [folded, setFolded] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  useEffect(() => {
    const commentTheme =
      theme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light';
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', 'https://giscus.app/client.js');
    scriptElement.setAttribute('data-repo', 'Happiva/piva-blog-comment');
    scriptElement.setAttribute('data-repo-id', 'R_kgDOLOqPgg');
    scriptElement.setAttribute('data-category', 'General');
    scriptElement.setAttribute('data-category-id', 'DIC_kwDOLOqPgs4Cc_CS');
    scriptElement.setAttribute('data-mapping', 'pathname');
    scriptElement.setAttribute('data-strict', '0');
    scriptElement.setAttribute('data-reactions-enabled', '1');
    scriptElement.setAttribute('data-emit-metadata', '0');
    scriptElement.setAttribute('data-input-position', 'bottom');
    scriptElement.setAttribute('data-theme', commentTheme);
    scriptElement.setAttribute('data-lang', 'ko');
    scriptElement.setAttribute('data-loading', 'lazy');
    scriptElement.setAttribute('crossorigin', 'anonymous');
    scriptElement.async = true;

    ref.current?.appendChild(scriptElement);
  }, [mounted, theme, resolvedTheme, folded]);

  if (!mounted) return null;

  return (
    <section id="comments" className="card rounded-[10px] mt-[12px] p-[16px]">
      <button type="button" onClick={() => setFolded((prev) => !prev)}>
        <FontAwesomeIcon
          className="mr-[8px]"
          icon={folded ? faAngleDown : faAngleUp}
        />
        {folded ? '댓글 열기' : '댓글 접기'}
      </button>
      {!folded && <div ref={ref} />}
    </section>
  );
};

export default Comments;
