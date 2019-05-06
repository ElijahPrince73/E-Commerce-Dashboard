import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Hidden from '@material-ui/core/Hidden';
import * as actions from '../Actions/orders';

class Orders extends Component {
    state = {
      search: '',
      anchorEl: null,
      remove: false,
      pageSize: 10,
    };

    componentWillMount() {
      this.props.getOrders();
    }

    changePageSize(pageSize) {
      this.setState({ pageSize });
    }

    render() {
      const { orders } = this.props;
      const columns = [
        {
          Header: 'Order Number',
          accessor: 'orderNumber',
          Cell: row => (
            <div className="cell-flex">
              <p className="pl-2">
                {row.original.orderNumber}
              </p>
            </div>
          ),
        },
        {
          Header: 'Email',
          accessor: 'email',
          Cell: row => (
            <div className="cell-flex">
              <p className="pl-1">{row.original.email}</p>
            </div>
          ),
          resizable: false,
        },
        {
          Header: 'Total Amount',
          accessor: 'totalAmount',
          Cell: row => (
            <div className="cell-flex">
              <p>{row.original.totalAmount}</p>
            </div>
          ),
          resizable: false,
        },
        {
          Header: 'Items',
          accessor: 'items',
          Cell: row => (
            <div className="cell-flex">
              <p>{row.original.items}</p>
            </div>
          ),
          resizable: false,
        },
      ];

      const data = orders;

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
                <ShoppingBasketIcon />
              </Grid>
              <Hidden smDown>
                <Grid item xs={3}>
                  <h2 className="m-0">Orders</h2>
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
            <Grid item xs={3} className="text-right" />
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

Orders.propTypes = {
  getOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return state.orderList;
}

export default connect(
  mapStateToProps,
  actions,
)(Orders);
