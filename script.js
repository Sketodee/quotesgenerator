const generateRandom = document.querySelector(".button"); 
const author = document.querySelector(".author"); 
const picture = document.querySelector(".pic");

generateRandom.addEventListener("click", function(done){
    done.preventDefault();
    const random = (Math.floor(Math.random()*11));
    document.getElementById("authorimage").src = quotes[random].img;
    document.querySelector(".forText").innerHTML = quotes[random].quote;
    document.querySelector(".author").innerHTML = quotes[random].author;
    document.getElementById("mycard").classList.add("animate__animated", "animate__flip"); 
})

quotes = [
    {
        img: "images/dante.jpeg",
        quote: "The darkest place in hell is reserved for those who maintain their neutrality in times of moral crisis",
        author: "-Dante Alighieri"
    },
    {
        img: "images/machiavelli.jpeg",
        quote: "The end justifies the mean", 
        author: "-Niccolo Machiavelli"
    },
    {
        img: "images/nietzche.jpeg", 
        quote: "There are no facts only interpretations",
        author: "-Friedrich Nietzsche"
    }, 
    {
        img: "images/davinci.jpeg", 
        quote: "It is better to be feared than to be loved", 
        author: "-Leonardo da Vinci"
    },
    {
        img: "images/franklin.jpeg", 
        quote: "There was never a truly great man that was not at the same time truly virtuous", 
        author: "-Benjamin Franklin"
    },
    {
        img: "images/fitzgerald.jpeg", 
        quote: "Great art is the contempt of great man for small art", 
        author: "-F. SCott Fitzgerald"
    },
    {
        img: "images/pence.jpeg", 
        quote: "Behind every great man is a woman rolling her eyes", 
        author: "-Mike Pence"
    }, 
    {
        img: "images/socrates.jpeg", 
        quote: "The unexamined life is not worth living", 
        author: "-Socrates"
    }, 
    {
        img: "images/nietzche.jpeg", 
        quote: "God is dead! He remains dead! and we have killed him", 
        author: "-Friedrich Nietzsche"
    }, 
    {
        img: "images/machiavelli.jpeg", 
        quote: "God is willing to do everything and thus take away our free will and share of glory which belongs to us", 
        author: "-Niccolo Macchiavelli"
    }, 
    {
        img: "images/davinci.jpeg", 
        quote: "The mind is furnished with experience by idea alone", 
        author: "-John Locke"
    }
]



 