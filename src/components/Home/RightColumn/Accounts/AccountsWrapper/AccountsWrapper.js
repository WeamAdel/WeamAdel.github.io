import React from "react";
import PropTypes from "prop-types";

function AccountsWrapper(props) {
  console.log(props.accounts);
  let accountsJSX = props.accounts.map((account) => (
    <li key={account.title} title={account.title}>
      <a href={account.link} target="_blank" rel="noopener noreferrer">
        <i className={`fa fa-${account.fontIcon}`} />
      </a>
    </li>
  ));
  return <div className={`accounts-wrapper ${props.theme}`}>{accountsJSX}</div>;
}

AccountsWrapper.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      fontIcon: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default AccountsWrapper;
