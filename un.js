const galy =$(".galy");
let galyp = [
  {
    title: "cristiano ronaldo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxnv0sxwWy309KxDsSqTHn2vHpWdqot6oBA&usqp=CAU",
    desc: "loremhnjnhjhhnjnhjnjnjhnjnjhnj",
  },
  {
    title: "Lionel Messi",
    img: "data:image/jpeg;base64,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",
    desc: "loremhnjnhjhhnjnhjnjnjhnjnjhnj",
  },
  {
    title: "Neymar da Silva",
    img: "data:image/jpeg;base64,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",
    desc: "loremhnjnhjhhnjnhjnjnjhnjnjhnj",
  },
  {
    title: "Kylian Mbappé",
    img: "data:image/jpeg;base64,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",
    desc: "loremhnjnhjhhnjnhjnjnjhnjnjhnj",
  },
  {
    title: "Mohamed Salah",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2Eh9nX7uObI9P9pb9uF2Pr1V7kT54AZnWA&usqp=CAU",
    desc: "loremhnjnhjhhnjnhjnjnjhnjnjhnj",
  },
  {
    title: "Karim Benzema",
    img: "data:image/jpeg;base64,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",
    desc: "loremhnjnhjhhnjnhjnjnjhnjnjhnj",
  },
];
const render = () => {
  galy.html("")
  galyp.forEach((item, i) => {
    galy.append( `<div class="fot"><a href ="#">
        <img class="cr" src="${item.img}" alt="img">
        <p>${item.title} </p>
      </a></div>`);
  });
};
render();



// slide------------------------------------------------
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

