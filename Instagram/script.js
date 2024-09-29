var profiles = document.querySelectorAll(".cardcover");
var loves = document.querySelectorAll("i");

var follows = document.getElementsByClassName("follow");

for (var i = 0; i < follows.length; i++) {
    follows[i].addEventListener("click", function() {
       this.innerHTML = "Following";
    });
}



profiles.forEach((profile, index) => {
    profile.addEventListener("dblclick", function () {
        loves[index].style.transform = "translate(-50%,-50%) scale(1)";
        loves[index].style.opacity = "0.8";

        setTimeout(function () {
            loves[index].style.opacity = "0";
            loves[index].style.transform = "translate(-50%,-50%) scale(0)";
        }, 500);
    });
});

