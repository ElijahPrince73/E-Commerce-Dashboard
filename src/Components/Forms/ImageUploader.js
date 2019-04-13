import React from 'react';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';

const ImageUploaderForm = props => (
  <ImageUploader
    withIcon
    buttonText="Choose images"
    onChange={props.onDrop}
    imgExtension={['.jpg', '.gif', '.png', '.gif']}
    maxFileSize={5242880}
    withPreview
    buttonClassName="upload-image-button"
    label="Max file size: 5mb, accepted: JPG | GIF | PNG"
  />
);

ImageUploaderForm.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default ImageUploaderForm;
