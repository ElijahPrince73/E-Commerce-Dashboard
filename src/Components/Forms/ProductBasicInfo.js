import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ProductBasicInfo = (props) => {
  console.log(props);
  return (
    <div className="ml-3">
      <Grid container alignItems="flex-start" spacing={24}>
        <Grid item xs={8}>
          <form onSubmit={props.onSubmit}>
            <TextField
              label="Name"
              type="text"
              name="productName"
              variant="outlined"
              margin="normal"
              onChange={props.handleInputChange}
              value={props.productName}
              required
              fullWidth
            />
            <TextField
              label="Description*"
              type="text"
              name="productDescription"
              variant="outlined"
              margin="normal"
              rows="5"
              onChange={props.handleInputChange}
              value={props.productDescription}
              fullWidth
              multiline
            />
            <FormControl
              className="select"
              margin="normal"
            >
              <InputLabel htmlFor="select-multiple-checkbox">
                Select categories
              </InputLabel>
              <Select
                multiple
                value={props.category}
                onChange={props.handleChangeSelect}
                input={<Input id="select-multiple-checkbox" />}
                variant="outlined"
              >
                {props.categories.map(category => (
                  <MenuItem
                    key={category}
                    value={category}
                    classes={{
                      selected: 'dropdown-selected',
                    }}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

ProductBasicInfo.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default ProductBasicInfo;
