import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.sorted = { dateMs: true, title: true };
  }

  sort(type) {
    const { update, data } = this.props;
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;
    const sorted = [].slice.call(data).sort((a, b) => {
      if (a[type] === b[type]) { return 0; };
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.sorted[type] = !isSorted;

    update({
      tasks: sorted,
    });
  }

  reset() {
    this.props.update({
      tasks: this.props.initialData,
    });
  }

  render() {
    return (
      <div className="toolbar">
        <button className="sortTitle" onClick={() => this.sort('title')}>
          Sort by title
        </button>
        <button className="sortDate" onClick={() => this.sort('dateMs')}>
          Sort by date
        </button>
        <button className="reset" onClick={this.reset.bind(this)}>
          Reset
        </button>
      </div>
    );
  }
}