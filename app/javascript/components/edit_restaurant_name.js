const editRestaurantName = () => {
  const restaurantsIndex = document.getElementById("restaurants-index")
  if (restaurantsIndex) {
    const editBtns = document.querySelectorAll('[id^=edit-rest-]')

    const renderForm = (currentBtn) => {
      currentBtn.outerHTML = `
            <%= text_field :restaurant, :rename, placeholder: "Rename your restaurant", autofocus: true %>
        `
    }
    
    editBtns.forEach( (editBtn) => {
      editBtn.addEventListener('click', (event) => {
        const currentBtn = event.currentTarget
        const parentElement = currentBtn.parentElement
    
        renderForm(currentBtn)
        
        const input = parentElement.querySelector("input")
        input.addEventListener('keypress', (event) => {
          if (event.key == "Enter") {
            console.log(123)
          }
        })
      })
    })
  }
}

export { editRestaurantName }