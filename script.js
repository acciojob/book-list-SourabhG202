//your JS code here. If required.
document.getElementById('submit').addEventListner('click',function(e){
	e.preventDefault();
	const title = document.getElementById('title').value.trim();
	const author = document.getElementById('author').value.trim();
	cont isbn = document.getElementById('isbn').value.trim();

	if(title==='' || author==='' || isbn===''){
		 alert('please in all fields');
		return;
	}
	const booklist = document.getElementById('book-list');
	const row  = document.createElement('tr');
	row.innerHTML = 
		<td>${title}</td>
	    <td>${author}</td>
		<td>${isbn}</td>;

	booklist.appendChild(row);
document.getElementById('title').value='';
document.getElementById('author').value='';
document.getElementById('isbn').value='';

												  
});
document.getElementById('book-list').addEventListner('click',function(e){
	if(e.target.classList.contains('delete')){
		e.target.closest('tr').remove();
	}
	
});

