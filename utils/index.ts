export const formatDate = (createDate?: string) => {
  if (createDate === undefined) return;

  const date = new Date(createDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
};
