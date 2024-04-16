let btn1 = document.getElementById("btn1");
console.log('btn1');
let btn2 = document.getElementById("btn2");

function chBg (){
    btn2.style.background = 'white';
    btn2.style.color = 'black';
    btn1.style.background = 'black';
    btn1.style.color = 'green';
}
function chBgTwo (){
    btn1.style.background = 'white';
    btn1.style.color = 'black';
    btn2.style.background = 'black';
    btn2.style.color = 'green';
}
btn1.addEventListener("click", ()=>chBg());
btn2.addEventListener("click", ()=>chBgTwo());

//change cover image
var cover= document.querySelector(".coverImages");
const imageEle = document.querySelector(".cover");
const nameEle = document.querySelector(".coverName");
const descriptionEle = document.querySelector(".imgContent");
const dotsContainer = document.querySelector(".dotContainer");
var time = 3000;
var i=0;


function createDots(){
    coverEle.forEach((n,key)=>{
        const dot = document.createElement("span");
        dot.classList.add('dot');
        dotsContainer.appendChild(dot); 
    });
};
createDots(dotsContainer);


function updateDots(){
    const dots = document.querySelectorAll(".dot");
        dots.forEach(f => f.classList.remove("active"));
        dots[i].classList.add("active");
}

function changeImage (index){
    document.slide.src = coverEle[i].src;
    nameEle.textContent= coverEle[i].name;
    descriptionEle.textContent= coverEle[i].description;

    if(i< coverEle.length-1){
        i++;
    }
    else{
        i=0;
    }
     let slideInterval =  setTimeout("changeImage()",time);
    updateDots(i)
}

window.onload = changeImage;




//trending section
const trendingContainer = document.querySelector(".trending");
const trendListEle = trendingContainer.querySelector(".trendlist");
const arrLeftEle = document.querySelector(".arrLeft");
   const arrRightEle = document.querySelector(".arrRight");

        

   for(let k=0;k<trendList.length;k++){
   const divTag = document.createElement("div");
   trendListEle.appendChild(divTag); 
   divTag.classList.add("list");
   const imgTag = document.createElement("img");
   imgTag.classList.add("listimg");
   imgTag.src = trendList[k].src;
   imgTag.onmouseover = ()=>imgTag.src=trendList[k].srcTwo;
   imgTag.onmouseout = ()=>imgTag.src=trendList[k].src;
   divTag.appendChild(imgTag);
   const spanTag = document.createElement("span");
   spanTag.classList.add("movieName");
   spanTag.textContent = trendList[k].tname;
   divTag.appendChild(spanTag);

   imgTag.style.cursor = "pointer"

   }

   arrLeftEle.addEventListener("click", function(){
    trendListEle.style.scrollBehavior = "smooth";
    trendListEle.scrollLeft -=845 ;
   });
   arrRightEle.addEventListener("click", function(){
    trendListEle.style.scrollBehavior = "smooth";
    trendListEle.scrollLeft += 845  ;
   });  




//continue watch section

const continueContainer = document.querySelector(".continueWatch");
const continueListEle = continueContainer.querySelector(".continuelist");
const arrLeftEle2 = document.querySelector(".arrLeftTwo");
   const arrRightEle2 = document.querySelector(".arrRightTwo");



   for(let k=0;k<trendListTwo.length;k++){
    const divTag = `<div div-index="${k+1}" class="list">
                        <img src="${trendListTwo[k].src}" class="listimg" onmouseover="this.src='${trendListTwo[k].srcTwo}'" onmouseout="this.src='${trendListTwo[k].src}'"alt="">
                        <span class="movieName">${trendListTwo[k].tname}</span>
                    </div>
                     `;
                    continueListEle.insertAdjacentHTML("beforeend", divTag); 

   }

   arrLeftEle2.addEventListener("click", function(){
    continueListEle.style.scrollBehavior = "smooth";
    continueListEle.scrollLeft -=845 ;
   });
   arrRightEle2.addEventListener("click", function(){
    continueListEle.style.scrollBehavior = "smooth";
    continueListEle.scrollLeft += 845  ;
   }); 

   


    





