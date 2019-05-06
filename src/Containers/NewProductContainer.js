import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// Forms
import ProductBasicInfo from '../Components/Forms/ProductBasicInfo';
import ImageUploader from '../Components/Forms/ImageUploader';
import PricingForm from '../Components/Forms/PricingForm';
import InventoryForm from '../Components/Forms/Inventory';
import ShippingForm from '../Components/Forms/ShippingForm';

import * as actions from '../Actions/products';

class NewProductContainer extends React.Component {
  state = {
    value: 0,
    productName: '',
    productDescription: '',
    priceTaxExcl: '',
    priceTaxIncl: '',
    taxRate: '',
    price: '',
    sku: '',
    quanity: '',
    width: '',
    height: '',
    depth: '',
    weight: '',
    shippingFee: '',
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
    pictures: [],
  };

  handleCloseNotification = () => {
    this.props.closeNotification();
  };

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleChangeSelect(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { pictures } = this.state;

    const data = new FormData();

    // eslint-disable-next-line array-callback-return
    pictures.map((picture) => {
      data.append('file', picture);
    });

    data.append('text', JSON.stringify(this.state));

    this.props.createProduct(data);
  }

  handleDrop(pictureFiles) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} name="file">
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={this.props.open}
            onClose={this.handleCloseNotification.bind(this)}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Product Created</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleCloseNotification.bind(this)}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={24}
            className="my-4"
          >
            <div className="products-background" />
            <Grid container item xs={6} className="products-title">
              <Grid item xs={1}>
                <ArrowBack />
              </Grid>
              <Grid item xs={10} className="mt-1">
                <Link to="/products" className="back-link">
                  <span>Products</span>
                </Link>
                <h2 className="m-0 mt-3 mb-1">New Product</h2>
                <span>Product Detail</span>
              </Grid>
            </Grid>

            <Grid item xs={6} className="text-right">
              <Button variant="contained" type="submit">
                SAVE
              </Button>
            </Grid>
            <Grid item xs={12} className="new-product-container">
              <AppBar position="static" className="new-product-tab-bar">
                <Tabs
                  value={value}
                  onChange={this.handleChangeTab}
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
                    handleInputChange={this.handleInputChange.bind(this)}
                    onSubmit={this.handleSubmit}
                    value={this.state.category}
                    categories={this.state.categories}
                    category={this.state.category}
                    productName={this.state.productName}
                    productDescription={this.state.productDescription}
                  />
                </div>
              )}
              {value === 1 && (
                <div className="product-info">
                  <ImageUploader onDrop={this.handleDrop.bind(this)} />
                </div>
              )}
              {value === 2 && (
                <div className="product-info">
                  <PricingForm
                    handleInputChange={this.handleInputChange.bind(this)}
                    priceTaxExcl={this.state.priceTaxExcl}
                    priceTaxIncl={this.state.priceTaxIncl}
                    taxRate={this.state.taxRate}
                    price={this.state.price}
                  />
                </div>
              )}
              {value === 3 && (
                <div className="product-info">
                  <InventoryForm
                    handleInputChange={this.handleInputChange.bind(this)}
                    sku={this.state.sku}
                    quanity={this.state.quanity}
                  />
                </div>
              )}
              {value === 4 && (
                <div className="product-info">
                  <ShippingForm
                    handleInputChange={this.handleInputChange.bind(this)}
                    width={this.state.width}
                    height={this.state.height}
                    depth={this.state.depth}
                    weight={this.state.weight}
                    shippingFee={this.state.shippingFee}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

NewProductContainer.propTypes = {
  createProduct: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  closeNotification: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state.productsList;
}

export default connect(
  mapStateToProps,
  actions,
)(NewProductContainer);
