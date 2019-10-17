
window.onload = () => {


    const img = document.querySelector("img");

    setInterval(setRandomAnimation, 10000);

    setRandomAnimation()


    function setRandomAnimation() {
        img.style.animationName = `case${((Math.random() * 3) + 1).toFixed()}`
    }

}