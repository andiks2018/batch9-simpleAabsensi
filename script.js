// tangkap element absensi_form dan root
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// kita buat array untuk menampung data absensi
let absensi_data = [];

// tambahkan event listener submit ke element absensi_form
absensi_form.addEventListener('submit', (event) => {
  // mencegah form dari reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;

  console.info(fullname);

  //validasi mini
  if (fullname == '') {
    alert('silahkan masukkan nama lengkap');
    return;
  }
  //
  //push data kedalam array absensi data
  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  //reset input field
  event.target.fullname.value = '';

  //panggil render function render to html
  renderToHtml();

  //console.info(absensi_data);

  //function untuk merender data array ke div root
  function renderToHtml() {
    //reset element div root
    root.innerHTML = '';

    //mapping array to html element
    absensi_data.forEach((e, i) => {
      root.innerHTML += `
      <div class="card" draggable="true" ondragend="handleDelete(${i})">
        <span> ${i + 1}. &nbsp; ${e.nama_lengkap} </span> 
        <span> ${e.waktu} ${e.tanggal} <span>
      </div>
      `;
    });
  }
});

//delete function
function handleDelete(index) {
  console.info(index);

  //delete satu data dari array
  absensi_data.splice(index, 1);

  //render kemabali data dalam arraay ke html
  renderToHtml();
}
