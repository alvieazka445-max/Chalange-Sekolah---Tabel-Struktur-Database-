// DATABASE TANAMAN HASIL OBSERVASI
const dataTanaman = [
{
field: "ID Tanaman",
bakung: "LY00000001",
kamboja: "LY00000002",
lidah: "LY00000003"
},
{
field: "Nama Lokal Tanaman",
bakung: "Bunga Bakung Sejati",
kamboja: "Bunga Kamboja Jepang",
lidah: "Lidah Buaya"
},
{
field: "Nama Ilmiah",
bakung: "Hymenocallis littoralis",
kamboja: "Adenium obesum",
lidah: "Aloe vera"
},
{
field: "Zona Lokasi Sekolah",
bakung: "Area Taman Aula SMKN 64 Jakarta",
kamboja: "Area Samping Lapangan SMKN 64 Jakarta",
lidah: "Area Depan Ruang Koperasi SMKN 64 Jakarta"
},
{
field: "Waktu Penanaman",
bakung: "15 Januari 2025",
kamboja: "10 Februari 2025",
lidah: "5 Maret 2025"
},
{
field: "Kondisi Kesehatan Tanaman",
bakung: "Tanaman tumbuh sehat dengan daun hijau segar, struktur akar kuat, dan mampu beradaptasi dengan lingkungan sekolah.",
kamboja:
"Tanaman dalam kondisi sangat baik dengan batang kokoh, bunga berkembang, serta mampu bertahan pada kondisi panas.",
lidah: "Tanaman sehat dengan daun tebal berisi gel, warna hijau alami, dan memiliki kemampuan menyimpan air."
},
{
field: "Karakteristik Morfologi",
bakung: "Memiliki akar serabut dengan umbi lapis sebagai penyimpan cadangan air. Daunnya panjang berbentuk pita, berwarna hijau tua, dan tersusun melingkar.",
kamboja:
"Memiliki batang lunak dengan bonggol besar sebagai penyimpan air. Daun berbentuk oval tebal dengan permukaan licin mengkilap.",
lidah: "Memiliki daun berdaging tebal berbentuk runcing dengan tepi bergerigi. Bagian dalam daun mengandung gel."
},
{
field: "Kondisi Faktor Abiotik",
bakung: "Membutuhkan cahaya matahari cukup, tanah dengan drainase baik, serta kondisi lingkungan lembap agar pertumbuhan optimal.",
kamboja:
"Menyukai paparan cahaya matahari penuh, media tanah kering, dan membutuhkan drainase cepat agar tidak terjadi kelebihan air.",
lidah: "Mampu hidup pada kondisi kering, membutuhkan cahaya matahari cukup, dan tidak cocok pada tanah yang terlalu basah."
},
{
field: "Peran Ekologis di SMKN 64 Jakarta",
bakung: "Berperan memperindah lingkungan sekolah, membantu menjaga kualitas udara, menjadi tempat interaksi serangga penyerbuk, serta membantu mengurangi erosi tanah.",
kamboja:
"Berfungsi sebagai tanaman penghijauan sekolah, membantu menjaga keseimbangan lingkungan, memberikan estetika taman, dan mendukung keberadaan polinator.",
lidah: "Membantu menjaga kelembapan area sekolah, menyimpan cadangan air alami, memperbaiki kualitas udara, serta menjadi tanaman penghias yang mudah dirawat."
},
{
field: "Dokumentasi Foto",
bakung: `<img src="bungaBakung">`,
kamboja: `<img src="kambojaJepang">`,
lidah: `<img src="lidahBuaya">`
}
];

//FUNGSI UNTUK MENAMPILKAN DATA
let tabel = "";
dataTanaman.forEach((data, index) => {
tabel += `
<tr>
<td>
${index + 1}
</td>
<td>
<b>
${data.field}
</b>
</td>
<td>
${data.bakung}
</td>
<td>
${data.kamboja}
</td>
<td>
${data.lidah}
</td>
</tr>
`;
});
document.getElementById("dataTanaman").innerHTML = tabel;