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
import CategoriesListIcon from '@material-ui/icons/List';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import Hidden from '@material-ui/core/Hidden';
import * as actions from '../Actions/categories';

class CategoriesContainer extends Component {
    state = {
      search: '',
      anchorEl: null,
      selectAll: false,
      remove: false,
      data: [],
      categoriesToBeDeleted: [],
      pageSize: 10,
    };

    componentWillMount() {
      this.props.getCategories();
      const data = [{ one: 'hi0', two: 'two0', three: 'three0' }];

      const checkedCopy = [];

      const selectAll = this.state.selectAll;

      data.forEach(() => {
        checkedCopy.push(selectAll);
      });

      this.setState({
        data,
        checked: checkedCopy,
        selectAll,
      });
    }


    // redirectToCatgoryDetail(info) {
    //   const { productId } = info.original;
    //   // Send user to product detail page
    //   console.log(productId);
    // }

    openRemoveToolTip = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    deleteProducts() {
      const { categoriesToBeDeleted } = this.state;
      this.props.deleteCategories(categoriesToBeDeleted);
      this.setState({ anchorEl: null });
    }

    selectAllProducts() {
      const selectAll = !this.state.selectAll;

      this.setState({ selectAll });

      const checkedCopy = [];
      // contains all the ids of the products we want to delete
      const categoriesToBeDeleted = [];

      this.props.categories.slice(0, this.state.pageSize).forEach((product) => {
        checkedCopy.push(selectAll);
        categoriesToBeDeleted.push(product._id);
      });

      this.setState({
        checked: checkedCopy,
        remove: selectAll,
        categoriesToBeDeleted,
      });
    }

    selectOneProduct(row) {
      const rowIndex = row.index;
      const checkedCopy = this.state.checked;

      checkedCopy[rowIndex] = !this.state.checked[rowIndex];

      if (checkedCopy[rowIndex] === false) {
        this.setState({ selectAll: false });
      }

      this.setState({
        checked: checkedCopy,
        remove: checkedCopy[rowIndex],
        categoriesToBeDeleted: [row.original._id],
      });
    }

    changePageSize(pageSize) {
      this.setState({ pageSize });
    }

    render() {
      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);

      const columns = [
        {
          Header: row => (
            <Checkbox
              color="primary"
              onChange={this.selectAllProducts.bind(this, row)}
              checked={this.state.selectAll}
            />
          ),
          Cell: row => (
            <Checkbox
              label=""
              checked={this.state.checked[row.index]}
              onChange={this.selectOneProduct.bind(this, row)}
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
            <div
              style={{
                display: this.state.remove ? 'block' : 'none',
                marginLeft: '25px',
              }}
            >
              <IconButton
                aria-label="More"
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true"
                onClick={this.openRemoveToolTip}
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.deleteProducts.bind(this)}
                className="remove-pop-up"
              >
                <MenuItem onClick={this.deleteProducts.bind(this)}>
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
        },
        {
          Header: 'Catgeory Name',
          accessor: 'categoryName',
          Cell: row => (
            <div className="cell-flex">
              <p className="pl-2">
                {row.original.categoryName}
              </p>
            </div>
          ),
        },
        {
          Header: 'Category Desc.',
          accessor: 'categoryDescription',
          Cell: row => (
            <div className="cell-flex">
              <p className="pl-1">{row.original.categoryDescription}</p>
            </div>
          ),
          resizable: false,
        },
        {
          Header: '# of Products',
          accessor: 'categories',
          Cell: row => (
            <div className="cell-flex">
              <p>{row.original.productList.length}</p>
            </div>
          ),
          resizable: false,
        },
      ];

      let data = this.props.categories;

      if (data) {
        data = data.filter(
          row =>
            row.categoryName.includes(this.state.search)
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
            spacing={8}
            className="my-4"
          >
            <div className="products-background" />
            <Grid container item xs={3} className="products-title">
              <Grid item xs={1}>
                <CategoriesListIcon />
              </Grid>
              <Hidden smDown>
                <Grid item xs={3}>
                  <h2 className="m-0">Categories</h2>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item xs={4} className="search-field">
              <Paper className="flex">
                <IconButton aria-label="Search">
                  <SearchIcon className="pl-1" />
                </IconButton>
                <InputBase
                  fullWidth
                  placeholder="Search"

                  value={this.state.search}
                  onChange={e => this.setState({ search: e.target.value })}
                />
              </Paper>
            </Grid>
            <Grid item xs={3} className="text-right">
              <Button
                variant="contained"
                onClick={() => (window.location.href = '/categories/new')}
              >
                            ADD NEW CATEGORY
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={10} md={12}>
            <ReactTable
              data={data}
              columns={columns}
              defaultPageSize={this.state.pageSize}
              onPageSizeChange={pageSize => this.changePageSize(pageSize)}
            />
          </Grid>
        </div>
      );
    }
}

CategoriesContainer.propTypes = {
  getCategories: PropTypes.func.isRequired,
  deleteCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return state.categoriesList;
}

export default connect(
  mapStateToProps,
  actions,
)(CategoriesContainer);
