function changeImg(x , text){
    if(x == 1){
        document.getElementById("demo").innerHTML = "NISHANT SINGH";
        
    }
    if(x == 2){
        document.getElementById("demo").innerHTML = "DAY1";   
    }
}

function changeImg2(x , text){
    if(x == 3){
        document.getElementById("demo1").innerHTML = "NISHANT SINGH2";
    }
    if(x == 4){
        document.getElementById("demo1").innerHTML = "DAY2";   
    }
}

function changeImg3(x , text){
    if(x == 5){
        document.getElementById("demo2").innerHTML = "NISHANT SINGH3";
    }
    if(x == 6){
        document.getElementById("demo2").innerHTML = "DAY3";   
    }
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
