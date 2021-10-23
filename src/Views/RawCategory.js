import React, { Component } from "react";
import Card from "../components/Card";

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
          label: "Dinning",
          value: false,
        },
        {
          label: "Entertainment",
          value: false,
        },
        {
          label: "Shopping",
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

  handleAccountChange = (event, index) => {
    let account = [...this.state.account];
    account[index].value = !account[index].value;
    this.setState({
      account: account,
    });
  };
  handletTimeChange = (event, index) => {
    let time = [...this.state.time];
    time[index].value = !time[index].value;
    this.setState({
      time: time,
    });
  };
  handleACategoryChange = (event, index) => {
    let categories = [...this.state.categories];
    categories[index].value = !categories[index].value;
    this.setState({
      categories: categories,
    });
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
                <h3>Account</h3>
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
            {/* {this.state.transactions.map((transaction,index) =>{
                  return(
                      <Card transaction={transaction}>
                  )
              })} */}
            <div className="row">
              {this.state.transactions.map((transaction, index) => {
                return (
                  <div
                    className="col-md-12"
                    style={{ marginBottom: "10px" }}
                    key={index}
                  >
                    <Card transaction={transaction}></Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RawCategory;
