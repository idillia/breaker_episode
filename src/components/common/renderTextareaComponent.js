'use strict';

import React, {Component}            from 'react';

class RenderField extends Component {
  componentDidMount() {
    const {focusField} = this.props;
    if (this.refs[focusField]) {
      this.refs[focusField].focus();
    }
  }

  render() {
    const {input, label, type, className, meta: {touched, error} } = this.props;

    let wrapperClass = 'form-group';
    if (touched && error) {
      wrapperClass = `${wrapperClass} error`;
    }

    return (
      <div className={wrapperClass}>
        <label>{label}</label>
        <div className={''}>
          <textarea rows="4" cols="50" {...input} placeholder={label} type={type} className={className} ref={input.name} ></textarea>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  }
}


export default RenderField;