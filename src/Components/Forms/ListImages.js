import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const ImageUploaderForm = (props) => {
  console.log(props.images);
  return (
    <Grid container spacing={16} justify="center" className="p-4">
      {props.images.map(({ url, _id }) => (
        <Grid item xs={2}>
          <div className="listed-image-container">
            <img className="listed-image" src={url} key={_id} alt={_id} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

ImageUploaderForm.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageUploaderForm;
