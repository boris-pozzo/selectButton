var select = document.getElementById("select");

select.onchange = function() {
  var index = select.selectedIndex;
  var value = select.value;
  var text = select.options[index].text;
  var span = document.getElementById("display-text");
  span.innerHTML =
    "La pays " + text + " est à l'indice " + index + " : " + value;
};
