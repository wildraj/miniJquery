
var SweetSelector = {

  select: function(selector) {
    switch(selector[0]) {
      case "#":
        return document.getElementById(selector.slice(1));
      case ".":
        return document.getElementsByClassName(selector.slice(1));
      default:
        return document.getElementsByTagName(selector);
    }
  }
};

// console.log(SweetSelector.select('#eyed'));
// console.log(SweetSelector.select('.klass'));
// console.log(SweetSelector.select('a'));

var setVisibility = function(style,selector){
  var elementS = SweetSelector.select(selector);
    if(elementS.length > 1){
      for (var i = 0; i < elementS.length; i++){
        elementS[i].style.visibility = style;
      }
    }
    else{
      elementS.style.visibility = style;
    }
}

var DOM = {
  hide: function(selector){
    setVisibility('hidden', selector);
  },
  show: function(selector){
    setVisibility('visible', selector);
  },

  addClass: function(selector, newClass){
    var element = SweetSelector.select(selector);
    if(element.length > 1){
      for (var i = 0; i < element.length; i++){
        element[i].className = (element[i].className + " " + newClass);
      }
    } else {
      element.className += (" "+ newClass);
      element.className.trim();
    };
  },

  removeClass: function(selector, selectClass){
    var element = SweetSelector.select(selector);
    if(element.length > 1){
      for (var i = 0; i < element.length; i++){
        var classes = element[i].className.split(' ')
        for (var j = 0; j < classes.length; j++){
          if (classes[j] === selectClass) {
            classes[j] = "";
          }
        }
        classes = classes.filter(function(n){ return n != ""}).join(' ');
        element[i].className = classes;
      };
    } else {
      var classes = element.className.split(' ')
      for (var i = 0; i < classes.length; i++){
        if (classes[i] === selectClass) {
          classes[i] = "";
        }
      }

      classes = classes.filter(function(n){ return n != ""}).join(' ');
      element.className = classes;
    };
  }
}

// DOM.hide('a');
// DOM.addClass(".klass", "shadi")
// DOM.addClass(".klass", "yolo")
// DOM.removeClass(".klass", "shadi")

// DOM.addClass("#eyed", "shadi")
// DOM.addClass("#eyed", "yolo")
// DOM.addClass("#eyed", "hey")
// DOM.removeClass("#eyed", "yolo")


var EventDispatcher = {

  on: function(selector, event, callback) {
    var elementS = SweetSelector.select(selector);
    if(elementS.length > 1){
      for (var i = 0; i < elementS.length; i++){
        elementS[i].addEventListener(event,callback);
      }
    } else {
      elementS.addEventListener(event,callback);
    }

  },

  trigger: function(selector, event) {
    SweetSelector.select(selector).fireEvent("onclick");
  }
}

EventDispatcher.on('#eyed', 'click', function() { console.log('awesome') })
EventDispatcher.trigger('#eyed', 'click');
