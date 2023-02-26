/* execute handler on partially rendering */
function executeOnVisible(element, onRenderIn, onRenderOut) {

  new IntersectionObserver(entry => {
    if (entry[0].isIntersecting) {
      onRenderIn()
    } else {
      onRenderOut()
    }
  }).observe(element)

}

/* execute handler on fully rendering */
function executeOnFirstRender(element, onRenderIn, onRenderOut) {

  document.addEventListener('scroll', () => {

    const box = element.getBoundingClientRect()

    if (
        box.top >= 0 &&
        box.bottom <= innerHeight 
        /* && box.left >= 0 &&
        box.right <= innerWidth */
    ) {
      onRenderIn();
    } else {
      onRenderOut()
    }

  })

}





const mainHeading = document.querySelector('#main-heading')
const nameElement = document.querySelector('#name')
const descriptionElement = document.querySelector('#description')

executeOnVisible(mainHeading,
  () => {
    nameElement.classList.remove('opacity-0')
    nameElement.classList.remove('-translate-x-1/4')

    descriptionElement.classList.remove('opacity-0')
    descriptionElement.classList.remove('translate-x-1/4')
  },
  () => {
    nameElement.classList.add('opacity-0')
    nameElement.classList.add('-translate-x-1/4')

    descriptionElement.classList.add('opacity-0')
    descriptionElement.classList.add('translate-x-1/4')
  }
)






const skillsList = document.querySelector("#skills ul")
const skillsItem = document.querySelectorAll("#skills li")

executeOnVisible(skillsList,
  () => {
    skillsItem.forEach(e => {
      e.classList.remove('opacity-0')
      e.classList.remove('-translate-x-1/2')
    })
  },
  () => {
    skillsItem.forEach(e => {
      e.classList.add('opacity-0')
      e.classList.add('-translate-x-1/2')
    })
  }
)






const projectsList = document.querySelector("#projects ul")
const projectsItem = document.querySelectorAll("#projects li")

executeOnVisible(projectsList,
  () => {
    projectsItem.forEach(e => {
      e.classList.remove('opacity-0')
      e.classList.remove('-translate-x-1/2')
    })
  },
  () => {
    projectsItem.forEach(e => {
      e.classList.add('opacity-0')
      e.classList.add('-translate-x-1/2')
    })
  }
)






const socialsList = document.querySelector("#socials ul")
const socialsItem = document.querySelectorAll("#socials .item")

executeOnVisible(socialsList,
  () => {
    socialsItem.forEach(e => {
      e.classList.remove('opacity-0')
      e.classList.remove('translate-x-1/2')
    })
  },
  () => {
    socialsItem.forEach(e => {
      e.classList.add('opacity-0')
      e.classList.add('translate-x-1/2')
    })
  }
)