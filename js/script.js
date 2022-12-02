document.querySelector(".btn-seeyou").addEventListener("click", function(){
    document.querySelector(".popup-about").style.display = "flex";
  })
  document.querySelector(".close-about").addEventListener("click", function(){
    document.querySelector(".popup-about").style.display = "none";
  })

  var slides=document.querySelector('.card-Section').children;
  var btnPanah=document.querySelector(".btn-Panah");
  var totalslides= slides.length;
  var index = 0;

btnPanah.onclick=function (){
  next("next");
}

function next(direction){
  if(direction=="next"){
    index++;
    if(index==totalslides) {
      index=0;
    }
  }
  for(i=0;i<slides.length;i++){
      slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

// contact //
function sendMail() {

  const params = {
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }
  emailjs.send('service_5bqq3c8', 'template_ygdql2s', params)
  .then(function(res){
    alert('success', res.status, res.text);
  },function(err){
    alert('failed', err);
  }) 
}