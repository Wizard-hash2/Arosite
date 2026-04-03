
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

if (sidebar && toggleBtn) {
	toggleBtn.addEventListener('click', () => {
		sidebar.classList.toggle('show');
	});
}




