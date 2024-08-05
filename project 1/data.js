const nama = "pajri fauzan";
let usia = 19;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
let generasi;

    if (usia <10) {
        generasi = "bocil kematian";
    }
    else if (usia > 10 && usia < 18) {
        generasi = "remaja gen z";
    }
    else if (usia > 18 && usia < 30 ) {
        generasi = "anda dewasa" ;
    } else {
        generasi = "tua bangka"
    }

return biodata.innerHTML = generasi
}

console.log(nama);
console.log(usia);

generateBiodata();