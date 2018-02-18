import React from 'react';

import TransactionBlock from './transactionBlock.js';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        if (this.props.emotions.emotionsListRequested === false && this.props.emotions.emotionsResultsRequested === false && this.props.emotions.emotionsResults.length !== 0) {
            return (
                <div className="resultWrapper">
                    <ul className="resultList">
                        {this.props.emotions.emotionsResults.map(transaction => <TransactionBlock key={transaction.id} {...this.props} transaction={transaction} />)}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="noResultsWrapper">
                    Loading transactions...
                </div>
            );
        }
    }
}

export default Result;