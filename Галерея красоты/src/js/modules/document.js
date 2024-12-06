document.documentElement.classList.add("loaded"); // когда страница загрузилась

window.addEventListener("DOMContentLoaded", windowLoad); // для анимации для первых экранов, чтобы ничего не дергалось

function windowLoad() {}; // для анимации для первых экранов, чтобы ничего не дергалось


// Открытие и закрытие бургера

const dropdownBurger = document.querySelector(".dropdown-burger");
const burger = document.querySelector(".burger");
const popup = document.querySelector(".popup");

let prc = document.querySelector(".prc span");
let priceNum = 0;
const basketPageItem = document.querySelectorAll(".cabinet__item");
const basketPage = document.querySelector(".basket-page");

if (basketPage && prc && basketPageItem) {

  // deleteEl.querySelector(".delete-el__text").innerHTML = "Удалить товар из корзины?";

  basketPageItem.forEach(function (e) {
    let eInprice = e.querySelector(".cabinet-card__price span").innerHTML.trim();
    let eInpriceRepl = eInprice.replaceAll(' ', '')

    let eQuantity = e.querySelector(".wrapper-counter__counter").innerHTML.trim();
    let sum = Number(eInpriceRepl) * Number(eQuantity);

    priceNum += sum;

    let sumIntl = new Intl.NumberFormat('ru-RU').format(priceNum);

    prc.innerHTML = sumIntl;
  })
}

const cookiePopup = document.querySelector(".popup-cookie");

const popupStorage = localStorage.getItem("popup-cookie"); 

