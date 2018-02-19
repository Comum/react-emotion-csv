import React from 'react';

class TransactionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {showSelect: false};
    }

    handleClick() {
        console.log(this);
    }
    
    render() {

        // criar 3 returns em que mostra os 3 estados diferentes
        //  - mostra select
        //  - apaga emotion
        //  - adiciona emotion
        // criar 3 reducers para lidar com cada accao (no ponto anterior)

        let transactionEmotionHandlerText = '+';
        let transactionEmotionHandlerClass = ['TransactionEmotionHandler'];

        if (this.props.transaction.emotion.length) {
            transactionEmotionHandlerText = 'x';
            transactionEmotionHandlerClass.push('text-red js-remove-emotion');
        } else {
            transactionEmotionHandlerClass.push('text-green js-remove-emotion');
        }

        return (
            <li className="TransactionBlock">
                <div className="TransactionAmount">{this.props.transaction.amount}</div>
                <div className="TransactionDescription">{this.props.transaction.description}</div>
                <div className="TransactionNote">{this.props.transaction.note}</div>
                <div className="TransactionEmotion">{this.props.transaction.emotion}</div>
                <span className={transactionEmotionHandlerClass.join(' ')} onClick={this.handleClick}>{transactionEmotionHandlerText}</span>
            </li>
        );
    }
}

export default TransactionBlock;