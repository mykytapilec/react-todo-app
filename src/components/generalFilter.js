function generalFilter(tasks, text, time, isTitle, isDateMs, isSortTitleActive, isSortDateMsActive){

  function searchByTextAndTime (data) {
    if(!text && !time){
      return data;
    }
    if(text && !time){
      return data.filter(task => task.title.toLowerCase().includes(text));    
    }
    if(!text && time){
      return data.filter(task => task.dateMs === time);
    }
    if(text && time){
      return data.filter(task => task.title.toLowerCase().includes(text)).filter(task => task.dateMs === time);
    } 
  }

  function sort (direction){
    return [].slice.call(tasks).sort((a, b) => {
      if (a["title"] === b["title"]) { return 0; };
      return a["title"] > b["title"] ? direction : direction * -1;
    });
  }


  if(!isSortTitleActive && !isSortDateMsActive && !text && !time){
    return tasks;
  }

  if(!isSortTitleActive && !isSortDateMsActive){
    return searchByTextAndTime(tasks);
  }

  if(isTitle && isSortTitleActive){
    return searchByTextAndTime(sort(1));
  }

  if(!isTitle && isSortTitleActive){
    return searchByTextAndTime(sort(-1));
  }

  if(isDateMs && isSortDateMsActive){
    return searchByTextAndTime(sort(1));
  }

  if(!isDateMs && isSortDateMsActive){
    return searchByTextAndTime(sort(-1));
  }

}

export default generalFilter;