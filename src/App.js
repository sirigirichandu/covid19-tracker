import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
