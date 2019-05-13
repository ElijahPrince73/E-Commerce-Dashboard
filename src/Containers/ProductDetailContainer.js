import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
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
import ListImages from '../Components/Forms/ListImages';
import PricingForm from '../Components/Forms/PricingForm';
import InventoryForm from '../Components/Forms/Inventory';
import ShippingForm from '../Components/Forms/ShippingForm';

import * as productActionsCreators from '../Actions/products';
import * as categoriesActionsCreators from '../Actions/categories';


class ProductDetailContainer extends React.Component {
  static defaultProps = {
    product: {},
    categories: [],
  }

    state = {
      value: 0,
      productName: '',
      productDescription: '',
      priceTaxExcl: '',
      priceTaxIncl: '',
      taxRate: '',
      price: '',
      sku: '',
      quantity: '',
      width: '',
      height: '',
      depth: '',
      weight: '',
      shippingFee: '',
      category: [],
      categories: [],
      pictures: [],
      images: [],
    };

    componentWillMount() {
      const { getProduct } = this.props.productActions;
      const productId = this.props.productId;
      const { getCategories } = this.props.categoryActions;
      getProduct(productId);
      getCategories();
    }


    componentWillReceiveProps(props) {
      if (props.product !== undefined) {
        const {
          categories,
          price,
          images,
          productDescription,
          productName,
          sku,
          priceTaxExcl,
          priceTaxIncl,
          taxRate,
          weight,
          width,
          height,
          depth,
          shippingFee,
          quantity,
        } = props.product;

        this.setState({
          category: categories,
          categories,
          price,
          images,
          productDescription,
          productName,
          sku,
          priceTaxExcl,
          priceTaxIncl,
          taxRate,
          width,
          weight,
          height,
          depth,
          shippingFee,
          quantity,
        });
      }
    }

    handleCloseNotification = () => {
      const { closeNotification } = this.props.productActions;
      closeNotification();
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
      const { updateProduct } = this.props.productActions;
      const productId = this.props.productId;
      updateProduct(productId, this.state);
    }

    handleDrop(pictureFiles) {
      this.setState({
        pictures: this.state.pictures.concat(pictureFiles),
      });
    }

    render() {
      const { value } = this.state;
      const { categories } = this.props;
      console.log(this.state);
      return (
        <div>
          <form name="file" onSubmit={this.handleSubmit.bind(this)}>
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
              message={
                <span id="message-idproductName">Product Created</span>
              }
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
                      handleChangeSelect={this.handleChangeSelect.bind(
                        this,
                      )}
                      handleInputChange={this.handleInputChange.bind(
                        this,
                      )}
                      onSubmit={this.handleSubmit}
                      value={this.state.category}
                      categories={categories}
                      category={this.state.category}
                      productName={this.state.productName}
                      productDescription={this.state.productDescription}
                    />
                  </div>
                )}
                {value === 1 && (
                  <div className="product-info">
                    <ListImages images={this.state.images} />
                  </div>
                )}
                {value === 2 && (
                  <div className="product-info">
                    <PricingForm
                      handleInputChange={this.handleInputChange.bind(
                        this,
                      )}
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
                      handleInputChange={this.handleInputChange.bind(
                        this,
                      )}
                      sku={this.state.sku}
                      quantity={this.state.quantity}
                    />
                  </div>
                )}
                {value === 4 && (
                  <div className="product-info">
                    <ShippingForm
                      handleInputChange={this.handleInputChange.bind(
                        this,
                      )}
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

ProductDetailContainer.propTypes = {
  productActions: PropTypes.object.isRequired,
  categoryActions: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
  product: PropTypes.object,
  categories: PropTypes.array,
  open: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    product: state.productsList.product,
    open: state.productsList.open,
    categories: state.categoriesList.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActionsCreators, dispatch),
    categoryActions: bindActionCreators(categoriesActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailContainer);
