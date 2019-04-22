import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const CategoryBasicInfo = props => (
  <div className="ml-3 pb-3">
    <Grid container alignItems="flex-start" spacing={24}>
      <Grid item xs={8}>
        <TextField
          label="Category Name"
          type="text"
          name="categoryName"
          variant="outlined"
          margin="normal"
          onChange={props.handleInputChange}
          value={props.categoryName}
          required
          fullWidth
        />
        <TextField
          label="Catgory Description*"
          type="text"
          name="categoryDescription"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.categoryDescription}
          fullWidth
          multiline
        />
      </Grid>
    </Grid>
  </div>
);

CategoryBasicInfo.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryDescription: PropTypes.string.isRequired,
};

export default CategoryBasicInfo;
