function getFirstSelector(selector){
  var firstSelector = document.querySelector(selector);
  return firstSelector
}
    
  
  function nestedTarget(){
    var nested = document.getElementById(nested);
    var myTarget = nested.querySelector('.target');
    return myTarget;
  }
  
  function increaseRankBy(n){
    var list = document.querySelectorAll('.rankedList')
    var list.textContent = parseInt(list.textContent) + n;
  }
  
  
  