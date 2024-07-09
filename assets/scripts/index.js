

function goToElement(element) {
  document.getElementById(element.getAttribute('data-goto')).scrollIntoView(
    {
      behavior: 'smooth'
    }
  );
}

function revealEmailForm() {
  const emailFormContainer = document.getElementById("email-form-container"); 
  const maxHeight = emailFormContainer.style.maxHeight;

  if (maxHeight == 0) {
    emailFormContainer.style.maxHeight = emailFormContainer.scrollHeight + 'px';
    emailFormContainer.style.overflow = 'visible';
  }
  else {
    emailFormContainer.style.maxHeight = null
    emailFormContainer.style.overflow = 'hidden';
  }
}