import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth';
import ExamAdminQuestions from './ExamAdminQuestions';
import ExamTrainerQuestions from './ExamTrainerQuestions';
function ExamQuestions() {

	const { loggedInUser } = useContext(AuthContext);

	return(
		<>
			{loggedInUser && loggedInUser.is_admin ?(
				<ExamAdminQuestions />
			):(
				<ExamTrainerQuestions />
			)}
        </>
	)
}
export default ExamQuestions;