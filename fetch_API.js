let URL = "https://cat-fact.herokuapp.com/facts";

const fact = document.querySelector("#fact");
const getFact = document.querySelector("#btn");


const getData = async () => {
    console.log("getting data...")

    let response = await fetch(URL);

    console.log(response);
    console.log(response.status);

    let data = await response.json();   //JSON(javaScript Object Navigation) formate
    fact.innerText = data[0].text;
}

console.log(getData());
getFact.addEventListener("click",getData);