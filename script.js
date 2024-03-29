document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("changeTextButton");
  const wishesContent = document.getElementById("wishesContent");
  const texts = [
    "Len 😤LU JANGAN INSECURE MULU TAI L, CC CAPEK DNGERNY LU TUH CANTIK BLOG MUKA LU KLO LGI BREAK OUT GAK PERLU DKIT2 BERASA ANEH EMGNYA LU PIKIR JERAWAT GAK BISA ILANG..BISA KLO DIOBATIN..INTINYA JGN INSECURE. GILA ITU MAKANAN CC TIAP JAM MENIT DETIK LU NANYA 'ci helen aneh ya' GAK ASU GAKKKKKKKKKKK 🙄 MO MUNTAH DENGERIN TUH PERTANYAAN HOEKK.. trus lu lulus sekolah biar bisa nyari kerja yang emg lu minat. Jangan mandang gaji gede tapi lu gak niat lakuiinya hasilnya bisa zonk karena stress harus ngelakuin hal yg gak lu suka. Jangan boros pas uda gajian,mikir2 dulu penting ato gak. Klo gak penting2 banget jgn dibeli. Ntar pas mo bli barang yg lebih penting kewalahan karena g ada duit. Kalo bergaul sm siapa aja boleh asal lu jgn ikutan tololnya mereka. Lu sm darrel baek2 deh sehat2 aja...macem2 awas lu ber2. Kita emg jarang ktmu krn g serumah tapi cc ngarep lu baek2 aja dsno, thx buat jadi temen pertama cici dirumah dari kecil meskipun sering berantem tapi baekan lagi,thx ud lahir didunia ini dan masih bs tahan sm dunia yg jahat,thx jadi orang pertama yg selalu bikin cc ketawa lepas sampe gak bersuara dan perut sakit. Kalo lu pengen curhat..curhat aja ke cc. Cc emg gak bisa kasih saran yang bagus yg mau lu denger karena cc orgnya gak ekspresif pas nyampeiin sesuatu kesannya kek org judes...atleast cc bisa dengerin keluh kesah lu selama ini. Klo lu minta saran yah bru cc ksih saran tpi please anjr jgn ngejudgje lewat muka cc. Jangan cerita ke org lain dulu...harus cici duluan kalo emg pengen curhat meskipun itu darrel juga..cici gaksuka (iya gw jeles mau apa lu) lu beda 3 thun sm cc tapi gak ada imut2nya heran kenapa ya? Tapi kok cc liat anak org seumuran lu lucu2 ya? Lu tuh masih muda jangan terlalu mikirin dunia yg gila ini..masih anak kicik bertingkahlah layaknya ank kecil..jangan gede2 jadi orang dewasa gak enak. Kalo cc punya rumah sndiri kondisi masih single tinggal bareng cc (tapi tau diri ya klo lu sndrii ud punya duit)<br><br>~cc lu terkeren 😋",
    "happy birthday anak kecil walaupun klo uda ber4 berasa gue yang paling kecil,happy birthday yaaa cil semoga jadi anak yang berbakti sm papa mama semoga jadi anak yang bisa berguna buat keluarga/org sekitar semoga apa yang jd keinginan lu dimasa depan bisa tercapai semoga lu ttp jadi anak yang bawel riweuh lelet yaaa semoga selalu diberkati tuhan,kalo ada masalah plss jangan pendem sndrian gabaik.<br>intinya gue berharap lu bisa jd orang baik dikemudian hari sehat selalu ya panjang umur langgeng sm darel juga <br><br>plsss gue gmw make emot love/blg love u <br><br>krna gengsi gue lebih gede dr pd ikatan persaudaraan kita hehe <br><br>tp intinya y gue syg sm lu si dikit.<br><br>oke makasi,goodluck<br><br>-bella",
    "Hppy sweet seventeen! , semogaa segalaa sesuatu yg lagi di semogakann tersemogakan yaa tahunn ini, langgeng teruss sama grep.. wish u all the best n may the blessing of God be with u n fams🫵🏻🤍🤏🏻🎊<br><br>~celsi",
    "HBD helen, meskipun lu merebut cwo gw tpi oke I'm fine moga lu makin sehat makin langgeng juga ama grepe biar dia gk sadboy lgi<br><br>-Ady",
    "Selamat ulang tahun yang manis untuk Hellen! Semoga usiamu yang ke-17 penuh dengan kebahagiaan, keberhasilan, dan kenangan indah yang akan selamanya menjadi bagian tak terlupakan dari perjalanan hidupmu. Selamat merayakan hari istimewamu dengan penuh keceriaan dan cinta dari orang-orang terdekatmu!<br><br>~Felix",
    'Semoga makin dewasa, makin kuat ngejalanin hari" yang makin berat, makin bertumbuh dalam Tuhan, dan selalu andalkan Tuhan dalam setiap keputusan dan kegiatan, dan kurang"in insecure<br><br>~rara',
    "happy 17th birthdayy senggg! 💞 w berharap di ulang tahun u yang ke 17 ini u makin rajin lagiii bljrr buat sekolahhh, makinn deket dan bangun hubungan sama Tuhan, dan kuranginn insecureee karna u cakepp bangett sumpahh w bingung kenapa u insecure 😭🙏🏻, semogaa u diberkatiii Tuhannn, w berharap u gakk berubahh dan tetap jadi org yang ceria dan bisa menjadi terang di dlm kegelapan (wkwkkw gg ga sih), nahhh udahh ituuu ajaa, semogaaa kitaaa langgeng dan i hope you have a blessed birthday cantikkk luvvvv++++🫂💕<br><br>-darel",
  ];
  let currentIndex = 0;

  button.addEventListener("click", function () {
    wishesContent.style.transition = "opacity 0.3s ease";
    wishesContent.style.opacity = 0;

    setTimeout(() => {
      wishesContent.innerHTML = `<p>${texts[currentIndex]}</p>`;
      currentIndex = (currentIndex + 1) % texts.length;
      wishesContent.style.opacity = 1;
    }, 300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imageSlider = document.getElementById("imageSlider");
  const images = [];
  for (let i = 2; i <= 41; i++) {
    images.push(`${i}.jpg`);
  }
  let currentIndex = 0;

  function changeImage() {
    imageSlider.style.transition = "opacity 0.5s ease-in";
    imageSlider.style.opacity = 0;

    setTimeout(() => {
      imageSlider.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
      imageSlider.style.opacity = 1; 
    }, 300);
  }

  setInterval(changeImage, 3000);

  changeImage(); 
});

