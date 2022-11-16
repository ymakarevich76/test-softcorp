'use strict';

//Menu------------------------------------------------------------------------------------------------
if (document.querySelector('.header__btn-burger')) {
  const btnOpenNav = document.querySelector('.header__btn-burger'),
    btnCloseNav = document.querySelector('.header__btn-close'),
    wrapNav = document.querySelector('.header__nav-wrapper'),
    nav = document.querySelector('.header__nav');

  const openMenu = () => {
    wrapNav.classList.add('header__nav-wrapper--show');
    nav.classList.remove('animate__fadeOutRight');
    nav.classList.add('animate__fadeInRight');
    nav.classList.add('header__nav--active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      nav.classList.remove('animate__fadeInRight')
    }, 1000)
  };

  const closeMenu = () => {
    nav.classList.remove('header__nav--active');
    nav.classList.remove('animate__fadeInRight');
    nav.classList.add('animate__fadeOutRight');
    document.body.style.overflow = '';

    setTimeout(() => {
      wrapNav.classList.remove('header__nav-wrapper--show')
    }, 500)
  }

  btnOpenNav.addEventListener('click', () => {
    openMenu();
  });

  wrapNav.addEventListener('click', (e) => {
    if (e.target === wrapNav && e.target !== nav) {
      closeMenu();
    }
  });

  btnCloseNav.addEventListener('click', () => {
    closeMenu();
  });
}

//Header-fix------------------------------------------------------------------------------------------------
if (document.querySelector('.header')) {
  const header = document.querySelector('.header');
  const scrollChange = 100;
  let flagHeaderFixed = false;

  const showHeader = () => {
    header.classList.add("header--fixed");
    header.classList.add("animate__fadeInDown");
    flagHeaderFixed = true;
    setTimeout(() => {
      header.classList.remove("animate__fadeInDown");
    }, 800);
  };

  const hideHeader = () => {
    flagHeaderFixed = false;
    header.classList.remove("header--fixed");
  }

  window.addEventListener('scroll', () => {
    const scrollpos = window.scrollY;

    if (scrollpos >= scrollChange && !flagHeaderFixed) {
      showHeader();
    } else if (scrollpos < 100 && flagHeaderFixed) {
      hideHeader();
    }
  })
}

//Animate------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.firstElementChild.classList.add('animate__fadeInUp');
      }
    });
  });
  observer.observe(document.querySelector('.ordering'));
})

//CustomSelect------------------------------------------------------------------------------------------------
customSelect('.select', {
  containerClass: 'custom-select',
  openerClass: 'custom-select__control',
  panelClass: 'custom-select__dropdown',
  optionClass: 'custom-select__option',
  isSelectedClass: 'custom-select__option--selected',
  hasFocusClass: 'custom-select__option--focus',
  isDisabledClass: 'custom-select__option--disabled',
  isOpenClass: 'custom-select--open'
});

//Range------------------------------------------------------------------------------------------------
if (document.querySelector('#range')) {
  const rangeSlider = document.querySelector('#range');

  noUiSlider.create(rangeSlider, {
    start: [75],
    connect: true,
    range: {
      'min': [0],
      'max': [100]
    },
  })

  const rangeSliderValueElement = document.querySelector('#range-value');

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    const rangeSliderValue = Math.ceil(values[handle]);
    rangeSliderValueElement.innerHTML = `${rangeSliderValue}%`;
  });
}

//Input-file------------------------------------------------------------------------------------------------
if (document.querySelector('.field-file__file')) {
  const inputFile = document.querySelector('.field-file__file');

  inputFile.addEventListener('change', (e) => {
    let fileName = e.target.value.split('\\')[2];
    e.target.nextElementSibling.innerHTML = fileName;
  })
}
