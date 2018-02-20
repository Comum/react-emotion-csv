import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.props = props;
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmitEmotionsForm(this.refs.description.value, this.refs.emotion.value);
    }

    render() {
        return (
            <div className="formWrapper">
                <form action="" className="formContainer" onSubmit={this.handleSubmit}>
                    <div className="formField">
                        <label htmlFor="description" className="labelInlineField">Description: </label>
                        <input type="text" name="description" id="description" ref="description"/>
                    </div>
                    <div className="formField">
                        <label htmlFor="emotion" className="labelInlineField">Emotion: </label>
                        <select ref="emotion" name="emotion" id="emotion">
                            <option value="0">--emotion--</option>
                            <option value="love">Love</option>
                            <option value="hate">Hate</option>
                            <option value="confusion">Confusion</option>
                            <option value="sadness">Sadness</option>
                            <option value="surprise">Surprise</option>
                            <option value="joy">Joy</option>
                        </select>
                    </div>
                    <div className="formField">
                        <input type="submit" value="Search" className="formSubmitButton"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;