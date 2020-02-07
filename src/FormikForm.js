import React, {Component} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

class FormikForm extends Component {

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Required')
  });

  state = {};

  onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <Formik
        initialValues={{email: ''}}
        onSubmit={this.onSubmit}
        validationSchema={this.validationSchema}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{display: 'block'}}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

            </form>
          );
        }}
      </Formik>
    );
  }
}

export default FormikForm;
