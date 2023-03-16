$(".single-item").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});

const slider = document.querySelector('.slider');
const selectedImage = document.querySelector('.selected-image');

slider.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const src = event.target.dataset.src;
        selectedImage.innerHTML = `<img src="${src}" />`;
        document.getElementById("template").className = event.target.dataset.class;
    }
});

function validateForm() {
  const date = new Date().toLocaleDateString('en-GB');
  const title = document.getElementById("title").value.trim();
  const duration = document.getElementById("duration").value.trim();
  const surnameTeacher = document.getElementById("surname-teacher").value.trim();
  const surnameStudent = document.getElementById("surname-student").value.trim();

  if (title === "" || duration === "" || surnameTeacher === "" || surnameStudent === "") {
    alert("Будь ласка, заповніть всі поля");
    return false;
  }

  const regex = /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ'.\s,;-]+$/;
  if (!regex.test(surnameTeacher) || !regex.test(surnameStudent)) {
    alert("Поля вводу прізвища та ініціалів можуть містити лише літери, пробіли, апостроф і деякі розділові знаки.");
    return false;
  }

  return {surnameStudent, title, surnameTeacher, date, duration};
}

const createButton = document.getElementById("create");
createButton.addEventListener("click", function (event) {
  event.preventDefault();
  const data = validateForm();
  console.log(data)
  if (data) {
    document.getElementsByClassName("student-temp")[0].innerText = data.surnameStudent;
    document.getElementsByClassName("title-temp")[0].innerText = data.title;
    document.getElementsByClassName("teacher-temp")[0].innerText = data.surnameTeacher;
    document.getElementsByClassName("date-temp")[0].innerText = data.date;
    document.getElementsByClassName("duration-temp")[0].innerText = data.duration;
    }
  });
  function printCertificate(){
      const printContents = document.getElementById("template").outerHTML;
      let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}