import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class MonthPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: new Date(),
      end: new Date(),
    };
  }

  updateStartDate = (e) => {
    this.setState({ start: e });
    this.props.setStartDate(e);
  };

  updateEndtDate = (e) => {
    this.setState({ end: e });
    this.props.setStartDate(e);
  };

  render() {
    return (
      <div>
        <div className="start-date">
          <span>Start date</span>
          <DatePicker
            selected={this.state.start}
            onChange={this.updateStartDate}
            maxDate={new Date()}
            dateFormat="MMMM, yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
            showFourColumnMonthYearPicker
          />
        </div>

        <div className="end-date">
          <span>End date (if studies are done)</span>
          <DatePicker
            selected={this.state.end}
            onChange={this.updateEndtDate}
            minDate={this.state.start}
            maxDate={new Date()}
            dateFormat="MMMM, yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
            showFourColumnMonthYearPicker
          />
        </div>
      </div>
    );
  }
}

export default MonthPicker;
