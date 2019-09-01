var nama = "Zero";
var peran = "Penyihir";

/*
console.log(nama);
console.log(peran);
*/

//Output untuk Input kosongan
if (nama == "" && peran == "") 
{console.log("nama harus diisi")}

//Output untuk Input nama = bebas dan peran = ''
else if (nama !== "" && peran == "") 
{console.log("Halo " + nama + ", pilih peranmu untuk memulai game")}

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
else if (nama === "Nina" && peran === "Ksatria") 
{console.log("Selamat datang di Dunia Proxytia, " 
+ nama + "\n" + "Halo " + peran + "\xa0" + nama + ", kamu dapat menyerang dengan senjatamu!")} 

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
else if (nama === "Danu" && peran === "Tabib")
{console.log("Selamat datang di Dunia Proxytia, "
+ nama + "\n" + "Halo " + peran + "\xa0" + nama + ", kamu akan membantu temanmu yang terluka")}

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
else if (nama === "Zero" && peran === "Penyihir")
{console.log("Selamat datang di Dunia Proxytia, "
+ nama + "\n" + "Halo " + peran + "\xa0" + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")}