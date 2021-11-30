const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get a random number between 0 and 3 because of the array
    const randomnumber = getrandomno();
    //console.log(randomnumber);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent=colors[randomnumber];

});
function getrandomno(){
    return Math.floor(Math.random()*10)%colors.length;
    //math.random gives random real numbers between 0 and 1 but 1 not included

}