// فقط اگر اسلایدر وجود دارد Swiper را مقداردهی کن
if (document.querySelector('.mySwiper')) {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 10,
    });
}

// نمایش فرم ورود و ثبت نام فقط اگر دکمه‌ها و فرم‌ها وجود دارند
const showLoginBtn = document.getElementById("showLogin");
const showSignupBtn = document.getElementById("showSignup");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (showLoginBtn && showSignupBtn && loginForm && signupForm) {
    showLoginBtn.addEventListener("click", function () {
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
        showLoginBtn.classList.remove("bg-gray-200", "hovwe:bg-gray-300");
        showLoginBtn.classList.add("bg-orange-300", "hover:bg-orange-400");
        showSignupBtn.classList.add("bg-gray-200", "hovwe:bg-gray-300");
        showSignupBtn.classList.remove("bg-orange-300", "hover:bg-orange-400");
    });

    showSignupBtn.addEventListener("click", function () {
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
        showSignupBtn.classList.remove("bg-gray-200", "hovwe:bg-gray-300");
        showSignupBtn.classList.add("bg-orange-300", "hover:bg-orange-400");
        showLoginBtn.classList.add("bg-gray-200", "hovwe:bg-gray-300");
        showLoginBtn.classList.remove("bg-orange-300", "hover:bg-orange-400");

    });
}
const radius = 80;
const circumference = 2 * Math.PI * radius;
const totalDays = 365;

const daysLeft = 145;
const daysPassed = daysLeft;

const progress = daysPassed / totalDays;
const targetOffset = circumference - (circumference * progress);

const progressCircle = document.querySelector('#progressCircle');
const progressText = document.querySelector('#pgtext');
if (progressCircle) {
  progressCircle.setAttribute('stroke-dasharray', circumference);


  progressCircle.setAttribute('stroke-dashoffset', circumference);


  let currentOffset = circumference;
  const step = (circumference - targetOffset) / 40;
  function animate() {
    if (currentOffset > targetOffset) {
      currentOffset -= step;
      if (currentOffset < targetOffset) currentOffset = targetOffset;
      progressCircle.setAttribute('stroke-dashoffset', currentOffset);
      requestAnimationFrame(animate);
    }
  }
  animate();
}
if (progressText) {
  progressText.textContent = daysLeft;
}
