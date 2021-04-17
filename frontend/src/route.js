import React from 'react';

const SignUp = React.lazy(() => import('./Demo/Authentication/SignUp'));
const SignIn = React.lazy(() => import('./Demo/Authentication/SignIn'));
const Home = React.lazy(() => import('./Demo/home'));
const Search = React.lazy(() => import('./Demo/home/Search'));
const VerifyEmail = React.lazy(() => import('./Demo/Authentication/SignUp/VerifyEmail'));
const ForgotPassword = React.lazy(() => import('./Demo/Authentication/SignUp/ForgotPassword'));
const ForgotPasswordConfirm = React.lazy(() => import('./Demo/Authentication/SignUp/ForgotPasswordConfirm'));

const route = [
    { path: '/auth/signup', exact: true, name: 'SignUp', component: SignUp },
    { path: '/auth/signin', exact: true, name: 'SignIn', component: SignIn },
    { path: '/verify-email', exact: true, name: 'VerifyEmail', component: VerifyEmail },
    { path: '/forgot-password', exact: true, name: 'ForgotPassword', component: ForgotPassword },
    { path: '/forgot-password/confirm', exact: true, name: 'ForgotPasswordConfirm', component: ForgotPasswordConfirm },
    { path: '/search', exact: true, name: 'Search', component: Search },
    { path: '/', exact: true, name: 'Home', component: Home }
];

export default route;