import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ProductBasicInfo from '../Components/Forms/ProductBasicInfo';

function TabContainer(props) {
  return <div className="product-info">{props.children}</div>;
}

class NewProductContainer extends React.Component {
  state = {
    value: 0,
    productName: '',
    productDescription: '',
    category: [],
    categories: [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ],
  };

  handleChangeInput = (event, value) => {
    this.setState({ value });
  };

  handleChangeSelect(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit() {

  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={24}
          className="my-4"
        >
          <div className="products-background" />
          <Grid container item xs={3} className="products-title">
            <Grid item xs={1}>
              <ArrowBack />
            </Grid>
            <Grid item xs={5} className="mt-1">
              <Link to="/products" className="back-link">
                <span>Products</span>
              </Link>
              <h2 className="m-0 mt-3 mb-1">New Product</h2>
              <span>Product Detail</span>
            </Grid>
          </Grid>

          <Grid item xs={3} className="text-right">
            <Button variant="contained">SAVE</Button>
          </Grid>
          <div className="new-product-container">
            <AppBar position="static" className="new-product-tab-bar">
              <Tabs
                value={value}
                onChange={this.handleChange}
                classes={{ indicator: 'indicator' }}
                variant="scrollable"
              >
                <Tab label="Basic Info" className="tab-label" />
                <Tab label="Product Images" className="tab-label" />
                <Tab label="Pricing" className="tab-label" />
                <Tab label="Inventory" className="tab-label" />
                <Tab label="Shipping" className="tab-label" />
              </Tabs>
            </AppBar>

            {value === 0 && (
              <div className="product-info">
                <ProductBasicInfo
                  handleChangeSelect={this.handleChangeSelect.bind(this)}
                  handleInputChange={this.handleChangeInput.bind(this)}
                  onSubmit={this.handleSubmit}
                  value={this.state.category}
                  categories={this.state.categories}
                  category={this.state.category}
                  productName={this.state.productName}
                  productDescription={this.state.productDescription}
                />
              </div>
            )}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
          </div>
        </Grid>
      </div>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewProductContainer;
