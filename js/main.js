/* Start Auto Focus on the Enrollment Application First Name Field */
const myModal = document.querySelector('#enroll')
const myInput = document.querySelector('#first-name')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
/* End Auto Focus on the Enrollment Application First Name Field */