
  function getFirstSelector(selector){
    var firstSelector = document.querySelector(selector)
    return firstSelector
}

function nestedTarget(){
  var nested = document.getElementById('nested')
  var target = nested.querySelector('.target');
  return target
}

function increaseRankBy(n) {
 var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 for (var i = 0; i < ranks.length; i++){
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
 }
  }
  
 function deepestChild(){
   
   var grandNode = document.getElementById('grand-node').querySelectorAll('div');
return grandNode[grandNode.length -1]

    }
  
  