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
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (var i = 0; i < ranks.length; i ++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
  }
  
  function deepestChild(){
    
    var grandNode = document.getElementById('grand-node');
    
    
  }
  
  
  
  
  
  