var imageArray = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
    "image8",
    "image9",
    "image10",
    "image11",
    "image12",
    "image13",
    "image14",
  ];
  
  let imgCollection = '';
  imageArray.forEach(img => {
    imgCollection += `<img src="./gallery/${img}.jpg" alt="${img}" class="img-responsive">`;
  });
  
  const galleryContainer = document.getElementById('gallery');
  galleryContainer.innerHTML = imgCollection;
  