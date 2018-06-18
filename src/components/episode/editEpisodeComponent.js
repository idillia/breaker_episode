'use strict';

import React            from 'react';
import {Field, reduxForm}                       from 'redux-form';
import RenderField                              from '../common/renderFieldComponent';
import RenderTextarea                             from '../common/renderTextareaComponent';
import {connect}                           from 'react-redux';
import moment from 'moment';

const validate = (values) => {
  const errors = {};

  if (!values.title){
    errors.title = 'Required';
  }

  if (!values.description){
    errors.description = 'Required';
  } 
  return errors;
};

const EditProfileForm = ({handleSubmit, onSubmit, errors}) => {
  if (errors !== undefined) {errors = errors.data;}

  return (
    <div className='episode-details'>
      <div className=''>
        <h3>Edit Episode</h3>
      </div>
      <div className=''>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field name='title' component={RenderField} type='text' placeholder='Title' className='form-control' label='Title' tabIndex='1' focusField='title'/>
            <Field name='description' component={RenderTextarea} type='text' placeholder='Description' className='form-control' label='Description' tabIndex='1' focusField='description'/>
            {errors &&errors.map((error, i) => {return <div key={i} className='error'><span>{error.msg}</span></div>;})}
            <button className='btn sb-soundplayer-btn' tabIndex='6'>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {episodeDataState: {episode}} = state;
  let dateFormated = moment(episode.published_at).format('MMMM Do YYYY, h:mm:ss a'); 

  return {
    initialValues: {
      title: episode.episode.title,
      published: dateFormated,
      description: episode.episode.stripped_description,
      artwork: episode.episode.image_url
    }
  };
};

// <Field name='artwork' component={RenderField} type='text' placeholder='Artwork' className='form-control' label='Artwork' tabIndex='1' focusField='artwork'/>


export default connect(mapStateToProps)(reduxForm({form: 'editProfileForm', validate}, mapStateToProps)(EditProfileForm));

