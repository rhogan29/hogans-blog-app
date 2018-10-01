import React, { Component } from 'react';
//bring in redux form tools 
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

    renderField(field) {

        const className = `form-group ${field.meta.touched && field.meta.error ? "has-danger" : ""}`;

        return (
            <div className={className}>
            <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        // this === component
        console.log(values);
    }

    render() {
        // this is redux form, it checks if things are ok to submit
        const { handleSubmit } = this.props;

        return (
            // handleSubmit(redux form, checks if things are good to go, if so, it runs onSubmit.)
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Post title" name="title" component={this.renderField} />
                <Field label="Post categories" name="categories" component={this.renderField} />
                <Field label="Post content" name="content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Save Post</button>
                <Link to="/" className="btn btn-danger">Cancel</Link> 
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