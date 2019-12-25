function generalFilter(tasks, text, time, title, dateMs, sortTitleActive, sortDateMsActive){

  if(!sortTitleActive && !sortDateMsActive && !text && !time){
    return tasks;
  }

  if(!sortTitleActive && !sortDateMsActive){
    if(!text && !time){
      return tasks;
    }

    if(text && !time){
      return tasks.filter(task => task.title.toLowerCase().includes(text));   
    }

    if(!text && time){
      return tasks.filter(task => task.dateMs === time);
    }

    if(text && time){
      return tasks.filter(task => task.title.toLowerCase().includes(text)).filter(task => task.dateMs === time);
     }
  }

  if(title && sortTitleActive){
    let direction = 1;
    const sorted = [].slice.call(tasks).sort((a, b) => {
      if (a["title"] === b["title"]) { return 0; };
      return a["title"] > b["title"] ? direction : direction * -1;
    });

    if(!text && !time){
      return sorted;
    }

    if(text && !time){
      return sorted.filter(task => task.title.toLowerCase().includes(text));    
    }

    if(!text && time){
      return sorted.filter(task => task.dateMs === time);
    }

    if(text && time){
      return sorted.filter(task => task.title.toLowerCase().includes(text)).filter(task => task.dateMs === time);
    }
  }

  if(!title && sortTitleActive){
    let direction = -1;
    const sorted = [].slice.call(tasks).sort((a, b) => {
    if (a["title"] === b["title"]) { return 0; };
      return a["title"] > b["title"] ? direction : direction * -1;
    });

    if(!text && !time){
      return sorted;
    }

    if(text && !time){
      return sorted.filter(task => task.title.toLowerCase().includes(text));   
    }

    if(!text && time){
      return sorted.filter(task => task.dateMs === time);
    }

    if(text && time){
      return sorted.filter(task => task.title.toLowerCase().includes(text)).filter(task => task.dateMs === time);
    }
  }

  if(dateMs && sortDateMsActive){
    let direction = 1;
    const sorted = [].slice.call(tasks).sort((a, b) => {
      if (a["dateMs"] === b["dateMs"]) { return 0; };
      return a["dateMs"] > b["dateMs"] ? direction : direction * -1;
    });

    if(!text && !time){
      return sorted;
    }

    if(text && !time){
      return sorted.filter(task => task.title.toLowerCase().includes(text));  
    }

    if(!text && time){
      return sorted.filter(task => task.dateMs === time);
    }

    if(text && time){
      return sorted.filter(task => task.title.toLowerCase().includes(text)).filter(task => task.dateMs === time);
    }
  }

  if(!dateMs && sortDateMsActive){
    let direction = -1;
    const sorted = [].slice.call(tasks).sort((a, b) => {
      if (a["dateMs"] === b["dateMs"]) { return 0; };
      return a["dateMs"] > b["dateMs"] ? direction : direction * -1;
    });

    if(!text && !time){
      return sorted;
    }

    if(text && !time){
      return sorted.filter(task => task.title.toLowerCase().includes(text));   
    }

    if(!text && time){
      return sorted.filter(task => task.dateMs === time);
    }

    if(text && time){
      return sorted.filter(task => task.title.toLowerCase().includes(text)).filter(task => task.dateMs === time);
    }
  }

}


export default generalFilter;