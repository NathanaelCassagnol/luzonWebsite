import React from "react";

const Account = () => {

	const user = "Hector";

	return (
		<div>
			<h1>
				Welcome {user}
			</h1>

			<div>
				<p>List of accounts followed</p>
				<p>New Accounts to follow</p>
				<p>Settings?</p>
				<p>Messages</p>
			</div>
		</div>
	);
};

export default Account;