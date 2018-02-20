import React from 'react';

import Header from './header.js';
import Form from './form.js';
import Result from './result.js';

class GitHome extends React.Component {
    constructor(props) {
        super(props);
        
        this.props = props;
    }

    render() {
        return (
            <div className="mainWrapper">
                <Header />
                <Form {...this.props} />
                <Result {...this.props} />
            </div>
        );
    }
}

export default GitHome;