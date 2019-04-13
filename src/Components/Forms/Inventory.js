import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const InventoryForm = props => (
  <div className="ml-3 pb-3">
    <Grid container alignItems="flex-start" spacing={24}>
      <Grid item xs={8}>
        <form onSubmit={props.onSubmit}>
          <TextField
            label="SKU"
            type="text"
            name="sku"
            variant="outlined"
            margin="normal"
            onChange={props.handleInputChange}
            value={props.sku}
            required
            fullWidth
          />
          <TextField
            label="Quanity"
            type="number"
            name="quanity"
            variant="outlined"
            margin="normal"
            rows="5"
            onChange={props.handleInputChange}
            value={props.quanity}
            fullWidth
          />
        </form>
      </Grid>
    </Grid>
  </div>
);

InventoryForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sku: PropTypes.string.isRequired,
  quanity: PropTypes.string.isRequired,
};

export default InventoryForm;
