'use strict';

import React            from 'react';
import {Field, reduxForm}                       from 'redux-form';
import RenderField                              from '../common/renderFieldComponent';
import {connect}                           from 'react-redux';

const EditProfileForm = ({handleSubmit, onSubmit, errors}) => {
  return (
    <div className='profile-details centered'>
      <div className='area-container_banner'>
        <i className='fa fa-user fa-4x'></i>
        <h2>Edit Episode</h2>
      </div>
      <div className='area-container_body'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field name='title' component={RenderField} type='text' placeholder='Title' className='form-control' label='Title' tabIndex='1' focusField='title'/>
            <Field name='artwork' component={RenderField} type='text' placeholder='Artwork (optional)' className='form-control' label='Artwork' tabIndex='1' focusField='artwork'/>
            <Field name='published' component={RenderField} type='text' placeholder='Published' className='form-control' label='Published' tabIndex='1' focusField='published'/>
            <Field name='description' component={RenderField} type='text' placeholder='Description (optional)' className='form-control' label='Description' tabIndex='1' focusField='description'/>
            {errors &&errors.map((error, i) => {return <div key={i} className='error'><span>{error.msg}</span></div>;})}
            <button className='btn btn-primary' tabIndex='6'>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {episodeDataState: {episode}} = state;
  return {
    initialValues: {
      title: episode.title,
      published: episode.published_at,
      description: episode.stripped_description,
      artwork: episode.image_url
    }
  };
};


export default connect(mapStateToProps)(reduxForm({
  form: 'editProfileForm',
},
mapStateToProps
)(EditProfileForm));

