//set initial count
let count=0;

// select value and buttons
const value=document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);

btns.forEach(function(item){
    //console.log(item);
    item.addEventListener('click',function(e){
        const styles = (e.currentTarget.classList);
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase'))
        count++;
        else{
            count=0;
        }
        if(count<0)
        value.style.color='red';
        else if (count==0)
        value.style.color='black';
        else
        value.style.color='green';

        value.textContent=count;
    });
});
