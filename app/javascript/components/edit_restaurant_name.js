import Rails from '@rails/ujs'

const toggleBtnAndInput = (currentBtn, currentInput) => {
  currentBtn.classList.toggle('hidden')
  currentInput.classList.toggle('hidden')
  // focus on input if it's no longer hidden
  if (!currentInput.classList.contains('hidden')) currentInput.focus()
}

const updateRestaurantName = (event) => {
  if (event.key == "Enter") {
    const id = event.currentTarget.id.slice(-1)

    Rails.ajax({
      url: `/restaurants/${id}`,
      type: "put",
      // if we had data, we could add it like this
      // data: "",
      success: function(data) { 
        // remove button
        currentBtn.parentElement.remove() 
      },
      error: function(data) {alert('something went wrong!')}
    })
  }
}

const editRestaurantName = () => {
  // check if we are on the restaurants index page
  const restaurantsIndex = document.getElementById("restaurants-index")
  // if so, we'll run the code
  if (restaurantsIndex) {

    // first, we select all edit btns and inputs
    const editBtns = document.querySelectorAll('.edit-btn')
    const editInputs = document.querySelectorAll('.edit-input')

    // for each edit btn we add a click event to hide the btn and show the input
    editBtns.forEach( (editBtn) => {
      editBtn.addEventListener('click', (event) => {
        const currentInput = event.currentTarget.parentElement.querySelector("input")
        toggleBtnAndInput(editBtn, currentInput)
      })
    })

    // for each edit input we add a click event to hide the input and show the btn
    editInputs.forEach((editInput) => {
      
      editInput.addEventListener('blur', (event) => {
        const currentBtn = event.currentTarget.parentElement.querySelector(".edit-btn")
        toggleBtnAndInput(currentBtn, editInput)
      })

      // we'll also add an event listener to check if the user press enter, 
      // if so, we update the name in the DB
      editInput.addEventListener('keypress', updateRestaurantName)
    })

  }
}

export { editRestaurantName }