if (popupStorage !== null) {

  cookiePopup ? cookiePopup.classList.add("disabled") : "";
}

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".popup-cookie__button")) {
    cookiePopup ? cookiePopup.classList.add("disabled") : "";
    localStorage.setItem("popup-cookie", 'yes');
  }
  

  if (elementInteractive.closest(".cabinet-me-info__button")) {
    elementInteractive.closest(".cabinet-me-info_personal") ? elementInteractive.closest(".cabinet-me-info_personal").classList.add('active') : "";
    elementInteractive.closest(".cabinet-me-info_contacts") ? elementInteractive.closest(".cabinet-me-info_contacts").classList.add('active') : "";
    elementInteractive.closest(".cabinet-me-info_address") ? elementInteractive.closest(".cabinet-me-info_address").classList.add('active') : "";
  }
 
  if (elementInteractive.closest(".login")) {
    document.querySelector(".auth") ? document.querySelector(".auth").classList.add("active") : ""; 
  }

  if (elementInteractive.closest(".auth__close")) {
    document.querySelector(".auth") ? document.querySelector(".auth").classList.remove("active") : ""; 
  }

  if (elementInteractive.closest(".auth__exit")) {
    document.querySelector(".auth") ? document.querySelector(".auth").classList.remove("active") : ""; 
  }

  // корзина
  if (elementInteractive.closest(".wrapper-counter-plus")) {
    const wrapperQuantity = elementInteractive.closest(".wrapper-counter");

    const qauntity = wrapperQuantity.querySelector(".wrapper-counter__counter");

    qauntity.innerHTML = Number(qauntity.innerHTML.trim()) + 1;

    const isElement = elementInteractive.closest(".cabinet__item");

    const isElementPrice = isElement.querySelector(".cabinet-card__price span").innerHTML.trim();

    let esSum = prc.innerHTML.trim();

    let isElementPriceRepl = isElementPrice.replaceAll(' ', '')

    let sssPriceRepl = esSum.replaceAll('&nbsp;', '')

    let oldSum = Number(sssPriceRepl) - ((Number(qauntity.innerHTML.trim()) - 1) * Number(isElementPriceRepl))

    let sum = oldSum + (Number(isElementPriceRepl) * Number(qauntity.innerHTML.trim()));

    let sumIntl = new Intl.NumberFormat('ru-RU').format(sum);

    prc.innerHTML = sumIntl;
  }

  if (elementInteractive.closest(".wrapper-counter-minus")) {
    const wrapperQuantity = elementInteractive.closest(".wrapper-counter");

    const qauntity = wrapperQuantity.querySelector(".wrapper-counter__counter");

    if (Number(qauntity.innerHTML.trim()) !== 0) {

      qauntity.innerHTML = Number(qauntity.innerHTML.trim()) - 1;

      const isElement = elementInteractive.closest(".cabinet__item");

      const isElementPrice = isElement.querySelector(".cabinet-card__price span").innerHTML.trim();

      let esSum = prc.innerHTML.trim();

      let isElementPriceRepl = isElementPrice.replaceAll(' ', '')

      let sssPriceRepl = esSum.replaceAll('&nbsp;', '')

      let oldSum = Number(sssPriceRepl) - ((Number(qauntity.innerHTML.trim()) + 1) * Number(isElementPriceRepl))

      let sum = oldSum + (Number(isElementPriceRepl) * Number(qauntity.innerHTML.trim()));

      let sumIntl = new Intl.NumberFormat('ru-RU').format(sum);

      prc.innerHTML = sumIntl;
    }

  }

  if (elementInteractive.closest(".status-send__exit")) { // Открытие и закрытие бургера
    document.querySelector(".status-send") ? document.querySelector(".status-send").classList.remove("active") : "";
    document.querySelector(".status-send__item.active") ? document.querySelector(".status-send__item.active").classList.remove("active") : "";
  }

  if (elementInteractive.closest(".status-send__close")) { // Открытие и закрытие бургера
    document.querySelector(".status-send") ? document.querySelector(".status-send").classList.remove("active") : "";
    document.querySelector(".status-send__item.active") ? document.querySelector(".status-send__item.active").classList.remove("active") : "";
  }

  if (elementInteractive.closest(".tab-button")) { // Открытие и закрытие бургера
    const path = elementInteractive.closest(".tab-button").dataset.path;

    document.querySelector(".tab-button.active") ? document.querySelector(".tab-button.active").classList.remove("active") : "";

    elementInteractive.closest(".tab-button").classList.add("active");

    document.querySelectorAll(".tab-content").forEach(function (tabContent) {
      tabContent.classList.remove("active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("active")
  }

  if (elementInteractive.closest(".what-me__all")) { // Открытие и закрытие бургера
    let parent = elementInteractive.closest(".what-me__content");
    if (parent && parent.querySelector(".what-me__texts")) {
      parent.querySelector(".what-me__texts").classList.toggle("visible");
    }
  }

  if (elementInteractive.closest(".go-popup")) { // Открытие и закрытие бургера
    popup ? popup.classList.add('active') : "";
  }

  if (elementInteractive.closest(".popup__close")) { // Открытие и закрытие бургера
    popup ? popup.classList.remove("active") : "";
  }

  if (elementInteractive.closest(".popup__exit")) { // Открытие и закрытие бургера
    popup ? popup.classList.remove("active") : "";
  }

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    burger.classList.toggle("active");
    dropdownBurger.classList.toggle("active");
    if (document.body.clientWidth < 992) {
      document.body.style.overflow = "hidden";
    }
  }

  if (elementInteractive.closest(".dropdown__exit-menu")) { // Открытие и закрытие бургера 
    dropdownBurger.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".dropdown__link")) { // Открытие и закрытие бургера
    dropdownBurger.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".nav__link")) {
    document.querySelector(".wrapper-dropdown.active") ? document.querySelector(".wrapper-dropdown.active").classList.remove("active") : '';
    document.querySelector(".dropdown-nav.active") ? document.querySelector(".dropdown-nav.active").classList.remove("active") : '';
    const parent = elementInteractive.closest(".wrapper-dropdown");

    if (parent.querySelector(".dropdown-nav")) {
      parent.classList.add("active");
      parent.querySelector(".dropdown-nav").classList.add("active");
    }
  } else {
    document.querySelector(".wrapper-dropdown.active") ? document.querySelector(".wrapper-dropdown.active").classList.remove("active") : '';
    document.querySelector(".dropdown-nav.active") ? document.querySelector(".dropdown-nav.active").classList.remove("active") : '';
  }

  if (elementInteractive.closest(".idealnaya__button")) { // Открытие и закрытие бургера

    const parent = elementInteractive.closest(".accordeon");

    const parentSubList = parent.querySelector(".sublist-accordeon");

    if (!parent.classList.contains("active")) {

      document.querySelector(".idealnaya__button.active") ? document.querySelector(".idealnaya__button.active").classList.remove("active") : "";

      elementInteractive.closest(".idealnaya__button").classList.add("active");

      document.querySelectorAll(".idealnaya__item").forEach(function (e) {

        e.classList.remove("active");
        gsap.to(e.querySelector(".sublist-accordeon"), {
          height: 0,
        });

      })

      parent.classList.add("active");

      gsap.to(parentSubList, {
        height: 'auto',
      });

    } else if (parent.classList.contains("active")) {

      document.querySelector(".idealnaya__button.active") ? document.querySelector(".idealnaya__button.active").classList.remove("active") : "";

      parent.classList.remove("active");

      gsap.to(parentSubList, {
        height: 0,
      });
    }

  }

  if (elementInteractive.closest(".reviews-slider__read")) {
    const parent = elementInteractive.closest(".reviews-slider__slide");
    elementInteractive.closest(".reviews-slider__read").classList.toggle('active');
    parent.querySelector(".reviews-slider__text").classList.toggle('hidden-text');
  }


})


