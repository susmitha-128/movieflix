
 //auto image slide

 const gallery = document.querySelector(".cover");
 console.log("gallery");
 const dot = document.querySelectorAll(".dots");
 let currentIndex = 0;


 function slideNext() {
   currentIndex = (currentIndex +1)% gallery.children.length;
   const translateX = -currentIndex * 100;
   gallery.style.transform = `translateX(${translateX}%)`;
 }

 setInterval (slideNext, 3000);



