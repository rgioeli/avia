export const convertDate = (time: string) => {
  const now = new Date().getTime();
  const postTime = new Date(time).getTime();
  const timePassed = now - postTime;
  const secondsPassed = Math.floor(timePassed / 1000);
  const minutesPassed = Math.floor(secondsPassed / 60);
  const hoursPassed = Math.floor(minutesPassed / 60);
  const daysPassed = Math.floor(hoursPassed / 24);

  console.log(minutesPassed);
  if (secondsPassed < 60) {
    return secondsPassed + "s ago";
  }
  if (minutesPassed > 60) {
    if (hoursPassed > 24) {
      return daysPassed + "d ago";
    }

    return hoursPassed + "h ago";
  }

  return minutesPassed + "m ago";
};
