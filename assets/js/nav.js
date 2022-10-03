fetch('../../nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar_replacer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    let fileName = (location.pathname.replace("/",""));
    if (fileName == "") {
        fileName = "index.html"
    }
    document.getElementById(fileName).classList.add("active")
})