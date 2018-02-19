import React from 'react';

class TransactionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        return (
            <li className="TransactionBlock">
                <div className="TransactionAmount">{this.props.transaction.amount}</div>
                <div className="TransactionDescription">{this.props.transaction.description}</div>
                <div className="TransactionNote">{this.props.transaction.note}</div>
                <div className="TransactionEmotion">{this.props.transaction.emotion}</div>
            </li>
        )
    }
}

export default TransactionBlock;