








window.addEventListener("scroll", function(){
    const nav = document.getElementById("navbar");
    if(navbar > 0.5){
        nav.classList.add("backdrop-blur-md", "bg-slate-950/80", "shadow-lg")
    }else{
        nav.classList.remove('backdrop-blur-lg', 'bg-slate-950/60', 'shadow-lg');
    }
})

