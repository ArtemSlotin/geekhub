window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");

    function changeTitle() {
        document.querySelector('#main h1').innerHTML = 'lorem';
    }

    document.querySelector('button').addEventListener('click', changeTitle, false);
});