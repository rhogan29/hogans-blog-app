import React, { Component } from 'react';
//bring in redux form tools 
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
            <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field label="Post title" name="title" component={this.renderField} />
                <Field label="Post categories" name="categories" component={this.renderField} />
                <Field label="Post content" name="content" component={this.renderField} />
            </form>
        );
    }
}

// pass this into reduxForm below
function validate(values) {
    const errors = {};

    //validate inputs
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some post content";
    }

    // if errors is empty, good to submit
    // if errors has any props, redux says form is invalid
    return errors;
}

export default reduxForm({
    validate,
    // this - form: - is the "name of the form"
    form: 'PostsNewForm'
})(PostsNew);