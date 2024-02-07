import CommentButton from '../shared/CommentButton';
import ScrollUpButton from '../shared/ScrollUpButton';

const FloatingButtons = () => {
  return (
    <div className="flex flex-col gap-[12px] fixed z-10 bottom-[12px] right-[12px] lg:bottom-[24px] lg:right-[24px]">
      <ScrollUpButton />
      <CommentButton />
    </div>
  );
};

export default FloatingButtons;
