let execute = () => {
    length();
    volume();
    mass();
}

let length = () => {
    let amount = document.querySelector("#amount").value;
    let feet = Math.round((amount * 3.28084) * 1000) / 1000;
    let meter = Math.round((amount * 0.3048) * 1000) / 1000;
    document.querySelector("#length").textContent = `${amount} meters = ${feet} feet | ${amount} feet = ${meter} meters`;
};

let volume = () => {
    let amount = document.querySelector("#amount").value;
    let gallons = Math.round((amount * 0.2641720524) * 1000) / 1000;
    let liters = Math.round((amount * 3.78541) * 1000) / 1000;
    document.querySelector("#volume").textContent = `${amount} liters = ${gallons} gallons | ${amount} gallons = ${liters} liters`;
};

let mass = () => {
    let amount = document.querySelector("#amount").value;
    let pounds = Math.round((amount * 2.20462) * 1000) / 1000;
    let kilos = Math.round((amount * 0.453592) * 1000) / 1000;
    document.querySelector("#mass").textContent = `${amount} kilos = ${pounds} pounds | ${amount} pounds = ${kilos} kilos`
};

let dark = () => {
    /*Background Theme CSS*/
    document.querySelector("#calculations").style.backgroundColor = "rgba(31, 41, 55, 1)";
    document.querySelector("#calculations").style.color = "white";

    /*Button Change CSS*/
    document.querySelector("#light").style.background = "white";
    document.querySelector("#light").style.color = "rgba(31, 41, 55, 1)";
    document.querySelector("#dark").style.background = "linear-gradient(45deg,#ed4880, #3b69e1)";
    document.querySelector("#dark").style.color = "rgba(251, 247, 238, 1)";
};

let light = () => {
    /*Background Theme CSS*/
    document.querySelector("#calculations").style.backgroundColor = "rgba(251, 247, 238, 1)";
    document.querySelector("#calculations").style.color = "black";

    /*Button Change CSS*/
    document.querySelector("#light").style.background = "linear-gradient(45deg,#ed4880, #3b69e1)";
    document.querySelector("#light").style.color = "rgba(251, 247, 238, 1)";
    document.querySelector("#dark").style.background = "black";
    document.querySelector("#dark").style.color = "rgba(251, 247, 238, 1)";
};

