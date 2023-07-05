const updateTime = (time) => {
  if (time === 0) {
    return null;
  } else if (time < 10) {
    return `0:0${time}`;
  } else if (time > 10 && time < 60) {
    return `0:${time}`;
  } else {
    let sec = 0;
    let min = 0;
    sec = time % 60;
    min = Math.floor(time / 60);
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }
};

export default updateTime;
