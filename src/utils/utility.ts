// eslint-disable-next-line import/prefer-default-export
export const getFormattedDate = (date: Date) => {
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const formattedDate = `${date.getFullYear()}-${month}-${day}`;

  return formattedDate;
};
