import Rails from '@rails/ujs'

const hideUnhideElements = (event) => {

  const toggleHidden = (element) => {
    element.classList.toggle('hidden')
  }

  // select the parent element and toggle hidden on all the children elements
  const parentElement = event.currentTarget.parentElement
  Array.from(parentElement.children).forEach((childElement) => {
    toggleHidden(childElement)
  })

  // focus on input if it's no longer hidden
  const currentInput = parentElement.querySelector(".edit-input")
  if (!currentInput.classList.contains('hidden')) currentInput.focus()
}

const updateRestaurantName = (event) => {
  if (event.key == "Enter") {
    const id = event.currentTarget.id.slice(-1)
    console.log(id)
    // Rails.ajax({
    //   url: `/restaurants/${id}`,
    //   type: "put",
    //   // if we had data, we could add it like this
    //   // data: "",
    //   success: function(data) { 
    //     // remove button
    //     currentBtn.parentElement.remove() 
    //   },
    //   error: function(data) {alert('something went wrong!')}
    // })
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
      editBtn.addEventListener('click', hideUnhideElements)
    })

    // for each edit input we add a click event to hide the input and show the btn
    editInputs.forEach((editInput) => {
      
      editInput.addEventListener('blur', hideUnhideElements)

      // we'll also add an event listener to check if the user press enter, 
      // if so, we update the name in the DB
      editInput.addEventListener('keypress', updateRestaurantName)
    })

  }
}

export { editRestaurantName }