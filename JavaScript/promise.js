// Promise base example
/*
function proBaseEg(a) {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a === "resolve")
        {
            resolve("This is a base Eg for resolve");
        }else if (a === 'reject'){
            reject("This is a base Eg for reject");
        }
    }, 1000);
  });
  console.log(
    prom
      .then((val) => {
        console.log(val);
      })
      .catch(val => {
        console.log(val);
      })
  );
}
proBaseEg("reject");
*/

// Real-time base example

isLocationFound = (loc, time) => {
  isLoc = "SKCET";
  t = 20000
  if (loc === isLoc && t <= time) {
    return true;
  } else {
    return false;
  }
};
function locationFinder() {
  time = 2000;
  loc = "SKCET";
  return new Promise((locFound, locNotFound) => {
    setTimeout(() => {
      if (isLocationFound(loc, time)) {
        locFound("Location Found");
      } else {
        locNotFound("Location Not Found");
      }
    }, time);
  });
}
locationFinder()
  .then((val) => {
    console.log(val);
  })
  .catch((val) => {
    console.log(val);
  });
