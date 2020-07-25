import React from "react";
import { ACCOUNTS } from "./../../../../utility/utilConsts";
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

  return (
    <ul className="accounts list-unstyled mb-0">
      <AccountsWrapper theme="dark" accounts={darkThemeAccounts} />
      <AccountsWrapper theme="light" accounts={ACCOUNTS.design} />
    </ul>
  );
}

export default Accounts;
