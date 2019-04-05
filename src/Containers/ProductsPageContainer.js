import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import * as actions from '../Actions/products';

class ProductsPage extends Component {
  state = {
    search: '',
  };

  componentWillMount() {
    this.props.getProducts();
  }

  redirectToProductDetail(info) {
    const { productId } = info.original;
    // Send user to product detail page
    console.log(productId);
  }


  render() {
    const columns = [
      {
        Header: '',
        minWidth: 30,
        accessor: 'image',
        sortable: false,
        Cell: (row) => {
          console.log(row);
          return (
            <div className="cell-image-container">
              {row.original.images[0] ? (
                <img
                  src={row.original.images[0].url}
                  alt=""
                  className="cell-image"
                />
              ) : (
                <div className="no-image" />
              )}
            </div>
          );
        },
      },
      {
        Header: 'Product Name',
        accessor: 'productName',

        Cell: row => (
          <div className="cell-flex">
            <p className="pl-2">
              {row.original.productName.length < 35
                ? row.original.productName
                : `${row.original.productName.substring(0, 35)}...`}
            </p>
          </div>
        ),
      },
      {
        Header: 'Categories',
        accessor: 'categories',
        Cell: row => (
          <div className="cell-flex">
            <p className="pl-1">{row.original.categories.toString()}</p>
          </div>
        ),
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: row => (
          <div className="cell-flex">
            <p>{row.original.price}</p>
          </div>
        ),
      },
      {
        Header: 'Sku',
        accessor: 'sku',
        Cell: row => (
          <div className="cell-flex">
            <p>{row.original.sku}</p>
          </div>
        ),
      },
    ];

    let data = this.props.products;

    if (data) {
      data = data.filter(
        row =>
          row.productName.includes(this.state.search)
        || row.category.includes(this.state.search)
        || String(row.age).includes(this.state.search),
      );
    }

    console.log(data);
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
              <ShoppingBasket />
            </Grid>
            <Grid item xs={3}>
              <h2 className="m-0">Products</h2>
            </Grid>
          </Grid>
          <Grid item xs={4} className="search-field">
            <Paper className="flex">
              <IconButton aria-label="Search">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search"
                className="flex search-input"
                value={this.state.search}
                onChange={e => this.setState({ search: e.target.value })}
              />
            </Paper>
          </Grid>
          <Grid item xs={3} className="text-right">
            <Button variant="contained">ADD NEW PRODUCT</Button>
          </Grid>
        </Grid>

        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          getTrProps={(state, rowInfo) => ({
            onClick: () => this.redirectToProductDetail(rowInfo),
          })}
        />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state.productsList;
}

export default connect(
  mapStateToProps,
  actions,
)(ProductsPage);
