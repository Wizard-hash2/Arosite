
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

if (sidebar && toggleBtn) {
	const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

	const closeSidebar = () => {
		sidebar.classList.remove('show');
	};

	toggleBtn.addEventListener('click', () => {
		sidebar.classList.toggle('show');
	});

	// Close menu after choosing a section on mobile.
	sidebar.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener('click', () => {
			if (isMobile()) {
				closeSidebar();
			}
		});
	});

	// Close menu when tapping outside it on mobile.
	document.addEventListener('click', (event) => {
		if (!isMobile() || !sidebar.classList.contains('show')) {
			return;
		}

		const target = event.target;
		if (!(target instanceof Element)) {
			return;
		}

		if (!sidebar.contains(target) && !toggleBtn.contains(target)) {
			closeSidebar();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeSidebar();
		}
	});

	window.addEventListener('resize', () => {
		if (!isMobile()) {
			closeSidebar();
		}
	});
}




