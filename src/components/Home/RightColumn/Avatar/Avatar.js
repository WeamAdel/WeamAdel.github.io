import React from "react";

function Avatar() {
  let hourNow = new Date().getUTCHours();
  let offsetFromUTC = 2;
  let time = hourNow + offsetFromUTC;
  let status = time < 24 && time >= 6 ? "available" : "not available";

  return (
    <div className="avatar">
      <span
        className={`status ${status.replace(" ", "-")}`}
        title={`Weam is ${status} now`}
      />
      <img
        src="/assets/images/home/avatar.gif"
        alt="Gif of dog laying on the coach and clicking repeatedly on a keboard of a labtop"
      />
    </div>
  );
}

export default Avatar;
