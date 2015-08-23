function returnAllArgs() {
  var argsArray = [];
  for (var i = 0; i < arguments.length; i += 1) {
    argsArray.push(arguments[i]);
  }
  return argsArray.join(",");
}

console.log(returnAllArgs("first", "second", "third"));
