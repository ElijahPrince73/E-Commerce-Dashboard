import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PricingForm = props => (
  <div className="ml-3 pb-3">
    <Grid container alignItems="flex-start" spacing={24}>
      <Grid item xs={8}>
        <TextField
          label="Tax Excluded Price"
          type="number"
          name="priceTaxExcl"
          variant="outlined"
          margin="normal"
          onChange={props.handleInputChange}
          value={props.priceTaxExcl}
          required
          fullWidth
        />
        <TextField
          label="Tax Included Price"
          type="number"
          name="priceTaxIncl"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.priceTaxIncl}
          fullWidth
        />
        <TextField
          label="Tax Rate"
          type="number"
          name="taxRate"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.taxRate}
          fullWidth
        />
        <TextField
          label="Price"
          type="number"
          name="price"
          variant="outlined"
          margin="normal"
          rows="5"
          onChange={props.handleInputChange}
          value={props.price}
          fullWidth
          required
        />
      </Grid>
    </Grid>
  </div>
);

PricingForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  priceTaxExcl: PropTypes.string.isRequired,
  priceTaxIncl: PropTypes.string.isRequired,
  taxRate: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default PricingForm;
