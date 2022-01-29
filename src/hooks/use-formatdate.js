const useFormatDate = (date) => {
  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const newDate = new Date(date);
  const getDate = newDate.getDate();
  let getMonth = newDate.getMonth();
  getMonth = monthName[getMonth];
  const getYear = newDate.getFullYear();
  const getHour = newDate.getHours();
  const getMinute = newDate.getMinutes();
  return `${getDate < 10 ? `0${getDate}` : getDate} ${getMonth} ${getYear} ${
    getHour < 10 ? `0${getHour}` : getHour
  }:${getMinute < 10 ? `0${getMinute}` : getMinute}`;
};

export default useFormatDate;
