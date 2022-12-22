

module.exports.get_Date = function(){
const today= new Date();
const options={ // Js object
  weekday:"long",
  day:"numeric",
  month:"long"
};
return day = today.toLocaleDateString("en-US", options);

}

module.exports.get_Day = function(){
const today= new Date();
const options={ // Js object
  weekday:"long"
};

return day = today.toLocaleDateString("en-US", options);

}
console.log(module.exports);
