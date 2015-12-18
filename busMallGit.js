var shown = [];
shownCounter = 0;
var m =shown[0];
var inputsPush = [];
var userChose = [];
var allPathsTrunc =[];

var marquee =['Times Chosen', 'Times Viewed'];


var productNames =['boots', 'bag', 'banana','chair', 'cthulhu', 'dragon', 'pen', 'scissors','shark', 'sweep', 'unicorn', 'usb','waterCan', 'wineGlass'];
var allProducts=[];

function Product(name, path, id){
  this.name = name;
  this.path = path;
  this.id=id;
  this.tally = 0;
  this.views = 0;
  allProducts.push(this);
};

allPaths=[];
// allPaths.sort();

(function buildAlbum(){
  for(var i = 0; i< productNames.length; i++){
    new Product(productNames[i],'images/' + productNames[i] +'.jpg', 'images/' + productNames[i] +'.jpg');
  }
})();
// console.table(allProducts);

// console.log(allProducts[0].id);

console.log(allProducts[2]);



var z =[];
(function randomZ(){
for (i=0;i<productNames.length; i++){
  min = 1;
  max = productNames.length;
z.unshift(Math.floor(Math.random() * (max - min) + min));

}
})();

(function getPaths(){
  for(var i = 0; i<productNames.length; i++)
  allPaths.unshift(allProducts[z[i]].path);
})();

(function getTrunc(){
  for(var i = 0; i<productNames.length; i++){
  allPathsTrunc.unshift(allProducts[z[i]].path.substring(7));
}
})();




function roll(){
  max = allPaths.length;
  min = 0;
    var cc = Math.floor(Math.random() * (max - min) + min);


showImage();
function showImage(){
  var get = document.getElementsByTagName('section')[0];
  var input1 = document.createElement('input');
  get.appendChild(input1);
  input1.type = "image";
  input1.name = "image";
  input1.width = 250;
  input1.height =250;
  // input1.id = m;
  input1.src = allPaths[cc];

  inputsPush.unshift(input1);

}
};

roll();
roll();
roll();


equalityCheck();

counterA =0;
counterB=0;
counterC=0;
counterAll=0;

var pickedA =[];
var pickedB =[];
var pickedC =[];


var handleClickA = function(event) {
  console.log(event);
  event.preventDefault();
  counterA++; counterAll++;

  pickedA.unshift(document.getElementsByTagName('input')[0].src);

  userChose.unshift(document.getElementsByTagName('input')[0].src.substring(44));

  var matchA= document.getElementsByTagName('input')[0].src.substring(44);

    for (var i = 0;i<productNames.length; i++){
  if(allProducts[i].path.substring(7) === matchA){
    console.log("match again here. get lunch");
    console.log(allProducts[i]);
    allProducts[i].tally++;
    console.log(allProducts[i].tally);
  }
  }
console.table(allProducts);

    removr();
    removr();
    removr();
    roll();
    roll();
    roll();
    equalityCheck();
    console.log(counterA + "A");
    console.log(counterAll + "All");
        // console.log(document.getElementsByTagName('input')[0].src)

};


var handleClickB = function(event) {
  console.log(event);
  event.preventDefault();
  counterB++; counterAll++;

var matchB = document.getElementsByTagName('input')[1].src.substring(44);

  for (var i = 0;i<productNames.length; i++){
if(allProducts[i].path.substring(7) === matchB){
  console.log("match again here. get lunch");
  console.log(allProducts[i]);
  allProducts[i].tally++;
  console.log(allProducts[i].tally);
}
}

console.table(allProducts);

  pickedB.unshift(document.getElementsByTagName('input')[1].src);
  console.log(document.getElementsByTagName('input')[1].src.substring(44));


  userChose.unshift(document.getElementsByTagName('input')[1].src.substring(44));

    removr();
    removr();
    removr();
    roll();
    roll();
    roll();
    equalityCheck();
    console.log(counterB + "B");
    console.log(counterAll + "All");


};
var handleClickC = function(event) {
  console.log(event);
  event.preventDefault();
  counterC++; counterAll++;

  var matchC= document.getElementsByTagName('input')[2].src.substring(44);

    for (var i = 0;i<productNames.length; i++){
  if(allProducts[i].path.substring(7) === matchC){
    console.log("match again here. get lunch");
    console.log(allProducts[i]);
    allProducts[i].tally++;
    console.log(allProducts[i].tally);
    // return allProducts[i].tally;
  }
  }
  console.table(allProducts);

  pickedC.unshift(document.getElementsByTagName('input')[2].src);
  userChose.unshift(document.getElementsByTagName('input')[2].src.substring(44));


    removr();
    removr();
    removr();
    roll();
    roll();
    roll();
    equalityCheck();
    console.log(counterC + "C");
    console.log(counterAll + "All");


};


