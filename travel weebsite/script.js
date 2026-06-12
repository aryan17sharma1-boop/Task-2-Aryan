function selectPackage(packageName){

    const popup = document.getElementById("popup");

    popup.innerHTML = "✅ " + packageName + " Package Selected!";
    popup.style.opacity = "1";

    setTimeout(() => {
        popup.style.opacity = "0";
    }, 2500);
}