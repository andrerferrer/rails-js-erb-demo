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
  const restaurantsIndex = document.getElementById("restaurants-index")
  if (restaurantsIndex) {

    const editBtns = document.querySelectorAll('.edit-btn')
    
    editBtns.forEach( (editBtn) => {
      editBtn.addEventListener('click', (event) => {
        const currentBtn = event.currentTarget
        const parentElement = currentBtn.parentElement
        const currentInput = parentElement.querySelector("input")
    
        toggleBtnAndInput(currentBtn, currentInput)
        
        currentInput.addEventListener('keypress', updateRestaurantName)
        currentInput.addEventListener('blur', (event) => {
          toggleBtnAndInput(currentBtn, currentInput)
        })
      })
    })

  }
}

export { editRestaurantName }