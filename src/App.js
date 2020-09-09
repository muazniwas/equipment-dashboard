import React, { Component } from 'react';
import { fetchAssets } from './api/assets';
import Header from './components/Header';
import AssetSummary from './components/AssetSummary';
import AssetsGraph from './components/AssetsGraph';
import { setValues } from './utils/utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operational: 0,
      nonOperational: 0,
      dataPoints: [],
    }
  }

  componentDidMount() {
    let max = 100;
    let lastRowId = 0;

    this.fetchAndSetVals(max, lastRowId);
  }

  fetchAndSetVals(max, lastRowId) {
    fetchAssets(max, lastRowId).then(res => {
      const current = this.state;
      const updated = setValues(current, res);
      this.setState({
        operational: updated.operational,
        nonOperational: updated.nonOperational,
        dataPoints: updated.dataPoints,
      })
      const resultLength = res.length;
      lastRowId = parseInt(res[resultLength - 1].__rowid__);
      if (resultLength === 100) {
        this.fetchAndSetVals(max, lastRowId);
      }
    });
  }

  render() {
    const { operational, nonOperational, dataPoints } = this.state;

    return (
      <div className="App">
        <Header />
        <AssetSummary operational={operational} nonOperational={nonOperational} />
        <AssetsGraph dataPoints={dataPoints} />
      </div>
    );
  }
}

export default App;
