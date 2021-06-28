import React, { useContext } from 'react';
import { AuthContext } from "../../../contexts/Auth";

function ChangePassword(){
    const { loggedInUser } = useContext(AuthContext);

	return(
		<h2>test</h2>
	)
}
export default ChangePassword;