const cute = document.querySelector('.cute');
const quest = document.querySelector('.quest');
const gif = document.querySelector ('.gif');
const yes = document.querySelector ('.yes');
const no = document.querySelector ('.no');

yes.addEventListener('click', ()=>{
    quest.innerHTML="Yaaayy! ily more!";
    gif.src="imgs/download.gif";
});

no.addEventListener('mouseover', ()=> {
    const noRect = no.getBoundingClientRect();
    const maxX = window.innerWidth - noRect.width;
    const maxY = window.innerHeight - noRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    no.style.left = randomX + 'px';
    no.style.top = randomY + 'px';
})
