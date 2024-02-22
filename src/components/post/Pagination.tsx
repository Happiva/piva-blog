import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';

interface PaginationProps {
  currentPage?: number;
  prevEnabled?: boolean;
  nextEnabled?: boolean;
}

interface ArrowButtonProps {
  icon: IconProp;
  onClick?: () => void;
  enabled?: boolean;
}

const ArrowButton = ({ icon, onClick, enabled }: ArrowButtonProps) => {
  return (
    <button
      type="button"
      aria-label="page-btn"
      onClick={onClick}
      disabled={!enabled}
      className="size-[33px] disabled:opacity-40"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

const Pagination = ({
  currentPage = 1,
  prevEnabled,
  nextEnabled,
}: PaginationProps) => {
  const router = useRouter();
  const { category: currentCategory } = router.query;

  const onClickPrev = () => {
    router.push(
      `/${currentCategory ? `categories/${currentCategory}` : ''}?page=${
        currentPage - 1
      }`,
    );
  };

  const onClickNext = () => {
    router.push(
      `/${currentCategory ? `categories/${currentCategory}` : ''}?page=${
        currentPage + 1
      }`,
    );
  };

  return (
    <div className="card flex rounded-[50px] self-center p-[10px] place-content-between w-[200px]">
      <ArrowButton
        icon={faChevronLeft}
        onClick={onClickPrev}
        enabled={prevEnabled}
      />
      <div className="rounded-full font-bold size-[33px] justify-center items-center flex bg-sand-dark dark:bg-sun">
        {currentPage}
      </div>
      <ArrowButton
        icon={faChevronRight}
        onClick={onClickNext}
        enabled={nextEnabled}
      />
    </div>
  );
};

export default Pagination;
