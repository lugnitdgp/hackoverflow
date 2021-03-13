import React from "react";

let timer;

export default function Timer() {
  const [day, setDay] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const endDate = new Date("Apr 02, 2021").getTime();

  React.useEffect(() => {
    timer = setInterval(function () {
      let current_timestamp = new Date().getTime();
      let t = endDate - current_timestamp;

      if (t >= 0) {
        setDay(Math.floor(t / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinute(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
        setSecond(Math.floor((t % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="countdown_time">
        <div className="single_countdown">
          <h3>{day}</h3>
          <span>days</span>
        </div>
        <div className="single_countdown">
          <h3>{hour}</h3>
          <span>Hours</span>
        </div>
        <div className="single_countdown">
          <h3>{minute}</h3>
          <span>Minutes</span>
        </div>
        <div className="single_countdown">
          <h3>{second}</h3>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}
