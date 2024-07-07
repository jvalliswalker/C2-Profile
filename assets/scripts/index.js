

function goToElement(element) {
  document.getElementById(element.getAttribute('data-goto')).scrollIntoView(
    {
      behavior: 'smooth'
    }
  );
}