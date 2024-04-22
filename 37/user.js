var data = [
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
    {
        name:"jflsl",
        city:"jslls",
        email:"skhf",
    },
]




function createTable(){
  var table = document.createElement("table");   
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr"); 
  
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");

  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");

  th1.innerText = "ID";
  th2.innerText = "NAME";
  th3.innerText = "EMAIL";

  td1.innerText = "jkgjvk";
  td2.innerText = "jkgka";
  td3.innerText = "hghhg";

  td4.innerText = "jkggjk";
  td5.innerText = "jkgka";
  td6.innerText = "hghhg";

  td7.innerText = "lkaj";
  td8.innerText = "jag";
  td9.innerText = "ghjfd";

  

  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);

  tr2.appendChild(td1);
  tr2.appendChild(td2);
  tr2.appendChild(td3);

  tr3.appendChild(td4);
  tr3.appendChild(td5);
  tr3.appendChild(td6);

  tr4.appendChild(td7);
  tr4.appendChild(td8);
  tr4.appendChild(td9);


  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  table.appendChild(tr4);

  table.width = "800px";
  table.frame = "box";
  table.rules = "all";
  table.style.margin = "auto";
  table.cellPadding = "10px";

  tr1.style.backgroundColor = "black";
  tr1.style.color = "white";

  tr2.align = "center";
  tr3.align = "center";
  tr4.align = "center";

  var bodyRef = document.getElementsByTagName("body")

    bodyRef[0].appendChild(table);
    console.log(bodyRef);


}