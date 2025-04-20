// Jab submit button pe click hoga
document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault(); // form submit hone se page reload na ho

  // Input values ko get karo
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  // Check karo koi field khaali na ho
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
    return;
  }

  // Table ke tbody ko select karo
  const bookList = document.getElementById('book-list');

  // Naya row banao
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete" style="color: red; font-weight: bold; border: none; background: none; cursor: pointer;">&times;</button></td>
  `;

  // Row ko list mein add karo
  bookList.appendChild(row);

  // Inputs ko clear karo
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

// Jab delete button pe click hoga
document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('tr').remove(); // us row ko delete karo
  }
});
