let page_name = window.location.pathname.split("/").pop();

const hg_secon_color = "#7b5dff"
const hg_terc_color = "#f9af26"

const c_logo = document.getElementById("c_header_logo");
const haskell_logo = document.getElementById("haskell_header_logo");
const csharp_logo = document.getElementById("c_sharp_header_logo");
const html_logo = document.getElementById("svelte_header_logo");
const prolog_logo = document.getElementById("prolog_header_logo");
const c_bar = document.getElementById("c_indicator");
const haskell_bar = document.getElementById("haskell_indicator");
const csharp_bar = document.getElementById("c_sharp_indicator");
const html_bar = document.getElementById("svelte_lang_indicator");
const prolog_bar = document.getElementById("prolog_indicator")

const icon_class = document.getElementsByClassName("link_ico");
const indicator_class = document.getElementsByClassName("ico_indicator");

/*document.addEventListener("DOMContentLoaded", () => {
    switch (page_name) {
        case "procedimental.html":
            c_logo.style.color = hg_terc_color;
            c_bar.style.visibility = "visible";
            c_bar.style.color = hg_terc_color;
            c_bar.style.borderColor = hg_terc_color;
            break;

        case "funcional.html":
            haskell_logo.style.color = hg_terc_color;
            haskell_bar.style.visibility = "visible";
            haskell_bar.style.color = hg_terc_color;
            haskell_bar.style.borderColor = hg_terc_color;
            break;

        case "orientada_a_objetos.html":
            csharp_logo.style.color = hg_terc_color;
            csharp_bar.style.visibility = "visible";
            csharp_bar.style.color = hg_terc_color;
            csharp_bar.style.borderColor = hg_terc_color;
            break;

        case "reativa.html":
            html_logo.style.color = hg_terc_color;
            html_bar.style.visibility = "visible";
            html_bar.style.color = hg_terc_color;
            html_bar.style.borderColor = hg_terc_color;
        
        case "logica.html":
            prolog_logo.style.color = hg_terc_color;
            prolog_bar.style.visibility = "visible";
            prolog_bar.style.color = hg_terc_color;
            prolog_bar.style.borderColor = hg_terc_color;
    }
})*/