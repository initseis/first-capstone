// Mobile Menu Popup
const menuDiv = document.querySelector('#popup-menu');
const openPopupBtn = document.querySelector('#menu-mob');
const closeMenuBtn = document.querySelector('#close-menu-btn');

openPopupBtn.addEventListener('click', showMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function showMenu() {
  menuDiv.style.display = 'block';
}

function closeMenu() {
  menuDiv.style.display = 'none';
}

// Loading Featured Speakers section Dinamically
const speakers = [
  {
    name: 'Brian Vermeer',
    position: 'Developer Advocate - Snyk',
    biography: 'Developer Advocate for Snyk and SofSoftware Engineer with over a decade of hands-on experience in creating and maintaining software. He is passionate about Java, (Pure) Functional Programming and Cybersecurity.',
    photo: '../img/photos/speaker-0.jpg'
  },
  {
    name: 'Eric Normand',
    position: 'Chief Trainer - LispCast LLC',
    biography: 'Eric Normand is an experienced functional programmer, trainer, speaker, and writer on all things FP. He started writing Lisp in 2000 and is now a Clojure expert, producing the most comprehensive suite of Clojure training material at PurelyFunctional.tv.',
    photo: '../img/photos/speaker-1.jpg'
  },
  {
    name: 'Rob Crowley',
    position: 'Head of Engineering - Vix Technology',
    biography: 'Rob is a software consultant, developer, and technical leader with a passion for delivering systems that perform at scale. Rob has over 15 years of experience building distributed systems on the web stack and has read more RFCs than he cares to admit.',
    photo: '../img/photos/speaker-2.jpg'
  },
  {
    name: 'Martin Fortsch',
    position: 'Principal Consultant - TNG Technology Consulting GmbH',
    biography: 'Martin Förtsch is an IT-consultant of TNG Technology Consulting GmbH based in Unterföhring near Munich who studied computer sciences. Workwise his focus areas are Agile Development (mainly) in Java, Search Engine Technologies, Information Retrieval, and Databases.',
    photo: '../img/photos/speaker-3.jpg'
  },
  {
    name: 'Mike Wisniewska',
    position: 'Google Developer Expert - e-point SA',
    biography: 'Mike is a Google Developer Expert in Angular and Web Technologies from Poland. He is an international speaker, blogger, enthusiast of Angular, PWA, hybrid apps who loves exploring new web features and following hottest trends in tech.',
    photo: '../img/photos/speaker-4.jpg'
  },
  {
    name: 'Denis Hartington',
    position: 'Developer Advocate - Ionic',
    biography: 'Mike is a developer, Angular GDE, and Ionic Developer Advocate who’s been working in the mobile landscape for most of his professional career. When he’s not working Ionic itself, Mike works with community members and helps them succeed at mobile.',
    photo: '../img/photos/speaker-5.jpg'
  }
];

const speakerUl = document.querySelector('#speakers-list');

for (let i = 0; i < speakers.length; i+=1) {
  const speakerLi = document.createElement('li');
  speakerLi.className = 'speaker';
  if (i>1) {
    speakerLi.className = 'hidden-speaker';
  }
  speakerUl.appendChild(speakerLi);
  const speakerImgDiv = document.createElement('div');
  speakerImgDiv.className = 'speaker-img-div';
  speakerLi.appendChild(speakerImgDiv);
  const speakerImg = document.createElement('img');
  speakerImg.src = speakers[i].photo;
  speakerImgDiv.appendChild(speakerImg);
  const speakerAboutDiv = document.createElement('div');
  speakerAboutDiv.className = 'speaker-about';
  speakerLi.appendChild(speakerAboutDiv);
  const speakerNameH4 = document.createElement('h4');
  speakerNameH4.className = 'speaker-name';
  speakerNameH4.innerHTML = speakers[i].name;
  speakerAboutDiv.appendChild(speakerNameH4);
  const speakerOccupationH5 = document.createElement('h5');
  speakerOccupationH5.className = 'speaker-occupation';
  speakerOccupationH5.innerHTML = speakers[i].position;
  speakerAboutDiv.appendChild(speakerOccupationH5);
  const speakerDetailsP = document.createElement('p');
  speakerDetailsP.className = 'speaker-occupation-details';
  speakerDetailsP.innerHTML = speakers[i].biography;
  speakerAboutDiv.appendChild(speakerDetailsP);
}

// Load all speakers in mobile version

const moreBtn = document.querySelector('#more-speakers');

moreBtn.addEventListener('click', showAllSpeakers);

function showAllSpeakers() {
  const hiddenSpeakers = document.querySelectorAll('.hidden-speaker');
  for (let i = 0; i < hiddenSpeakers.length; i++) {
    hiddenSpeakers[i].style.display = 'inline-flex';
  }
  moreBtn.style.display = 'none';
}