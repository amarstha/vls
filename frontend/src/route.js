import React from 'react';

const SignUp = React.lazy(() => import('./Demo/Authentication/SignUp'));
const SignIn = React.lazy(() => import('./Demo/Authentication/SignIn'));
const Home = React.lazy(() => import('./Demo/home'));

const route = [
    { path: '/auth/signup', exact: true, name: 'SignUp', component: SignUp },
    { path: '/auth/signin', exact: true, name: 'SignIn', component: SignIn },
    { path: '/', exact: true, name: 'Home', component: Home }
];

export default route;