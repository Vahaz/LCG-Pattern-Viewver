const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const IDa = document.getElementById("mult");
const IDc = document.getElementById("increment");
const IDm = document.getElementById("mod");

let width = canvas.width;
let height = canvas.height;
let imageData = new ImageData(width, height);
const data = imageData.data;

let s = 1;                   // Seed

function lcg(a, c, m) {
    s = (s * a + c) % m;
}

function gen() {
    let a = IDa.value;       // Mutliplier
    let c = IDc.value;       // Increment
    let m = IDm.value;       // Modulus
    let index = 0;

    for(let h = 0; h < height; h++) {
        for(let w = 0; w < width; w++) {
            lcg(a, c, m);
            update(a, c, m);
            color = Math.floor((s/(m-1))*255)
            data[index] = color;
            data[index+1] = color;
            data[index+2] = color;
            data[index+3] = 255;

            index += 4;
        }
    }

    ctx.putImageData(imageData, 0, 0);
}
gen()

function update(a, c, m) {
    IDa.value = a;
    IDc.value = c;
    IDm.value = m;
}

function downloadCanvas(element) {
    var img = canvas.toDataURL("image/png");
    element.href = img;
}
