let photoarray = [
    photo1 = {
        photo: './images/DSC00274.jpg',
        title: 'Lotus Pond',
        location: 'The Dragon and Tiger Pagodas, Kaohsiung, Taiwan',        
        date: 'July 14th 2019.',
      },
    photo2 = {
        photo: './images/DSC00337.jpg',
        title: 'Buddha Temple',
        location: 'The Dragon and Tiger Pagodas, Kaohsiung, Taiwan',        
        date: 'July 14th 2019.',
      },
    photo3 = {
        photo: './images/DSC00349.jpg',
        title: 'Game of lights',
        location: 'The Dragon and Tiger Pagodas, Kaohsiung, Taiwan',        
        date: 'July 14th 2019.',
      },
    photo4 = {
        photo: './images/DSC00361.jpeg',
        title: 'Spectrum',
        location: 'The Formosa Boulevard MRT Station, Kaohsiung, Taiwan',        
        date: 'July 21st 2019.',
      },
    photo5 = {
        photo: './images/DSC00383.jpg',
        title: 'Diva',
        location: 'Taipei Zoo, Taipei, Taiwan',        
        date: 'July 29th 2019.',
      },
    photo6 = {
        photo: './images/DSC00412.jpeg',
        title: 'Window to the real world',
        location: 'Monkey Mountain, Kaohsiung, Taiwan',        
        date: 'July 21sh 2019.',
      },
    photo7 = {
        photo: './images/DSC00534.jpeg',
        title: 'Mountain transport',
        location: 'Alishan National Scenic Area, Chiayi County, Taiwan',        
        date: 'July 28th 2019.',
      },
    photo8 = {
        photo: './images/DSC00628.jpg',
        title: "Doc'",
        location: 'Kaohsiung Museum of Fine Arts, Kaohsiung, Taiwan',        
        date: 'August 5th 2019.',
      },
    photo9 = {
        photo: './images/DSC00663.jpg',
        title: 'Giant reptile',
        location: 'Kaohsiung Museum of Fine Arts, Kaohsiung, Taiwan',        
        date: 'August 5th 2019.',
      },
    photo10 = {
        photo: './images/IMG_0666.jpg',
        title: 'World is mine',
        location: 'Alishan National Scenic Area, Chiayi County, Taiwan',        
        date: 'July 29th 2019.',
      },
]

let currentphoto = 0


  $('#kep').attr('src', photoarray[currentphoto].photo);
  $('#title').text(photoarray[currentphoto].title);
  $('#location').text(photoarray[currentphoto].location);
  $('#date').text(photoarray[currentphoto].date);

$('.forward').click(() => {
    currentphoto++;
    if (currentphoto > 9) {
        currentphoto = 0;
      }
    $('#kep').attr('src', photoarray[currentphoto].photo);
    $('#title').text(photoarray[currentphoto].title);
    $('#location').text(photoarray[currentphoto].location);
    $('#date').text(photoarray[currentphoto].date);
    
})



$('.backward').click(() => {
    currentphoto--;
    if (currentphoto < 0) {
        currentphoto = 9;
      }
    $('#kep').attr('src', photoarray[currentphoto].photo);
    $('#title').text(photoarray[currentphoto].title);
    $('#location').text(photoarray[currentphoto].location);
    $('#date').text(photoarray[currentphoto].date);
})

