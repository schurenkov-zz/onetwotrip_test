import React from "react";
import { connect } from "react-redux";
import * as api from "../api/index-api";

import { FormGroup, ControlLabel, FormControl, Grid } from "react-bootstrap";

import Select from "./Select.jsx";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: "all"
    };
  }

  componentDidMount() {
    api.getJsonLoad();
  }

  changeSelect(e) {
    this.setState({ select: e.target.value });
  }

  render() {
    const { flights } = this.props;
    const { select } = this.state;
    const options = this._uniq(flights);
    const list = this._sortList(flights);
    return (
      <Grid>
        <Select options={options} onSelect={this.changeSelect.bind(this)} />
        <List list={select == "all" ? flights : list} />
      </Grid>
    );
  }

  _uniq(array) {
    let aviaNames = {};

    return array.filter(function(value) {
      if (value.carrier in aviaNames) {
        return false;
      } else {
        aviaNames[value.carrier] = true;
        return true;
      }
    });
  }

  _sortList(array) {
    const { select } = this.state;

    return array.filter(function(value) {
      return select == value.carrier;
    });
  }
}

export default connect(
  state => ({
    flights: state.indexState.flights
  }),
  null
)(App);
