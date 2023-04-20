// function to change font size of text area
function makeTextBigger() {
    var textBox = document.getElementById("text-input");
    textBox.style.fontSize = "24pt";
  }
  
  // function to add styles based on radio button selection
  function toggleStyle() {
    var textBox = document.getElementById("text-input");
    var fancyRadio = document.getElementById("fancy-radio");
    var boringRadio = document.getElementById("boring-radio");
    
    if (fancyRadio.checked) {
      textBox.style.fontWeight = "bold";
      textBox.style.color = "blue";
      textBox.style.textDecoration = "underline";
    } else {
      textBox.style.fontWeight = "normal";
      textBox.style.color = "black";
      textBox.style.textDecoration = "none";
    }
  }
  
  // function to uppercase text and add suffix to last word of each sentence
  function makeTextMoo() {
    var textBox = document.getElementById("text-input");
    var text = textBox.value;
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
      var sentence = sentences[i].trim();
      if (sentence !== "") {
        var words = sentence.split(" ");
        var lastWord = words.pop();
        words.push(lastWord.toUpperCase() + "-Moo");
        sentences[i] = words.join(" ");
      }
    }
    
    textBox.value = sentences.join(".");
  }
  
  // set up event listeners
  var biggerButton = document.getElementById("bigger-button");
  biggerButton.onclick = makeTextBigger;
  
  var fancyRadio = document.getElementById("fancy-radio");
  var boringRadio = document.getElementById("boring-radio");
  fancyRadio.onchange = toggleStyle;
  boringRadio.onchange = toggleStyle;
  
  var mooButton = document.getElementById("moo-button");
  mooButton.onclick = makeTextMoo;
