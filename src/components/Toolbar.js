import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.data,
      dateMs: true, 
      title: true
    }
  }

  sort(type) {
    const { update, data } = this.props;
    const isSorted = this.state[type];
    let direction = isSorted ? 1 : -1;
    const sorted = [].slice.call(data).sort((a, b) => {
      if (a[type] === b[type]) { return 0; };
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.setState ({
      [type]: !isSorted
    })

    update({
      tasks: sorted,
    });
  }

  reset() {
    this.props.update({
      tasks: this.state.tasks,
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