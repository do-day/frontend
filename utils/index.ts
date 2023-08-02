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

export const onlyDate = (rewardDate?: string) => {
  if (rewardDate === undefined) return;

  const month = rewardDate.slice(5, 7);
  const day = rewardDate.slice(8, 10);

  return `${month}.${day}`;
};
