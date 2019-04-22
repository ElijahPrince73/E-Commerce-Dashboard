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
import CategoryBasicInfo from '../Components/Forms/CategoryBasicInfo';

import * as actions from '../Actions/categories';

class NewCategoryContainer extends React.Component {
    state = {
      value: 0,
      categoryName: '',
      categoryDescription: '',
    };

    handleCloseNotification = () => {
      this.props.closeNotification();
    };

    handleInputChange(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value,
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.createCategory(this.state);
    }

    render() {
      const { value } = this.state;
      console.log(this.props);

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
              message={<span id="message-id">Category Created</span>}
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
                    <span>Categories</span>
                  </Link>
                  <h2 className="m-0 mt-3 mb-1">New Category</h2>
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
                  </Tabs>
                </AppBar>

                {value === 0 && (
                <div className="product-info">
                  <CategoryBasicInfo
                    handleInputChange={this.handleInputChange.bind(this)}
                    onSubmit={this.handleSubmit}
                    value={this.state.category}
                    categories={this.state.categories}
                    category={this.state.category}
                    categoryName={this.state.categoryName}
                    categoryDescription={this.state.categoryDescription}
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

NewCategoryContainer.propTypes = {
  createCategory: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  closeNotification: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state.categoriesList;
}

export default connect(
  mapStateToProps,
  actions,
)(NewCategoryContainer);
