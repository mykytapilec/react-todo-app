import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {sortTitle,sortDate,reset} = this.props;

    return (
      <div className="toolbar">
        <button 
          className="sortTitle" 
          onClick={sortTitle}
          >
            Sort by title
        </button>
        <button 
          className="sortDate" 
          onClick={sortDate}
          >
            Sort by date
        </button>
        <button 
          className="reset" 
          onClick={reset}
          >
            Reset
        </button>
      </div>
    );
  }
}