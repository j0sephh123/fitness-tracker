const timeFragment = "T00:00:00.000Z";

const months = [
  "Jan",
  "Febr",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// TODO find a good format to display dates
// TODO refactor to not repeat the logic
export const parseDateForTitle = (date: Date) => {
  const year = date.getFullYear();
  const rawMonth = date.getMonth() + 1;
  const month = rawMonth > 9 ? rawMonth : `0${rawMonth}`;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

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

export const formatDate = (d: Date) => {
  const year = d.getFullYear();
  const date = d.getDate();
  const monthName = months[d.getMonth()];
  const dayName = days[d.getDay()];

  return `${dayName}, ${date} ${monthName} ${year}`;
};
