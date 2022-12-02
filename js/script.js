const target = '#slider1';
const options = {
	type : 'fade',
  autoplay: true,
  pagination : false,
  arrows     : false,
  rewind: true,
	speed: 600,
	perPage: 1,
	perMove: 1,
	trimSpace: false,
	updateOnMove: false,
}
const options2 = {
  mediaQuery: 'min',
	type : 'loop',
  arrows     : false,
	speed: 600,
	padding: '17%',
	perPage: 1,
	perMove: 1,
	wheel: true,
	releaseWheel: true,
	trimSpace: false,
	focus: 'center',
	updateOnMove: false,
  gap:32,
  breakpoints: {
    1200: {
      destroy: true,
    },
  }
}

const mySplide = new Splide(target, options);

mySplide.mount();

const target2 = '#slider2';
const mySplide2 = new Splide(target2, options2);

mySplide2.mount();