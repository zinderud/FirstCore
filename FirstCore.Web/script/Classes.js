class Merhaba {
    selamlama: string;

    constructor(mesaj) {

        this.selamlama=mesaj;
    }
    cevapla() {
        return "heygidi" + this.selamlama;
    }
}

let eski = new Merhaba("günler hey");