import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
// Forms
import ProductBasicInfo from '../Components/Forms/ProductBasicInfo';
import ImageUploader from '../Components/Forms/ImageUploader';

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
    pictures: [],
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

  handleSubmit() {

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
            <Button variant="contained">SAVE</Button>
          </Grid>
          <div className="new-product-container">
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
