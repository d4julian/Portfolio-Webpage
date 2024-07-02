import showdown from "showdown";

const home = `My name is Julian Ubico. I'm a software developer currently pursuing a Bachelor of Science in Computer Science (Spring 2025) at the University of Florida. I have a diverse skill set in programming languages like Java, SQL, HTML, CSS, JavaScript, and C++, and I am proficient in Linux system administration. I specialize in creating responsive, mobile-friendly websites, setting up web servers with NGINX, and developing full stack applications. I first learned how to program at the age of 16, with Java being my foundation. My most notable project is [DirtCraft](https://dirtcraft.net/), a modded minecraft network which I co-founded. During the summer of 2021, I also completed an internship with [Tech For Good](https://www.techforgoodinc.org/), a not-for-profit organization focused on providing access to technology for the less fortunate. I collaborated with team members on projects, actively participated in the daily meetings, and gained experience in a real-world software engineering environment.`;
const skills = `I am experienced with databases such as H2, MySQL, and MariaDB. I have strong skills in Linux, particularly CentOS 7, and am proficient in system administration. I have utilized Jenkins for automated build processes. I am adept at setting up and managing web servers using NGINX. I can develop responsive, mobile-friendly websites and full stack applications. Additionally, I am well-versed in software engineering practices, including version control with Git, continuous integration and delivery (CI/CD), and agile methodologies.<br><br>**Programming Languages**`;
const projects = `
#### [Dirt Panel](https://github.com/d4julian)
Developed a full stack administration panel with a React frontend and an Express & Java backend. The panel uses MySQL databases for efficient data storage and retrieval, allowing seamless management and monitoring of the server network.

#### [Dirt Launcher](https://github.com/d4julian)
Created a custom modded Minecraft launcher using JavaFX. This launcher provided users with an intuitive interface for managing game mods and updates, enhancing the overall user experience.
    `;

const java = new Date(2019, 3, 1);
const web = new Date(2019, 10, 1);
const sql = new Date(2019, 7, 1);
const cpp = new Date(2022, 8, 1);
const currentDate = new Date();
let languagesString = "\n";
const languages = {
    Java: java,
    SQL: sql,
    HTML: web,
    CSS: web,
    JavaScript: web,
    "C++": cpp
}

function getYears(date) {
    return Math.abs(new Date(currentDate - date).getUTCFullYear() - 1970);
}

function getMonths(date, withYears) {
    const months = new Date(currentDate - date).getUTCMonth();
    return withYears ? getYears(date) * 12 + months : months;
}

for (let key in languages) {
    const years = getYears(languages[key]);
    const months = getMonths(languages[key], false);
    let text;
    switch (years) {
        case 0:
            text = `${months} ${(months != 1 ? "months" : "month")}`
            break;
        default:
            text = years + " " + (years != 1 ? "years" : "year");
            if (months > 0) text += " and " + (months != 1 ? months + " months" : "a month");
            break;
    }
    languagesString += `* ${key}: ${text}\n`;
}
languagesString.trimEnd();

function setText(text, showLanguages = false) {

    let converter = new showdown.Converter();
    let html = converter.makeHtml((showLanguages) ? text + languagesString : text);

    const textBox = document.getElementById("textbox");
    while (textBox.firstChild) textBox.removeChild(textBox.lastChild);
    textBox.classList.add("fade");

    setTimeout(() => {
        textBox.innerHTML = html;
        textBox.classList.remove("fade");
      }, 250);
}

function showSkills() {
    setText(skills, true);

}

function showHome() {
    setText(home);
}

function showProjects() {
    setText(projects);
}

const categories = document.getElementById("categories").children;
for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    category.onclick = function() {
        let div = document.createElement("span");
        switch (category.id) {
            case "home":
                showHome(div);
                break;
            case "skills":
                showSkills(div);
                break;
            case "projects":
                showProjects(div);
                break;
        }
        document.getElementById("text");
    };
}

showHome();