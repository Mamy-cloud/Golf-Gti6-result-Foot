
  //---------------------navmenu----------------------------------

const btn = document.querySelector(".burger");
const menu = document.querySelector('nav');
const items = document.querySelectorAll('.items')

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("menu-active");

});

items.forEach(item => {
  item.addEventListener('click', ()=> {
     btn.classList.remove("active");
     menu.classList.remove("menu-active");
  })
})

//----------------------fiche technique--------------------------
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll("#underline h2");
  const characterList = document.querySelector(".character");
  const equipementList = document.querySelector(".equipement");
  const characterTitle = document.querySelector(".character-title");

  //Met en jaune par défaut le h2 caractéristiques
  characterTitle.classList.add("active")

  // Masquer les listes par défaut
  equipementList.style.display = "none";

  headings.forEach((heading) => {
      heading.addEventListener("click", () => {
          // Supprimer la classe soulignée des autres titres
          headings.forEach(h => h.classList.remove("active"));

          // Ajouter la classe "active" au titre cliqué
          heading.classList.add("active");

          // Afficher la liste correspondante et masquer l'autre
          if (heading.textContent.trim() === "Caractéristiques") {
              characterList.style.display = "block";
              equipementList.style.display = "none";
          } else if (heading.textContent.trim() === "Equipements") {
              equipementList.style.display = "block";
              characterList.style.display = "none";
          }
      });
  });
});

//--------------------effet carrousel------------------------------------------

 let index = 0; 
 const carousel = document.querySelector('.carousel');
 const images = document.querySelectorAll('.carousel img');
 const totalImages = images.length;
 const dots = document.querySelectorAll(".dot");
 function callOffset(){
   const offset = -index * 100 + "%";
   carousel.style.transform = `translateX(${offset})`;
   // Mettre à jour l'état des dots
   dots.forEach(d => d.classList.remove("active"));
   dots[index].classList.add("active");
 }

 //lorsque je clique sur le bouton preview
 document.querySelector(".preview").addEventListener("click", moveSlidePreview);
 function moveSlidePreview() {

     index-=1; // Décrémente l'index

     // Boucle infinie pour éviter les valeurs négatives
     if (index < 0) {
         index = totalImages - 1;
     }
     callOffset()
 }

 //lorsque je clique sur le bouton next
 document.querySelector(".next").addEventListener("click", moveSlideNext);
 function moveSlideNext() {
     index = (index + 1) % totalImages; // Avance d'une image avec boucle infinie
     callOffset()
 }

 // point d'évolution
 

 dots.forEach((dot, i) => {
     dot.addEventListener("click", () => {
         dots.forEach(d => d.classList.remove("active")); // Supprime la classe active des autres dots
         dot.classList.toggle("active"); // Ajoute/Retire la classe active au dot cliqué
         index = i; // Met à jour l'index actuel
         callOffset()
     });
 });

 // Ajoute la classe 'active' au dot d'index 0
 document.addEventListener("DOMContentLoaded", () => {
   if (dots.length > 0) {
       dots[0].classList.add("active"); // Ajoute la classe 'active' au dot d'index 0
   }
 });

 //auto slide carrousel
 function autoSlide() {
  index++; // Incrémente l'index
  if (index >= totalImages) index = 0; // Reset l'index pour créer une boucle infinie

  callOffset();

  // Répéter l'animation
  setTimeout(autoSlide, 4000);
}
setTimeout(autoSlide, 4000);

//----------------------------------Prix--------------------------------------------

  let btnShowMore = document.querySelector(".btn-price");
  let slide = document.querySelector(".container-price");

  btnShowMore.addEventListener("click", () => {
    slide.classList.toggle("active");
    if (btnShowMore.innerText === "Afficher plus") {
      btnShowMore.innerText = "Afficher moins";
      
    } else {
      btnShowMore.innerText = "Afficher plus";
    }
  
  });
  