document.addEventListener("mouseover", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".wrapper-dropdown")) {
    document.querySelector(".wrapper-dropdown.active") ? document.querySelector(".wrapper-dropdown.active").classList.remove("active") : '';
    document.querySelector(".dropdown-nav.active") ? document.querySelector(".dropdown-nav.active").classList.remove("active") : '';
    const parent = elementInteractive.closest(".wrapper-dropdown");

    if (parent.querySelector(".dropdown-nav")) {
      parent.classList.add("active");
      parent.querySelector(".dropdown-nav").classList.add("active");
    }
  } else {
    document.querySelector(".wrapper-dropdown.active") ? document.querySelector(".wrapper-dropdown.active").classList.remove("active") : '';
    document.querySelector(".dropdown-nav.active") ? document.querySelector(".dropdown-nav.active").classList.remove("active") : '';
  }
})

// Плагин загрузки изображений и видео

const rdUpload = document.querySelectorAll(".rd-upload");

const body = document.body;

if (rdUpload) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  const callback = function (entries, observer) {

    entries.forEach(entry => {
      const elementEntry = entry.target;
      if (entry.isIntersecting) {

        if (!elementEntry.classList.contains("rd-load")) {
          elementEntry.classList.add("rd-load");

          let rdUploadBackgroundImage = elementEntry.querySelectorAll(".rd-background");

          let rdUploadImage = elementEntry.querySelectorAll("img");

          let rdUploadVideo = elementEntry.querySelectorAll("video");

          let rdUploadPicture = elementEntry.querySelectorAll("picture");

          if (elementEntry.classList.contains("rd-background")) {

            let elementEntryBackgroundImageDataImage = elementEntry.dataset.rdImage;

            elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataImage})`;
          }

          if (rdUploadBackgroundImage) {
            rdUploadBackgroundImage.forEach(function (rdUploadBackgroundImage) {

              let rdUploadBackgroundImageDataImage = rdUploadBackgroundImage.dataset.rdImage;

              rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataImage})`;

            })
          }

          if (rdUploadImage) {
            rdUploadImage.forEach(function (rdUploadImage) {

              if (!rdUploadImage.closest("picture")) {
                let rdUploadImageDataImage = rdUploadImage.dataset.rdImage;

                rdUploadImage.setAttribute("src", `${rdUploadImageDataImage}`);
              }

            })
          }

          if (rdUploadPicture) {
            rdUploadPicture.forEach(function (rdUploadPicture) {

              let rdUploadPictureSource = rdUploadPicture.querySelectorAll("source");

              rdUploadPictureSource.forEach(function (rdUploadPictureSource) {

                let rdUploadPictureSourceImage = rdUploadPictureSource.dataset.rdImage;

                rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceImage}`);

              })

            })
          }

          if (rdUploadVideo) {
            rdUploadVideo.forEach(function (rdUploadVideo) {

              let rdUploadVideoDataVideo = rdUploadVideo.dataset.rdVideo;
              let rdUploadVideoDataImage = rdUploadVideo.dataset.rdImage;

              rdUploadVideo.setAttribute("src", `${rdUploadVideoDataVideo}`);

              rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataImage}`);

            })
          }
        }

      }

    })

  }

  const observer = new IntersectionObserver(callback, options);

  rdUpload.forEach(i => {
    observer.observe(i);
  })
}

