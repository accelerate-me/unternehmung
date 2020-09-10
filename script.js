function generator() {
    // word lists
    var firstPart = ["Spazieren", "Sauna", "Urlaub planen", "Schwimmen", "Filmschauen", "Romantischen Abend"];
   // var secondPart = ["the Coming Order", "the Relationship of Command", "Evil Androids", "Cybernetic Brain"];
    // generate name
    var name = firstPart[Math.floor(Math.random() * firstPart.length)];
    //alert(name);
    // remove name div if existing
    if (document.getElementById("name")) {
    document.getElementById("random-name").removeChild(document.getElementById("name"));
    }
    // append to placeholder div
    var element = document.createElement("div");
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("random-name").appendChild(element);
    }
