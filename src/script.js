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

export function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

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