const reviewsSlider = document.querySelector(".reviews-slider");

const reviewsSliderSlide = document.querySelectorAll(".reviews-slider__slide");

if (reviewsSlider) {
  const reviewsSwiper = new Swiper(reviewsSlider, {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 'auto',
    direction: 'horizontal',
    scrollbar: {
      el: '.reviews-slider-scrollbar',
      draggable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 20
      },
      600: {
        spaceBetween: 30
      },
      992: {
        spaceBetween: 40
      }
    },
  });
}

if (reviewsSliderSlide) {
  reviewsSliderSlide.forEach(function (e) {
    let styles = getComputedStyle(e.querySelector(".reviews-slider__text"))

    if (parseInt(styles.height) < 360) {
      e.querySelector(".reviews-slider__text").classList.remove("hidden-text");
      e.querySelector(".reviews-slider__read").style.display = "none";
    } else {
      e.querySelector(".reviews-slider__text").classList.add("hidden-text");
    }
  })
}


const contactsMap = document.querySelector(".contacts__map")

if (contactsMap) {
  ymaps.ready(init);

  function init() {

    const myMap = new ymaps.Map(
      contactsMap, {
        center: [55.3444945693766, 86.12421699999999],
        zoom: 16,
      },
    );

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(55.3444945693766, 86.12421699999999), {}, {
      iconLayout: 'default#image',
      iconImageSize: [40, 40],
    });

    myMap.geoObjects.add(myPlacemark);
  }
}

const aboutLeft = document.querySelector(".about__left");

const aboutItemJjs = document.querySelector(".about__item_js");

const aboutContent = document.querySelector(".about__content");

const aboutRightBottom = document.querySelector(".about__right-bottom");

if (document.body.clientWidth < 992) {
  if (aboutLeft && aboutItemJjs) {
    aboutLeft.append(aboutItemJjs);
  }
  if (aboutContent && aboutRightBottom) {
    aboutContent.append(aboutRightBottom);
  }
}

const detailSliderSert = document.querySelector(".detail-slider-sert");

if (detailSliderSert) {
  const detailSwiperSert = new Swiper(detailSliderSert, {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 'auto',
    direction: 'horizontal',
    scrollbar: {
      el: '.detail-slider-scrollbar-sert',
      draggable: true,
    },
    breakpoints: {
      300: {
        spaceBetween: 20
      }
    },
  });
}

const detailSliderWork = document.querySelector(".detail-slider-work");

if (detailSliderWork) {
  const detailSwiperWork = new Swiper(detailSliderWork, {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 'auto',
    direction: 'horizontal',
    scrollbar: {
      el: '.detail-slider-scrollbar-work',
      draggable: true,
    },
    breakpoints: {
      300: {
        spaceBetween: 20
      },
      600: {
        spaceBetween: 30
      },
      992: {
        spaceBetween: 40
      }
    },
  });
}

const personalBirthday = document.querySelector("#personal_birthday");

if (personalBirthday) {
  let banLetter = /[A-Za-zA-Яа-яЁё]/g;
  personalBirthday.oninput = function () {
    this.value = this.value.replace(banLetter, "")
  }
}

const phoneInputs = document.querySelectorAll(".mask-tel")

if (phoneInputs) {
  var getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  }

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
      var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }
  var onPhoneKeyDown = function (e) {
    // Clear input after remove last symbol
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  }
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
}

 