const waNumber = "6281358787484";
const emailAdress = "dewiendng13@gmail.com";

document.getElementById("waBtn").addEventListener("click", function(){
     window.open(`https://wa.me/${6281358787484}`, "_blank");
})

document.getElementById("emailBtn").addEventListener("click", function() {
  window.location.href = "mailto:dewiendng13@gmail.com";
});