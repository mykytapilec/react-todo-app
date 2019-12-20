import React from 'react';

export default ({ tasks, update }) => {

  const textSearch = e => {

    const text = e.target.value.toLowerCase();
 
    const filter = tasks.filter(task => {
      return task.title.toLowerCase().includes(text);
    });

    update({
      tasks: filter,
      textSearch: true
    });

    if(e.target.value === ""){
      update({
        tasks: tasks,
        textSearch: false
      });
    }
    
  };

  const dateSearch = e => {

    const time = Date.parse(e.target.value)/86400000;

    const filter = tasks.filter(task => {
      return task.dateMs === time;
    });

    update({
      tasks: filter,
      dateSearch: true
    });

    if(e.target.value ===""){
      update({
        tasks: tasks,
        dateSearch: false
      });
    }

  };

  return (
    <div className="task-filter">
      <input
        placeholder="TEXT SEACH"
        defaultValue=""
        onChange={textSearch}
        type="text"
      />
      <input
        type="date" 
        id="start" 
        name="trip-start"
        defaultValue=""
        onChange={dateSearch}
        min="2018-01-01" 
        max="2020-12-31"
      />
    </div> 
  );
};  

