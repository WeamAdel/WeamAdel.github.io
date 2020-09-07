import React from "react";
import { ACCOUNTS } from "../../../../data/data";

function Accounts() {
  let accountsJSX = Object.values(ACCOUNTS)
    .flat()
    .map((account) =>
      account.title === "Github" ? null : (
        <li key={account.title} title={account.title}>
          <a href={account.link} target="blank" rel="noopener noreferrer">
            <i className={`fa fa-${account.fontIcon}`} />
          </a>
        </li>
      )
    );
  return <ul className="accounts list-unstyled mb-0">{accountsJSX}</ul>;
}

export default Accounts;
