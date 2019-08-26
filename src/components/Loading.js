import React, { Component } from 'react';

import LoadingImg from './../assets/images/loading.gif';


class Loading extends Component {

    render() {
        return (
            <div className="loading">  
               <img src={LoadingImg} className="img-responsive icon-loading" alt="loading"/>  
            </div>
        );
    }
}

export default Loading;
