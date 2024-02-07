import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CommentButton = () => {
  return (
    <a
      href="#comments"
      className="bg-white dark:bg-dark-sky-200 rounded-[5px] px-[14px] py-[8px]"
      aria-label="Floating button to comments section"
    >
      <FontAwesomeIcon icon={faCommentDots} />
    </a>
  );
};

export default CommentButton;
