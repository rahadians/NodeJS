function cetakNama(nama) {
  return `Halo nama saya ${nama}`;
}

PI = 3.14;
// module.exports = cetakNama; // ini apabila hanya 1 function


const mahasiswa = {
  nama: "Lidya",
  umur: 35,
  cetakMhs() {
    return `hallo, nama saya ${this.nama} berusia ${this.umur} `;
  }
}


class Orang {
  constructor() {
    console.log(`object orang telah dibuat!`);
  }
}



module.exports = { cetakNama, PI, mahasiswa, Orang };

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang
// }

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

