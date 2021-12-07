// Get the modal
var modala = document.getElementById("myModal-a");
var modalb = document.getElementById("myModal-b");
var modalc = document.getElementById("myModal-c");
var modald = document.getElementById("myModal-d");
var modale = document.getElementById("myModal-e");
var modalf = document.getElementById("myModal-f");


// Get the button that opens the modal
var btna = document.getElementById("open-modal-a");
var btnb = document.getElementById("open-modal-b");
var btnc = document.getElementById("open-modal-c");
var btnd = document.getElementById("open-modal-d");
var btne = document.getElementById("open-modal-e");
var btnf = document.getElementById("open-modal-f");


// Get the <span> element that closes the modal
var spana = document.getElementById("close-a");
var spanb = document.getElementById("close-b");
var spanc = document.getElementById("close-c");
var spand = document.getElementById("close-d");
var spane = document.getElementById("close-e");
var spanf = document.getElementById("close-f");

// When the user clicks on the button, open the modal
btna.onclick = function() {
  modala.style.display = "block";
}
btnb.onclick = function() {
    modalb.style.display = "block";
  }
  btnc.onclick = function() {
    modalc.style.display = "block";
  }
  btnd.onclick = function() {
    modald.style.display = "block";
  }
  btne.onclick = function() {
    modale.style.display = "block";
  }
  btnf.onclick = function() {
    modalf.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
spana.onclick = function() {
  modala.style.display = "none";
}
spanb.onclick = function() {
    modalb.style.display = "none";
  }
  spanc.onclick = function() {
    modalc.style.display = "none";
  }
  spand.onclick = function() {
    modald.style.display = "none";
  }
  spane.onclick = function() {
    modale.style.display = "none";
  }
  spanf.onclick = function() {
    modalf.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
    if (event.target == modala) {
      modala.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == modalb) {
      modalb.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == modalc) {
      modalc.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == modale) {
      modale.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == modalf) {
      modalf.style.display = "none";
    }
  }

  //-----------------------------------------------------

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('subject');
const password2 = document.getElementById('messege');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}

//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}
function checkRequired(inputArrs) {
    inputArrs.forEach(function(textarea){
        if(textarea.value.trim() === ''){
            showError(textarea,`${getFieldName(textarea)} is required`)
        }else {
            showSucces(textarea);
        }
    });
}

//check input/textarea Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}
function checkLength(textarea, min ,max) {
    if(textarea.value.length < min) {
        showError(input, `${getFieldName(textarea)} must be at least ${min} characters`);
    }else if(textarea.value.length > max) {
        showError(textarea, `${getFieldName(textarea)} must be les than ${max} characters`);
    }else {
        showSucces(textarea);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function getFieldName(textarea) {
    return textarea.id.charAt(0).toUpperCase() + textarea.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});

//------------------------------------------------------------------------------------


// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.menu__list').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


//-----------------------------ScrollAnimationImages-----------------------------------//
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }else{
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
      animOnScroll();
  },  300);
  
}

//-------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
	document.addEventListener("scroll", function() {
		getProgress();
	});

	function getProgress() {					
		var topPos = document.documentElement.scrollTop;
		// Alternatively, you can use document.body.scrollTop || document.documentElement.scrollTop;
		
		// Remaining left to scroll
		var remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
		// clientHeight is the inner height of the element, including padding
		
		var percentage = (topPos / remaining) * 100;

		document.querySelector(".progress--bar").style.width = percentage + "%";
	}
});


//------------------------------------------------------------------
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();