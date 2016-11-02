interface ilkValue {
    label: string;
}

function ilkyaz(ilkobj: ilkValue) {
    console.log(ilkobj.label);
}

let myobj = { size: 1, label: "10 cm buyuk" };
ilkyaz(myobj);