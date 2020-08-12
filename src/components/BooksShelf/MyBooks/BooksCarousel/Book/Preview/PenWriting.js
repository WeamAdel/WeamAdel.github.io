import React from "react";

function PenWriting(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32.239"
      height="37.877"
      viewBox="0 0 32.239 37.877"
    >
      <path
        id="Path_1077"
        data-name="Path 1077"
        d="M863.481,265.559c-3.678-2.966-1.9-3.085-5.34-3.8s-2.254-2.611-4.509-2.611a5.542,5.542,0,0,0-3.8,1.78s-1.78,1.424-2.017-1.305,3.441-5.814.831-6.17-10.2,5.34-11.628,4.153-5.577-5.1-1.661-16.85,11.866-10.323,11.866-10.323,2.729.831,4.509,8.425,1.157,5.4,1.424,6.408"
        transform="translate(-832.183 -228.849)"
        fill="none"
        stroke={props.stroke || "#f08"}
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

export default PenWriting;
