$(".single-item").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
});

class Course {
    constructor() {
        this.title = document.getElementById('title').value.trim();
        this.duration = document.getElementById('duration').value.trim();
    }
}

class Teacher {
    constructor() {
        this.name = document.getElementById('surname-teacher').value.trim();
    }
}

class Participant {
    constructor() {
        this.name = document.getElementById('surname-student').value.trim();
    }
}

class Certificate {
    constructor() {
        this.dateOfIssue = new Date().toLocaleDateString('en-GB');
    }
}

function chooseTemplate(event) {
    const selectedImage = document.querySelector('.selected-image');
    const containerPreview = document.getElementById("container-preview");

    if (event.target.tagName === 'IMG') {
        const src = event.target.dataset.src;
        selectedImage.innerHTML = `<img src="${src}" />`;
        document.getElementById("template").className = event.target.dataset.class;
        containerPreview.classList.add("visible");
    }
}

function generateCertificate() {
    const course = new Course();
    const teacher = new Teacher();
    const participant = new Participant();
    const certificate = new Certificate();

    if (course.title === "" || course.duration === "" || teacher.name === "" || participant.name === "") {
        alert("Будь ласка, заповніть всі поля");
        return;
    }

    const regex = /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ'.\s,-]+$/;
    if (!regex.test(teacher.name) || !regex.test(participant.name)) {
        alert("Поля вводу прізвища та ініціалів можуть містити лише літери, пробіли, апостроф і деякі розділові знаки");
        return;
    }

    if (course.duration <= 0) {
        alert("Тривалість курсу має бути додатнім числом");
        return;
    }

    document.getElementsByClassName("student-temp")[0].innerText = participant.surnameStudent;
    document.getElementsByClassName("title-temp")[0].innerText = course.title;
    document.getElementsByClassName("teacher-temp")[0].innerText = teacher.surnameTeacher;
    document.getElementsByClassName("date-temp")[0].innerText = certificate.dateOfIssue;
    document.getElementsByClassName("duration-temp")[0].innerText = course.duration;
}

function printCertificate() {
    document.getElementById("container-preview").classList.add("print-content");
    window.print();
    document.getElementById("container-preview").classList.remove("print-content");
}

function downloadCertificate(){
    
}