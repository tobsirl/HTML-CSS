const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  this.classList.add('tab-border');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
