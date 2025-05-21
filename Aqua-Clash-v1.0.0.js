const readline = require('readline');
const { algoritmaSean } = require('./Algoritma-sean.js')

const cyan = '\x1b[36m%s\x1b[0m';
const green = '\x1b[42m%s\x1b[0m';
const red = '\x1b[41m%s\x1b[0m';

// Buat interface untuk input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Kondisi awal galon, diisi secara random dengan nilai antara 1 dan 100
let gallons;

// Fungsi untuk memilih level permainan
function chooseLevel() {
    console.log("Pilih level permainan:");
    console.log("1. Mudah");
    console.log("2. Sedang");
    console.log("3. Sulit");
    console.log("4. Sangat Sulit");
    console.log("5. Goblok");

    rl.question("Masukkan nomor level (1-5): ", (level) => {
        level = parseInt(level);
        if (level >= 1 && level <= 6) {
            initializeGame();
            startGame(level);
        } else {
            console.log("Level tidak valid! Silakan pilih ulang.");
            chooseLevel();
        }
    });
}

// Inisialisasi permainan
function initializeGame() {
    gallons = [
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1
    ];
    console.log(`Kondisi awal galon: ${gallons.join('   ')}`);
}

function startGame(level) {
    console.log(`Memulai permainan di level ${level}...`);
    playerTurn(level);
}

function playerTurn(level) {
    // Pemain A memasukkan input dalam bentuk [nilai, galon]
    rl.question(`Masukkan nilai baru dan nomor galon (contoh: 0,1): `, (input) => {
        let [newAmount, gallonChoice] = input.split(',').map(Number);
        const gallonIndex = gallonChoice - 1;

        // Periksa apakah input valid
        if (gallonIndex >= 0 && gallonIndex < gallons.length) {
            // Periksa apakah galon berisi air
            if (gallons[gallonIndex] > 0) {
                // Syarat: Input tidak boleh sama dengan nilai galon
                if (newAmount < gallons[gallonIndex] || newAmount === 0) {
                    gallons[gallonIndex] = newAmount; // Mengubah air dalam galon
                    console.log(`Galon ${gallonChoice} diubah menjadi ${gallons[gallonIndex]}.`);
                    console.log(cyan , `Kondisi galon sekarang: ${gallons.join('   ')}`);
                    computerTurn(level);  // Giliran komputer
                } else {
                    console.log('Syarat tidak terpenuhi! Pastikan mengurangi air yang valid! Silakan pilih ulang.');
                    playerTurn(level); // Meminta pemain untuk memilih ulang
                }
            } else {
                console.log('Galon sudah kosong! Silakan pilih galon lain.');
                playerTurn(level); // Meminta pemain untuk memilih ulang
            }
        } else {
            console.log('Input tidak valid! Silakan pilih ulang.');
            playerTurn(level); // Meminta pemain untuk memilih ulang
        }
    });
}

function computerTurn(level) {
    // Komputer memilih galon yang berisi air
    let availableGallons = gallons
        .map((g, index) => (g > 0 ? index : null))
        .filter(index => index !== null);

    if (availableGallons.length === 0) {
        console.log(green,'Semua galon kosong! Player Menang.');
        rl.close();
        return;
    }

    let gallonIndex;
    if (level === 1) {
        // Strategi termudah: Komputer memilih galon acak
        gallonIndex = availableGallons[Math.floor(Math.random() * availableGallons.length)];
    } else if (level <= 4) {
        // Strategi menengah hingga sulit: Komputer memilih galon dengan air maksimum
        gallonIndex = availableGallons.reduce((maxIndex, currentIndex) => {
            return gallons[currentIndex] > gallons[maxIndex] ? currentIndex : maxIndex;
        }, availableGallons[0]);
    } else if (level == 5) {
        // Level 5: Strategi hampir mustahil, memilih galon yang menyisakan sedikit air
        gallonIndex = availableGallons.reduce((minIndex, currentIndex) => {
            return gallons[currentIndex] < gallons[minIndex] ? currentIndex : minIndex;
        }, availableGallons[0]);
    } else if (level == 6) {
        // Level 6: Strategi hampir mustahil, memilih galon dengan Algoritma Sean
        let startTime = Date.now();

        hasil = algoritmaSean(gallons)
        gallonIndex = hasil.index
        waterAmount = hasil.amount
        gallons[gallonIndex] -= waterAmount;
        let endTime = Date.now();
        let timeSpent = endTime - startTime; // Time in milliseconds
        console.log(`Time spent on myFunction: ${timeSpent}ms`);

    }

    if (level < 6){
        // Komputer mengurangi air dari galon yang dipilih
        waterAmount = Math.floor(Math.random() * gallons[gallonIndex]) + 1; // Mengurangi setidaknya 1 liter
        gallons[gallonIndex] -= waterAmount;
    }
    
    // Delay 3 detik sebelum menampilkan hasil komputer
    setTimeout(() => {
        console.log(`Komputer mengurangi galon ${gallonIndex + 1} sebanyak ${waterAmount} liter`);
        console.log(cyan , `Kondisi galon sekarang: ${gallons.join('   ')}`);

        // Periksa apakah semua galon kosong setelah turn komputer
        if (gallons.every(g => g <= 0)) {
            console.log(red,'Semua galon kosong! Komputer menang.');
            rl.close();
        } else {
            playerTurn(level);  // Giliran pemain lagi
        }
    }, 2000); // Delay 3000 ms (3 detik)
}

// Memulai permainan dengan memilih level
//console.log(waterAmount)
// Filename - index.js

// Requiring module
a = process.memoryUsage()
let aaa = 4
aa=1
bb=9
zz=9
ss=9
lak=0
us82="aksakka"
list =[]
list.push({
    "name": "server",

 })
var asv=12
const aaaaa = "papapaapapaapap"
cc=aaa - asv
b = process.memoryUsage()

console.log("rss:",b.rss - a.rss)
console.log("heap total:",b.heapTotal - a.heapTotal)
console.log("heap used:",b.heapUsed - a.heapUsed)
console.log("ext:",b.external - a.external)
console.log("array:",b.arrayBuffers - a.arrayBuffers)

chooseLevel();
