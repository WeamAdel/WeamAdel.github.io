import React from "react";
import { ACCOUNTS } from "./../../../utility/utilConsts";

function Accounts() {
  let accountsJSX = Object.values(ACCOUNTS)
    .flat()
    .map((account) => (
      <li key={account.title} title={account.title}>
        <a href={account.link} target="_blank" rel="noopener noreferer">
          <i className={`fa fa-${account.fontIcon}`} />
        </a>
      </li>
    ));
  return <ul className="accounts list-unstyled mb-0">{accountsJSX}</ul>;
}

export default Accounts;
