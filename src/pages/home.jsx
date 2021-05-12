import React, { Fragment } from 'react';
import Header from '../container/header';
import BodyHome from '../container/body';

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <BodyHome />
            </Fragment>
        );
    }
}

export default Home;