function removr(){
  var removeX = document.getElementsByTagName('input')[0];
   removeX.remove(0);
};


function equalityCheck(){
  while(srcA === srcB || srcA === srcC || srcB === srcC){
    console.log("Reshuffling. We have a match.");
         removr();
         removr();
        removr();
        roll();
        roll();
        roll();
        var srcA = document.getElementsByTagName('input')[0].src;
        var srcB = document.getElementsByTagName('input')[1].src;
        var srcC = document.getElementsByTagName('input')[2].src;
  };

  while (srcA !== srcB && srcA !== srcB && srcB !== srcC)
  {console.log("all are different");
    var srcA = (document.getElementsByTagName('input')[0].src).substring(44);
    var srcB = (document.getElementsByTagName('input')[1].src).substring(44);
    var srcC = (document.getElementsByTagName('input')[2].src).substring(44);
    console.log(srcA, srcB, srcC + " just shown");


      for (var i = 0;i<productNames.length; i++){
    if(allProducts[i].path.substring(7) === srcA){
      console.log("match again here. get lunch");
      console.log(allProducts[i]);
      allProducts[i].views++;
      console.log(allProducts[i].views);
    }
    }

    for (var i = 0;i<productNames.length; i++){
  if(allProducts[i].path.substring(7) === srcB){
    console.log("match again here. get lunch");
    console.log(allProducts[i]);
    allProducts[i].views++;
    console.log(allProducts[i].views);
  }
  }


  for (var i = 0;i<productNames.length; i++){
if(allProducts[i].path.substring(7) === srcC){
  console.log("match again here. get lunch");
  console.log(allProducts[i]);
  allProducts[i].views++;
  console.log(allProducts[i].views);
}
}
console.table(allProducts);


    shownCounter+=3;

    shown.unshift(shownCounter);
    shown.unshift(document.getElementsByTagName('input')[0].src.substring(44,49));
    shown.unshift(document.getElementsByTagName('input')[1].src.substring(44,49));
    shown.unshift(document.getElementsByTagName('input')[2].src.substring(44,49));

      hm = document.getElementsByTagName('input')[0];
      (hm).addEventListener("click", handleClickA);
      hm2 = document.getElementsByTagName('input')[1];
      (hm2).addEventListener("click", handleClickB);
      hm2 = document.getElementsByTagName('input')[2];
      (hm2).addEventListener("click", handleClickC);


      checkCount();



    break;

}
};


var hm = document.getElementsByTagName('input')[0];
var hm1 = document.getElementsByTagName('input')[1];
var hm2 = document.getElementsByTagName('input')[2];

(hm).addEventListener("click", handleClickA);
(hm1).addEventListener("click", handleClickB);
(hm2).addEventListener("click", handleClickC);


function invisible(){

var button = document.getElementById('button');
button.hidden= true;
console.log("hey");

};

invisible();

function things(){
  console.log('done');
}


function render(){

 var tbl = document.createElement('table');
 var trElone = document.createElement('tr');
 var thElone = document.createElement('th');
 thElone.textContent = 'Products';
 trElone.appendChild(thElone);

for (var i = 0; i<allProducts.length; i++) {
 var thEltwo = document.createElement('th');
 thEltwo.textContent=marquee[i];
 trElone.appendChild(thEltwo);
}

var theElthree = document.createElement('th');
theElthree.textContent='';
trElone.appendChild(theElthree);

tbl.appendChild(trElone);


for (var i = 0; i<allProducts.length; i++) {
 var trEltwo = document.createElement('tr');
 var thElfour = document.createElement('th');
 thElfour.textContent = allProducts[i].name;
 trEltwo.appendChild(thElfour);

 for (var j = 0; j< 1; j++) {
  var tdElone = document.createElement('td');
  tdElone.textContent = allProducts[i].tally;
  trEltwo.appendChild(tdElone);
 }

 var tdEltwo = document.createElement('td');
 tdEltwo.textContent = allProducts[i].views;
 trEltwo.appendChild(tdEltwo);

 tbl.appendChild(trEltwo);
}

var mesa = document.getElementsByTagName('span')[0];
mesa.appendChild(tbl);
};






      function visible(){
      var button = document.getElementById('button');
      button.hidden= false;
      console.log("hey");
      // render();
      };

    function checkCount(){
    console.log(shownCounter + "pics shown");
    if(shownCounter % 48 === 0){
      visible();
      // render();
    }
    };
