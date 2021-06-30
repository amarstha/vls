import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));
const Profile = React.lazy(() => import('./Demo/Dashboard/Profile'));
const ChangePassword = React.lazy(() => import('./Demo/Authentication/SignIn/ChangePassword'));
const Users = React.lazy(() => import('./Demo/home/Users'));
const UserEdit = React.lazy(() => import('./Demo/home/UserEdit'));
const UserProfile = React.lazy(() => import('./Demo/home/User'));
const Courses = React.lazy(() => import('./Demo/home/Courses'));
const Course = React.lazy(() => import('./Demo/home/Course'));
const CourseEdit = React.lazy(() => import('./Demo/home/EditCourse'));
const Exams = React.lazy(() => import('./Demo/home/Exams'));
const Exam = React.lazy(() => import('./Demo/home/Exam'));
const ExamQuestions = React.lazy(() => import('./Demo/home/ExamQuestions'));
const ExamQuestion = React.lazy(() => import('./Demo/home/ExamQuestion'));
const ExamEditQuestion = React.lazy(() => import('./Demo/home/ExamEditQuestion'));
const EnrollLearners = React.lazy(() => import('./Demo/home/EnrollLearners'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardDefault },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/change-password', exact: true, name: 'ChangePassword', component: ChangePassword },
    { path: '/users', exact: true, name: 'Users', component: Users },
    { path: '/user/edit/:id', exact: true, name: 'UserEdit', component: UserEdit },
    { path: '/user/:id', exact: true, name: 'UserProfile', component: UserProfile },
    { path: '/courses', exact: true, name: 'Courses', component: Courses },
    { path: '/course/:id', exact: true, name: 'Course', component: Course },
    { path: '/course/edit/:id', exact: true, name: 'CourseEdit', component: CourseEdit },
    { path: '/exams', exact: true, name: 'Exams', component: Exams },
    { path: '/exam/:id', exact: true, name: 'Exam', component: Exam },
    { path: '/questions', exact: true, name: 'Questions', component: ExamQuestions },
    { path: '/question/:id', exact: true, name: 'Question', component: ExamQuestion },
    { path: '/question/edit/:id', exact: true, name: 'EditQuestion', component: ExamEditQuestion },
    { path: '/learners', exact: true, name: 'EnrollLearners', component: EnrollLearners },
];

export default routes;