class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Hayvan {

    isim: string;
    constructor(hayvanIsim: string) {
        this.isim = hayvanIsim;
    }
    move(olcu: number = 0) {
        console.log(`${this.isim} olcu ${olcu}m.`);
    }
}

class araba {

    private isim: string;
    constructor(modelismi: string) { this.isim=modelismi}
}

class bmw extends araba {
    constructor() { super("cxs");}
}

let ara = new araba("sada");
