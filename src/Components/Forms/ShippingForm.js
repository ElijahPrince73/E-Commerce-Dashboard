import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const InventoryForm = props => (
  <div className="p-3">
    <Grid container spacing={8}>
      <Grid item xs={4}>
        <TextField
          label="Width"
          type="number"
          name="width"
          variant="outlined"
          margin="normal"
          onChange={props.handleInputChange}
          value={props.width}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Height"
          type="number"
          name="height"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.height}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Depth"
          type="number"
          name="depth"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.depth}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Weight"
          type="number"
          name="weight"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.weight}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="fixed-width-input"
          label="Extra Shipping Fee"
          type="number"
          name="shippingFee"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.shippingFee}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          fullWidth
        />
      </Grid>
    </Grid>
  </div>
);

InventoryForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  depth: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  shippingFee: PropTypes.string.isRequired,
};

export default InventoryForm;
