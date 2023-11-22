const DOMselectors = {
    albumname: document.querySelector(".album"),
    artistname: document.querySelector(".name"),
    image: document.querySelector(".image"),
    gallery: document.querySelector(".card"),
    submit: document.getElementById("#submit"),
    button: document.querySelector(".button"),
};
DOMselectors.form.addEventListener('submit', function (ok) {
    ok.preventDefault();
    console.log(DOMselectors.image.value, DOMselectors.artistname.value, DOMselectors.albumname.value)
   
    function cards (){
    DOMselectors.gallery.insertAdjacentHTML("afterend", ``);
ok()
cards()
clearfields()
remove()
});