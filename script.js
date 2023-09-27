	
let selectedChip = null;
function selectChip(chip) {
	// Deselect the previously selected chip, if any
	if (selectedChip !== null) {
		selectedChip.classList.remove("selected");
	}
	// Select the clicked chip
	chip.classList.add("selected");
	selectedChip = chip;
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const categories = project.dataset.category.split(' ');
        if (categories.includes(category) || category === 'All') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.opacity = 0.7;
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.opacity = 1;
  }

// const androidDevChip = document.querySelector('.chip[data-category="Android Dev"]');
// androidDevChip.addEventListener('click', () => {
//     filterProjects('Android Dev');
// });