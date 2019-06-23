const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-border');

  // Grad the content from the DOM
  const tabContentitem = document.querySelector(`#${this.id}-content`);
  // add show to the tab-1-content
  tabContentitem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItem.forEach(item => item.classList.remove('show'));
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
