window.addEventListener('scroll', function() {
    const header = document.getElementById('moving-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(function(item) {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 50) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
});

function revealProjects() {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {
        const projectPosition = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (projectPosition < windowHeight - 100) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealProjects);
revealProjects();

window.addEventListener('scroll', function() {
    const educationSection = document.querySelector('.edu-det');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        educationSection.classList.add('scrolled');
    } else {
        educationSection.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("downloadPDF").addEventListener("click", generatePDF);
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Portfolio - Priyanka S", 10, 10);

    doc.setFontSize(12);
    doc.text("I am a passionate and motivated Data Science student at Coimbatore Institute of Technology (CIT).", 10, 20);
    doc.text("My academic journey is centered around exploring the vast realms of data science,", 10, 30);
    doc.text("including machine learning, artificial intelligence, and data analytics.", 10, 40);

    doc.setFontSize(16);
    doc.text("Tech Stack", 10, 60);
    doc.setFontSize(12);
    doc.text("Python, C++, Java, HTML5, CSS3, JavaScript, SQL, Oracle, PowerBI, Tableau", 10, 70);

    doc.setFontSize(16);
    doc.text("Education", 10, 90);
    doc.setFontSize(12);
    doc.text("M.Sc. Data Science (2023 - Present)", 10, 100);
    doc.text("Coimbatore Institute of Technology, Coimbatore", 10, 110);
    doc.text("Higher Secondary (2021 - 2023) - 85%", 10, 120);
    doc.text("GKD School, Coimbatore", 10, 130);

    doc.setFontSize(16);
    doc.text("Projects", 10, 150);
    doc.setFontSize(12);
    doc.text("Predictive Analytics Game", 10, 160);
    doc.text("Sentiment Analysis Challenge", 10, 170);
    doc.text("Image Classification Race", 10, 180);
    doc.text("Time Series Forecasting Quest", 10, 190);

    doc.save("portfolio.pdf");
}
