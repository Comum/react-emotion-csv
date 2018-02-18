import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmitUserForm(this.refs.userName.value);
    }

    render() {
        return (
            <div className="formWrapper">
                <form action="" className="formContainer" onSubmit={this.handleSubmit}>
                    <div className="formField">
                        <label htmlFor="userName" className="labelInlineField">Value: </label>
                        <input type="text" name="userName" id="userName" ref="userName"/>
                    </div>
                    <div className="formField">
                        <input type="submit" value="Search"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;