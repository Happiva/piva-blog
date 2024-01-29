interface PaginationProps {
  currentPage?: number;
}

const Pagination = ({ currentPage = 1 }: PaginationProps) => {
  return (
    <div className="bg-white flex rounded-[50px] py-[10px] w-full place-content-between">
      <button type="button">{'<'}</button>
      <div className="rounded-full font-bold size-[33px] place-content-center text-center bg-sand-dark">
        {currentPage}
      </div>
      <button type="button">{'>'}</button>
    </div>
  );
};

export default Pagination;
