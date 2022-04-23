window.addEventListener("DOMContentLoaded" , function() {
  document.querySelector("#menu").addEventListener("click", function() {
    document.querySelector("#menu2").classList.toggle("active");
    document.querySelector("#menu").classList.toggle("no-active");
  });
  document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.header__input').classList.toggle('header__input-open');
    document.querySelector('.header__search2').classList.toggle('header__search2-active');
    document.querySelector('.header__x').classList.toggle('header__x-active');
    document.querySelector('.header__search-active').classList.toggle('header__search-none')
  });  
  document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.header__search-block768').classList.add('header__search-block768-active');
  });  
  document.querySelector('.header__x768').addEventListener('click', function(){
    document.querySelector('.header__search-block768').classList.remove('header__search-block768-active');
    document.querySelector('.header__search-active').classList.remove('header__search-none');
  });
  document.querySelector(".header__button-close").addEventListener("click", function() {
    document.querySelector("#menu2").classList.toggle("active");
    document.querySelector("#menu").classList.toggle("no-active");
  });
  const element = document.querySelector("#select")
             const choices = new Choices(element, {
              searchEnabled:false,
              itemSelectText: ""
             });
             tippy('.tooltip1', {
              content: 'Пример современных тенденций - современная методология разработки',
              hideOnClick: "toggle",
              trigger: 'click',
              allowHTML: true,			
              placement: 'top',
              maxWidth: 242,
              duration: 300,
              interactive: true,
              animation: 'scale',   
            });
    
            tippy('.tooltip2', {
              content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
              hideOnClick: "toggle",
              trigger: 'click',
              allowHTML: true,			
              placement: 'top',
              maxWidth: 242,
              duration: 300,
              interactive: true,
              animation: 'scale', 
            });
    
            tippy('.tooltip3', {
              content: 'В стремлении повысить качество',
              hideOnClick: "toggle",
              trigger: 'click',
              allowHTML: true,			
              placement: 'top',
              maxWidth: 242,
              duration: 300,
              interactive: true,
              animation: 'scale', 
            });  
            
  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 10000,
      stopOnLastSlide: true,
      disableOnInteraction:false
    },
    a11y: {
      paginationBulletMessage: 'слайд {{index}}',
    },
  });

  $("#accordion").accordion( {
    heightStyle: "content",
    active: false,
    collapsible: true
});

const galleryslider = new Swiper('#swiper', {
  // Optional parameters


  // If we need pagination
  pagination: {
    el: '.pagination-galery',
    type:"fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
    
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  slidesPerView:3,
  slidesPerGroup:3,
  spaceBetween: 50,

  a11y: {
    paginationBulletMessage: 'слайд {{index}}',
  },

  breakpoints: {
    320: {
      slidesPerGroup:1,
      spaceBetween: 38,
      slidesPerView:1,
    },
    700: {
      slidesPerView:1,
      slidesPerGroup:1,
      spaceBetween:34,
    },
    768: {
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween:37,
    },
    1440: {
      slidesPerView:3,
      slidesPerGroup:3,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView:3,
      slidesPerGroup:3,
      spaceBetween: 50,
    }
  }
});



const eventsSwiper = new Swiper('#swiper3', {
  // Optional parameters 

  // If we need pagination


  // Navigation arrows
  navigation: {
    nextEl: '.events__swiper-button-right',
    prevEl: '.events__swiper-button-left',
  },

  pagination: {
    el: '.swiper-pagination-events',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView:3,
  spaceBetween: 50,

  a11y: {
    paginationBulletMessage: 'слайд {{index}}',
  },

  breakpoints: {
    1440: {
      slidesPerView:3,
      spaceBetween: 50,
    },
    1000: {
      slidesPerView:3,
      slidesPerGroup:3,
      spaceBetween: 27,
    },
    768: {
      slidesPerView:2,
      slidesPerGroup:2,
      spaceBetween: 33,
    },
    320: {
      slidesPerView:1,
      slidesPerGroup:1,
      spaceBetween: 21,
    }
  }
});

const project = new Swiper('.project__swiper ', {

  loop: true,

  // Optional parameters
  slidesPerView:3,
  spaceBetween: 50,

  // If we need pagination


  // Navigation arrows

  navigation: {
    nextEl: '.project-button-next',
    prevEl: '.project-button-prev',
    
  },

  a11y: {
    paginationBulletMessage: 'слайд {{index}}',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView:1,
      spaceBetween:21,
    },
    768: {
      slidesPerView:2,
      spaceBetween:34,
    },
    1024: {
      slidesPerView:2,
      spaceBetween:50,
    },
    1351: {
      slidesPerView:3,
      spaceBetween: 50,
    }
  }
});


ymaps.ready(init);
       function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
            center: [55.75, 37.60],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14,
            
        });
           
        var myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map.png',
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0]       
           });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    }






const dropdownLink = document.querySelectorAll('.banner__link');
const dropdownSubmenu = document.querySelectorAll('.dropdown');
const dropdownArrow = document.querySelectorAll('.rotate-svg');
dropdownLink.forEach((el, index) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();

    const dropdownSubmenuClassList = dropdownSubmenu[index].classList;
    if (dropdownSubmenuClassList.contains('dropdown-active')) {
      dropdownSubmenuClassList.remove('dropdown-active')
      dropdownArrow[index].classList.remove('rotate-arrow')

    } else {
      dropdownSubmenu.forEach((el) => el.classList.remove('dropdown-active'))
      dropdownSubmenuClassList.add('dropdown-active')
      dropdownArrow.forEach((el) => el.classList.remove('rotate-arrow'))
      dropdownArrow[index].classList.add('rotate-arrow')
    }
  });
});

window.onclick = function(event) {
  if (!event.target.matches('.banner__link')) {
    let dropdowns = document.getElementsByClassName('dropdown');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-active')) {
        openDropdown.classList.remove('dropdown-active');
      }
    }
  }

  if (!event.target.matches('.banner__link')) {
    let dropArrows = document.getElementsByClassName('rotate-svg');
    let i;
    for (i = 0; i < dropArrows.length; i++) {
      let openDropdown = dropArrows[i];
      if (openDropdown.classList.contains('rotate-arrow')) {
        openDropdown.classList.remove('rotate-arrow');
      }
    }

    if (!event.target.matches('.dropdown')) {
      let dropArrows = document.getElementsByClassName('dropdown');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('dropdown-active')) {
          openDropdown.classList.remove('dropdown-active');
        }
      }
    }
  }
}

var selector = document.querySelector ("#tel");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate("#form", {
  rules: {
      name: {
          required: true,
          minLength:2,
          maxLength:30
      },
      tel: {
          required:true              
      },
      mail: {
          required:true,
          email:true
      },
  },
  messages: {
    name:{
        required:"Недопустимый формат"
    },

    tel: {
        required:"Недопустимый формат",

    },
    },
},
);


const anchors = document.querySelectorAll('a.header__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const tabButtons = document.querySelectorAll(".accordion-block__link")
      tabButtons.forEach(function(tabslink){
        tabslink.addEventListener("click", function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll(".catalog__tab").forEach(function(tabcontent){
                tabcontent.classList.remove("active-tab")
            })
            document.querySelector(`[data-target="${path}"]`).classList.add("active-tab")
            tabButtons.forEach(function(item) {
                item.classList.remove("work__link_link1");
            });
        })
      })

});