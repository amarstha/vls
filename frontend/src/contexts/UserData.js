import React, { createContext, useState, useEffect } from 'react';
import { getTotalLearners,getTotalTrainers,getTotalCourses,getTotalUsers,getTotalUsersforDashboard,getTotalCoursesForDashboard } from '../api';
export const UserDataContext = createContext();

function UserData(props){

	const [totalUsers, setTotalUsers ] = useState('');
	const [totalUsersForDashboard, setTotalUsersForDashboard ] = useState('');
	const [totalLearners, setTotalLearners ] = useState('');
	const [totalTrainers, setTotalTrainers ] = useState('');
	const [totalCourses, setTotalCourses ] = useState('');
    const [totalCoursesForDashboard, setTotalCoursesForDashboard ] = useState('');
	const [isDataManipulated, setIsDataManipulated ] = useState(true);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        const fetchedData = async()=>{
            const params = {
                limit: perPage,
                offset: (page - 1) * perPage,
            };

            const learnersResp = await getTotalLearners();
            setTotalLearners(learnersResp.data);

            const trainersResp = await getTotalTrainers();
            setTotalTrainers(trainersResp.data);
            
            const coursesResp = await getTotalCourses();
            setTotalCourses(coursesResp.data);
            
            const usersResp = await getTotalUsers(params);
            setTotalPage(Math.ceil(usersResp.data.count / 10));
            setTotalUsers(usersResp.data);
            
            const usersDashboardResp = await getTotalUsersforDashboard();
            setTotalUsersForDashboard(usersDashboardResp.data);
            
            const coursesDashboardResp = await getTotalCoursesForDashboard();
            setTotalCoursesForDashboard(coursesDashboardResp.data);
            
            setIsDataManipulated(false);
        }
        if(isDataManipulated){
            fetchedData()
        }
    }, [isDataManipulated])

    const onPageChange = async (newPage) => {
        setPage(newPage)
        const params = {
          limit: 10,
          offset: (newPage - 1) * 10,
        };
        const usersResp = await getTotalUsers(params);
        setTotalUsers(usersResp.data);

        setPerPage(newPage);
    }

	return(
		<UserDataContext.Provider value={{ page,totalPage,onPageChange,totalLearners,totalTrainers,totalCourses,totalUsers,totalUsersForDashboard,totalCoursesForDashboard,setIsDataManipulated }}>
			{props.children}
		</UserDataContext.Provider>
	)
}
export default UserData;