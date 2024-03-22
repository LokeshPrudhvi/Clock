
setInterval((clock) => {
  
    let date = new Date();
    
    let hour= date.getHours();
    const updatehour = document.getElementsByClassName("hrs")[0];
    if (hour<10){
      updatehour.innerText = "0"+hour;
    }
    else{updatehour.innerText = hour};  
    
    
    let min= date.getMinutes();
    const updatemin = document.getElementsByClassName("min")[0];
    if (min<10){
      updatemin.innerText = "0"+min;
    }
    else{updatemin.innerText = min;};  
    
    
    let sec= date.getSeconds();
    const updatesec = document.getElementsByClassName("sec")[0];
    if (sec<10){
      updatesec.innerText = "0"+sec;
    }
    else{updatesec.innerText = sec};  
    
    }, 1000);