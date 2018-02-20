import React from 'react';

class TransactionBlock extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    handleClick = () => {
        console.log(this.props);
    }

    handleEmotionChange = () => {
        this.props.onEmotionChanged(this.props.transaction.id, this.refs.emotion.value);
    }
    
    render() {
        let transactionEmotionHandlerText = '';
        let transactionEmotionHandlerClass = ['TransactionEmotionHandler'];
        let showSelect = false;

        if (this.props.transaction.emotion.length) {
            transactionEmotionHandlerText = 'x';
            transactionEmotionHandlerClass.push('text-red js-remove-emotion');
        } else {
            transactionEmotionHandlerClass.push('text-green js-remove-emotion');
        }

        if (!this.props.transaction.emotion.length) {
            showSelect = true;
        }

        return (
            <li className="TransactionBlock">
                <div className="TransactionAmount">{this.props.transaction.amount}</div>
                <div className="TransactionDescription">{this.props.transaction.description}</div>
                <div className="TransactionNote">{this.props.transaction.note}</div>
                
                { showSelect ?
                    <div className="TransactionEmotion">
                        <select ref="emotion" name="emotion" id="emotion" onChange={this.handleEmotionChange}>
                            <option value="0">--emotion--</option>
                            <option value="love">Love</option>
                            <option value="hate">Hate</option>
                            <option value="confusion">Confusion</option>
                            <option value="sadness">Sadness</option>
                            <option value="surprise">Surprise</option>
                            <option value="joy">Joy</option>
                        </select>
                    </div>
                :
                    <div className="TransactionEmotion">{this.props.transaction.emotion}</div>
                }
                <span className={transactionEmotionHandlerClass.join(' ')} onClick={this.handleClick}>{transactionEmotionHandlerText}</span>
            </li>
        );
    }
}

export default TransactionBlock;