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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import * as actions from '../Actions/products';

class ProductsPage extends Component {
  state = {
    search: '',
    anchorEl: null,
    selectAll: false,
    remove: false,
  };

  componentWillMount() {
    this.props.getProducts();
  }

  componentDidMount() {
    const data2 = [
      { one: 'hi0', two: 'two0', three: 'three0' },
      { one: 'hi1', two: 'two1', three: 'three1' },
      { one: 'hi2', two: 'two2', three: 'three2' },
      { one: 'hi3', two: 'two3', three: 'three3' },
      { one: 'hi4', two: 'two4', three: 'three4' },
      { one: 'hi5', two: 'two5', three: 'three5' },
      { one: 'hi6', two: 'two6', three: 'three6' },
      { one: 'hi7', two: 'two7', three: 'three7' },
      { one: 'hi8', two: 'two8', three: 'three8' },
    ];

    const checkedCopy = [];

    const selectAll = this.state.selectAll;

    data2.forEach(() => {
      checkedCopy.push(selectAll);
    });

    this.setState({
      data: data2,
      checked: checkedCopy,
      selectAll,
    });
  }

  redirectToProductDetail(info) {
    const { productId } = info.original;
    // Send user to product detail page
    console.log(productId);
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  selectAll = () => {
    const selectAll = !this.state.selectAll;

    this.setState({ selectAll });

    const checkedCopy = [];

    this.state.data.forEach(() => {
      checkedCopy.push(selectAll);
    });

    this.setState({
      checked: checkedCopy,
      remove: selectAll,
    });
  };

  handleSingleCheckboxChange = (index) => {
    const checkedCopy = this.state.checked;

    checkedCopy[index] = !this.state.checked[index];

    if (checkedCopy[index] === false) {
      this.setState({ selectAll: false });
    }

    this.setState({
      checked: checkedCopy,
      remove: checkedCopy[index],
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const columns = [
      {
        Header: () => (
          <Checkbox
            color="primary"
            onChange={this.selectAll}
            checked={this.state.selectAll}
          />
        ),
        Cell: row => (
          <Checkbox
            label=""
            checked={this.state.checked[row.index]}
            onChange={() => this.handleSingleCheckboxChange(row.index)}
            color="primary"
            className="checkbox-padding"
          />
        ),
        minWidth: 18,
        sortable: false,
        resizable: false,
      },
      {
        Header: () => (
          <div style={{ display: this.state.remove ? 'block' : 'none' }}>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              className="remove-pop-up"
            >
              <MenuItem onClick={this.handleClose}>
                <ListItemIcon className="m-0">
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText inset primary="Remove Item" />
              </MenuItem>
            </Menu>
          </div>
        ),
        resizable: false,
        minWidth: 30,
        accessor: 'image',
        sortable: false,
        Cell: row => (
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
        ),
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
        resizable: false,
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: row => (
          <div className="cell-flex">
            <p>{row.original.price}</p>
          </div>
        ),
        resizable: false,
      },
      {
        Header: 'Sku',
        accessor: 'sku',
        Cell: row => (
          <div className="cell-flex">
            <p>{row.original.sku}</p>
          </div>
        ),
        resizable: false,
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
              <ShoppingBasketIcon />
            </Grid>
            <Grid item xs={3}>
              <h2 className="m-0">Products</h2>
            </Grid>
          </Grid>
          <Grid item xs={4} className="search-field">
            <Paper className="flex">
              <IconButton aria-label="Search">
                <SearchIcon className="p-1" />
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
            <Button
              variant="contained"
              onClick={() => (window.location.href = '/products/new')}
            >
              ADD NEW PRODUCT
            </Button>
          </Grid>
        </Grid>

        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          // getTrProps={(state, rowInfo) => ({
          //   onClick: () => this.redirectToProductDetail(rowInfo),
          // })}
        />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return state.productsList;
}

export default connect(
  mapStateToProps,
  actions,
)(ProductsPage);
