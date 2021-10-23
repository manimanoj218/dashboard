import React, { Component } from "react";
import Card from "../components/Card";
import axios from "axios";

class RawCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: [
        {
          label: "Expense",
          value: false,
        },
        {
          label: "Income",
          value: false,
        },
      ],
      time: [
        {
          label: "Quaterly",
          value: false,
        },
        {
          label: "Monthly",
          value: false,
        },
        {
          label: "Daily",
          value: false,
        },
      ],
      categories: [
        {
          label: "Mis",
          value: false,
        },
        {
          label: "household",
          value: false,
        },
        {
          label: "travel",
          value: false,
        },
        {
          label: "hotel",
          value: false,
        },
      ],
      transactions: [
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
        {
          title: "Transaction 1",
          description: "Transaction Data",
        },
      ],
    };
  }

  async componentDidMount() {
    // await this.getTransactions();
  }

  getTransactions = async () => {
    try {
      const headers = {
        // Authorization: "Bearer my-token",
        // "My-Custom-Header": "foobar",
      };
      await axios
        .get("https://dbs.h2h/v1/transactions/category", { headers })
        .then((response) => {
          console.log("response", response);
          this.setState({ transactions: response.data.data });
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  handleAccountChange = (event, index) => {
    let account = [...this.state.account];
    let newAccount = account.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: true,
        };
      } else {
        return {
          ...item,
          value: false,
        };
      }
    });
    this.setState({
      account: newAccount,
    });
  };

  handletTimeChange = (event, index) => {
    let time = [...this.state.time];
    let newTimes = time.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: true,
        };
      } else {
        return {
          ...item,
          value: false,
        };
      }
    });
    this.setState({
      time: newTimes,
    });
  };

  handleACategoryChange = (event, index) => {
    let categories = [...this.state.categories];
    let newCategories = categories.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: true,
        };
      } else {
        return {
          ...item,
          value: false,
        };
      }
    });
    this.setState(
      {
        categories: newCategories,
      },
      () => {
        this.handleFilters();
      }
    );
  };

  handleFilters = () => {
    let { categories, account, time } = this.state;
    let categoryType =
      categories.length > 0
        ? categories.filter((item) => item.value === true)
        : "";
    let timeType =
      time.length > 0 ? time.filter((item) => item.value === true) : "";

    let accountType =
      account.length > 0 ? account.filter((item) => item.value === true) : "";
    console.log("data", categoryType, timeType, accountType);
  };

  render() {
    return (
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-md-2">
            <div className="card shadow mh-100">
              <div className="card-body py-2">
                <h3>Account</h3>
                {this.state.account.map((acc, index) => {
                  return (
                    <div className="form-check mb-2 mr-sm-2" key={index}>
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          name={acc.label}
                          checked={acc.value}
                          value={acc.value}
                          onChange={(e) => this.handleAccountChange(e, index)}
                          type="checkbox"
                        />{" "}
                        {acc.label}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="card-body py-2">
                <h3>Time</h3>
                {this.state.time.map((time, index) => {
                  return (
                    <div className="form-check mb-2 mr-sm-2" key={index}>
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          checked={time.value}
                          name={time.label}
                          value={time.value}
                          onChange={(e) => this.handletTimeChange(e, index)}
                          type="checkbox"
                        />{" "}
                        {time.label}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="card-body py-2">
                <h3>Categories</h3>
                {this.state.categories.map((category, index) => {
                  return (
                    <div className="form-check mb-2 mr-sm-2" key={index}>
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          checked={category.value}
                          name={category.label}
                          value={category.value}
                          onChange={(e) => this.handleACategoryChange(e, index)}
                          type="checkbox"
                        />{" "}
                        {category.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-10">            
            <div className="row">
              {this.state.transactions.length > 0
                ? this.state.transactions.map((transaction, index) => {
                    return (
                      <div
                        className="col-md-12"
                        style={{ marginBottom: "10px" }}
                        key={index}
                      >
                        <Card transaction={transaction}></Card>
                      </div>
                    );
                  })
                : "No Transactions Data"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RawCategory;
