function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function saveData() {
  localStorage.setItem('lastName', document.getElementById('inputLastName').value);
  localStorage.setItem('firstName', document.getElementById('inputFirstName').value);
  localStorage.setItem('middleName', document.getElementById('inputMiddleName').value);
  localStorage.setItem('birthDate', document.getElementById('inputBirthDate').value);

  const file = document.getElementById('photoInput').files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem('photo', e.target.result);
      loadData();
    };
    reader.readAsDataURL(file);
  } else {
    loadData();
  }
}

function loadData() {
  document.getElementById('lastName').textContent = localStorage.getItem('lastName') || 'Коцюк';
  document.getElementById('firstName').textContent = localStorage.getItem('firstName') || 'Ольга';
  document.getElementById('firstName2').textContent = localStorage.getItem('firstName') || 'Ольга';
  document.getElementById('middleName').textContent = localStorage.getItem('middleName') || 'Миколаївна';
  document.getElementById('birthDate').textContent = localStorage.getItem('birthDate') || '24.03.2007';

  const photo = localStorage.getItem('photo');
  if (photo) document.getElementById('photoPreview').src = photo;
}

window.onload = function () {
  loadData();
  showTab('home');
};