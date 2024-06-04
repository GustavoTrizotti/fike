document.addEventListener('DOMContentLoaded', function () {
  const imgElement = document.getElementById('fairJordan');

  imgElement.addEventListener('click', function () {
    if (imgElement.src.includes('assets/air-jordan.png')) {
      imgElement.src = 'assets/air-jordan-front.png';
    } else {
      imgElement.src = 'assets/air-jordan.png';
    }
    imgElement.classList.toggle('toggled');
  });
});
