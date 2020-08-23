import React from "react";
import { useSpring, animated, config } from "react-spring";
import { ACCOUNTS } from "../../../../data/data";
import AccountsWrapper from "./AccountsWrapper/AccountsWrapper";

function Accounts() {
  const socialAccounts = ACCOUNTS.social;
  const formalAccounts = ACCOUNTS.formal;

  let darkThemeAccounts = [
    socialAccounts[0],
    socialAccounts[1],
    formalAccounts[0],
    formalAccounts[1],
  ];

  let { width, opacity } = useSpring({
    from: { width: 0, opacity: 0 },
    to: { width: 100, opacity: 1 },
    delay: 3000,
    duration: config.slow,
  });

  return (
    <animated.ul
      style={{
        width: width.interpolate((w) => {
          return w + "%";
        }),
        opacity: opacity,
      }}
      className="accounts list-unstyled mb-0"
    >
      <AccountsWrapper theme="dark" accounts={darkThemeAccounts} />
      <AccountsWrapper theme="light" accounts={ACCOUNTS.design} />
    </animated.ul>
  );
}

export default Accounts;
