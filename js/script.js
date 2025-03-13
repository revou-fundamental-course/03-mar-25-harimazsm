// ini file javascript //

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// fungsi message us
document.addEventListener('DOMContentLoaded', function() {
  let userName = document.cookie.split(';').find(c => c.trim().startsWith('userName='));
  let name = '';
  
  while (!name) {
      if (!userName) {
          name = prompt('Masukkan nama Anda:');
          if (!name || name.trim() === '') {
              alert('Nama harus diisi. Silakan masukkan nama Anda.');
              name = '';
          } else {
              name = name.trim();
              document.cookie = 'userName=' + name + ';path=/';
          }
      } else {
          name = userName.split('=')[1];
      }
  }
  
  document.getElementById('userName').textContent = name;

  // Update current time
  function updateTime() {
      document.getElementById('currentTime').textContent = new Date().toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime();

  // Handle form submission
  const messageForm = document.getElementById('messageForm');
  if (messageForm) {
      messageForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const nama = document.getElementById('nama').value;
          const tanggal = document.getElementById('tanggal').value;
          const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
          const pesan = document.getElementById('pesan').value;
          
          // Format the date nicely
          const formattedDate = tanggal ? new Date(tanggal).toLocaleDateString('id-ID') : '';
          
          // Update preview
          document.getElementById('previewNama').textContent = nama;
          document.getElementById('previewTanggal').textContent = formattedDate;
          document.getElementById('previewGender').textContent = gender;
          document.getElementById('previewPesan').textContent = pesan;

          // Optional: Scroll preview into view
          document.getElementById('messagePreview').scrollIntoView({ behavior: 'smooth' });
      });
  }
})

document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const tanggal = document.getElementById('tanggal').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById('pesan').value;

  document.getElementById('previewNama').textContent = nama;
  document.getElementById('previewTanggal').textContent = tanggal;
  document.getElementById('previewGender').textContent = gender;
  document.getElementById('previewPesan').textContent = pesan;

  const currentTime = new Date().toLocaleTimeString();
  document.getElementById('currentTime').textContent = currentTime;
});