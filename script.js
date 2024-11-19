/*=============== SHOW MENU ===============*/
const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/    
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/  
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        :header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header')

}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
 const contactForm = document.getElementById('contact-form'),
       contactMessage = document.getElementById('contact-message')

 const sendEmail =(e) =>{
     e.preventDefault()

    //Show sent message
     emailjs.sendForm('service_9cdov8h','template_byqak89','#contact-form','Zd5d26ituPIDAzf4H')
     .then(() =>{
         contactMessage.textContent = 'Message sent successfully ✅'

        //Message remove timeout 
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear Fields
        contactForm.reset()
    }, () =>{
        //Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
 }

contactForm.addEventListener('submit', sendEmail)




const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')                    
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')


const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop  =current.offsetTop - 58,
                sectionId   = current.getAttribute('id'),
                sectionClass = document.querySelector(' .nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }        
    
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK MODE ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme   = 'dark-theme'
const iconTheme   = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')



const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click',() => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})

