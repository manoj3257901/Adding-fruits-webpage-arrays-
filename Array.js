var fruits=['Apple','Banana','Mango','Samosa'];

function loadFruits(){
    document.getElementById('fruits').innerHTML=fruits;
}

function addFruits(){
    var fruit=prompt('what is favouite food..?');
    fruits[fruits.length]=fruit;
    document.getElementById('fruits').innerHTML=fruits;
}