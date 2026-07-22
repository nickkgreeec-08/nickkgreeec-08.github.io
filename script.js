const app = document.getElementById("app");


async function loadPage(page){

    try {

        const response = await fetch(
            `pages/${page}.html`
        );


        if(!response.ok){
            throw new Error("Page missing");
        }


        app.innerHTML = await response.text();

    }

    catch(error){

        const response = await fetch(
            "pages/404.html"
        );


        app.innerHTML = await response.text();

    }

}



function setupButtons(){

    document.querySelectorAll("[data-page]")
    .forEach(button => {

        button.onclick = () => {

            loadPage(button.dataset.page);

        };

    });

}


async function loadPage(page){

    try {

        const response = await fetch(
            `pages/${page}.html`
        );


        if(!response.ok){

            throw new Error("Page not found");

        }


        app.innerHTML = await response.text();


    }

    catch {

        const response = await fetch(
            "pages/404.html"
        );


        app.innerHTML = await response.text();

    }


    setupButtons();

}


loadPage("home");
setupButtons();

document.addEventListener("click", (event) => {

    if (event.target.classList.contains("copy-btn")) {

        const code = event.target
            .parentElement
            .querySelector("pre")
            .innerText
            .trim();


        navigator.clipboard.writeText(code);


        event.target.innerText = "✓";


        setTimeout(() => {

            event.target.innerText = "C";

        }, 1000);

    }

});

loadPage("home");