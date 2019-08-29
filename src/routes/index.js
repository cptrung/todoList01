import React from 'react';
import LoginPage from './../pages/loginPage';
import HomePage from './../pages/HomePage';

const routes = [
    {
        path:'/',
        exact:true,
        main: ({history}) => <HomePage  history={history}/>
    },
    {
        path:'/login',
        exact:false,
        main: ({location,history}) => <LoginPage history={history} location={location}/>
    },   
    
];

export default routes;