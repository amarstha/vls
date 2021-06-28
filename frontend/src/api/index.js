import axios from "axios";

function getTotalUsers(params) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    },
    params: params
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/`,
    axiosConfig
  );
}
function getTotalUsersforDashboard() {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    },
    params: {
    	limit: 5
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/`,
    axiosConfig
  );
}

function getUser(Id) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/${Id}/`,
    axiosConfig
  );
}

function updateUser(Id, formData) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.patch(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/${Id}/`,
    formData,
    axiosConfig
  );
}

function deleteUser(Id) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/${Id}`,
    axiosConfig
  );
}

function getTotalLearners() {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    },
    params: {
    	is_staff: false,
    	is_active:true,
    	is_admin: false
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/`,
    axiosConfig
  );
}

function getCourseCategory() {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/category/`,
    axiosConfig
  );
}

function PostCourseCategory(formData) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/api/category/`,
    formData,
    axiosConfig,
  );
}

function deleteCourseCategory(Id) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/api/category/${Id}/`,
    axiosConfig,
  );
}

function getTotalTrainers() {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    },
    params: {
    	is_staff: true,
    	is_active:true,
    	is_admin: false
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/`,
    axiosConfig
  );
}

function getTotalCourses() {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/lesson/`,
    axiosConfig
  );
}

function retrieveCourse(Id) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/lesson/${Id}`,
    axiosConfig
  );
}

function getTotalCoursesForDashboard() {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    },
    params: {
    	limit: 5
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/lesson/`,
    axiosConfig
  );
}

function getNotifications(params) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    },
    params: params
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/notifications/`,
    axiosConfig
  );
}

function postNotifications(formData) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/api/notifications/`,
    formData,
    axiosConfig
  );
}


function listQuestions(params) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    },
    params: params
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/question/`,
    axiosConfig
  );
}

function retrieveQuestion(Id) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/question/${Id}/`,
    axiosConfig
  );
}

function updateQuestion(Id,formData) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.patch(
    `${process.env.REACT_APP_API_BASE_URL}/api/question/${Id}/`,
    formData,
    axiosConfig
  );
}


function PostQuestions(formData) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/api/question/`,
    formData,
    axiosConfig
  );
}

function deleteQuestion(Id) {
  const token = localStorage.getItem("jwt_token");
  const axiosConfig = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  return axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/api/question/${Id}/`,
    axiosConfig
  );
}

export {
  getTotalUsers,
  getUser,
  updateUser,
  deleteUser,
  getTotalUsersforDashboard,
  getTotalLearners,
  getTotalTrainers,
  getTotalCourses,
  retrieveCourse,
  getTotalCoursesForDashboard,
  getCourseCategory,
  PostCourseCategory,
  deleteCourseCategory,
  getNotifications,
  postNotifications,
  listQuestions,
  PostQuestions,
  deleteQuestion,
  retrieveQuestion,
  updateQuestion
};