function Split(forwardArray, behindArray) {
  this.forwardArray = forwardArray;
  this.behindArray = behindArray;
}

Split.splitBarcodes = function(inputs) {
  var inputsArray = [];
  for(var i = 0; i < inputs.length; i++) {
    inputsArray.push(inputs[i].split('-'));
  }
  return inputsArray;
  //console.log(inputsArray[5][1]);
};
