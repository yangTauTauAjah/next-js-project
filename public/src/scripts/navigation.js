
/* <----------initial: get all nav element and pages----------> */
const NavbarElement = document.querySelector('#navbar')
const SidebarElement = document.querySelector('#sidebar')
const BackdropElement = document.querySelector('#backdrop')

const NavbarLink = NavbarElement.querySelectorAll('a')
const SidebarLink = SidebarElement.querySelectorAll('a')
const SidebarToggle = document.querySelector('#sidebar-toggle')

// const Nav = [...document.querySelectorAll('nav li a').values()]
const Page = [
  document.getElementById('home'),
  document.getElementById('about'),
  document.getElementById('skills'),
  document.getElementById('projects'),
  document.getElementById('socials')
]
/* <-----------------------------------------------------------> */



/* <---------------define all necessary function---------------> */
function clearClass() {
  NavbarLink.forEach(e => {
    e.classList.remove('selected')
  })

  SidebarLink.forEach(e => {
    e.classList.remove('selected')
  })
}

function showSideBar(bool) {
  if (bool) {
    document.documentElement.style.setProperty('overflow-y', 'hidden')
    BackdropElement.classList.remove('hidden')
    setTimeout(() => {
      SidebarElement.classList.add('show')
      setTimeout(() => {
        SidebarElement.focus()
      }, 100)
    }, 100)
  } else {
    document.documentElement.style.setProperty('overflow-y', 'initial')
    SidebarElement.classList.remove('show')
    setTimeout(() => {
      BackdropElement.classList.add('hidden')
    }, 100)
  }
}
/* <------------------------------------------------------------> */




SidebarLink.forEach(e => e.addEventListener('click', () => showSideBar(false)))
SidebarElement.addEventListener('focusout', () => showSideBar(false))
SidebarToggle.addEventListener('click', () => showSideBar(true))

document.onscroll = () => {

  if (Page[0].getBoundingClientRect().y === 0) {
    clearClass()
    NavbarLink[0].classList.add('selected')
    SidebarLink[0].classList.add('selected')
  }
  else if (Page[1].getBoundingClientRect().y === 0) {
    clearClass()
    NavbarLink[1].classList.add('selected')
    SidebarLink[1].classList.add('selected')
  }
  else if (Page[2].getBoundingClientRect().y === 0) {
    clearClass()
    NavbarLink[2].classList.add('selected')
    SidebarLink[2].classList.add('selected')
  }
  else if (Page[3].getBoundingClientRect().y === 0) {
    clearClass()
    NavbarLink[3].classList.add('selected')
    SidebarLink[3].classList.add('selected')
  }
  else if (Page[4].getBoundingClientRect().y === 0) {
    clearClass()
    NavbarLink[4].classList.add('selected')
    SidebarLink[4].classList.add('selected')
  }
  

}

document.querySelectorAll('.contact-btn').forEach(e => {
  e.onclick = () => {
    Page[-1].scrollIntoView()
  }
})
document.querySelectorAll('.view-portfolio-btn').forEach(e => {
  e.onclick = () => Page[-2].scrollIntoView()
})