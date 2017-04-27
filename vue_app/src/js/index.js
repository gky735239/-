// rem适配

(function(){
  var styleNode = document.createElement('style');
  var width = document.documentElement.clientWidth;
  styleNode.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
  document.head.appendChild(styleNode);
})();

