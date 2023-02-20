const timeFragment = "T00:00:00.000Z";

export const generateDate = (date: string) => {
  if (!date) {
    const now = new Date();
    const year = now.getFullYear();
    const rawMonth = now.getMonth() + 1;
    const month = rawMonth > 9 ? rawMonth : `0${rawMonth}`;
    const day = now.getDate();
    return `${year}-${month}-${day}${timeFragment}`;
  }

  return `${date}${timeFragment}`;
};
