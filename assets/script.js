const showdown = require("showdown");

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
const birthday = new Date(2003, 1, 18);
const currentDate = new Date();
const list = document.createElement("ul");
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

for (key in languages) {
    const years = getYears(languages[key]);
    const months = getMonths(languages[key], false);
    let text;
    switch (years) {
        case 0:
            text = months + " " + (months != 1 ? "months" : "month");
            break;
        default:
            text = years + " " + (years != 1 ? "years" : "year");
            if (months > 0) text += " and " + (months != 1 ? months + " months" : "a month");
            break;
    }
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = key + ": " + text;
    li.appendChild(p);
    list.appendChild(li);
}

function setText(div, text) {
    let converter = new showdown.Converter();
    let html = converter.makeHtml(text);
    div.innerHTML = html;

    let textBox = document.getElementById("textbox");
    while (textBox.firstChild) textBox.removeChild(textBox.lastChild);
    textBox.appendChild(div);
}

function showSkills(div) {
    div.setAttribute("id", "skillsText");                    
    setText(div, skills);
    div.appendChild(list);
}

function showHome(div) {
    div.setAttribute("id", "homeText");
    setText(div, home);
}

function showProjects(div) {
    div.setAttribute("id", "homeProjects");
    setText(div, projects);
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

/* Background */

var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    w, h, margin = 0, play,
    lines;

document.body.appendChild(canvas);

var Vec = function(x, y) {
    this.x = x;
    this.y = y;
};

var Line = function(x1, y1, x2, y2) {
    this.a = new Vec(x1, y1);
    this.b = new Vec(x2, y2);
    this.center = new Vec((x1 + x2) / 2, (y1 + y2) / 2);
    this.dx = x2 - x1;
    this.dy = y2 - y1;
};

Line.prototype.display = function() {
    context.strokeStyle = '#636363';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(this.a.x, this.a.y);
    context.lineTo(this.b.x, this.b.y);
    context.stroke();
};

function sqDist(v1, v2) {
    return (v2.x - v1.x) * (v2.x - v1.x) + (v2.y - v1.y) * (v2.y - v1.y);
}

function segIntersection(l1, l2) {
    var b_dot_d_perp = l1.dx * l2.dy - l1.dy * l2.dx;
    if (b_dot_d_perp === 0) {
        return null;
    }

    var cx = l2.a.x - l1.a.x;
    var cy = l2.a.y - l1.a.y;

    var t = (cx * l2.dy - cy * l2.dx) / b_dot_d_perp;
    if (t < 0 || t > 1) {
        return null;
    }
    var u = (cx * l1.dy - cy * l1.dx) / b_dot_d_perp;
    if (u < 0 || u > 1) {
        return null;
    }
    return new Vec(Math.round(l1.a.x + t * l1.dx), Math.round(l1.a.y + t * l1.dy));
}

function getIntersections(line) {
    var arr = [];
    for (var i = 0; i < lines.length; i++) {
        var pt = segIntersection(line, lines[i]);
        if (pt !== null) {
            arr.push(pt);
        }
    }

    arr.sort(function(a, b) {
        var aIsInsideCanvas = a.x >= margin && a.x <= w - margin && a.y >= margin && a.y <= h - margin;
        var bIsInsideCanvas = b.x >= margin && b.x <= w - margin && b.y >= margin && b.y <= h - margin;
        if (aIsInsideCanvas && bIsInsideCanvas) return sqDist(a, line.center) < sqDist(b, line.center) ? 1 : -1;
        else if (aIsInsideCanvas) return 1;
        else if (bIsInsideCanvas) return -1;
        else return 0;
    });

    return arr;
}

function getNearestIntersections(line, arr) {
    var index = arr.length - 2;
    if (arr[index].x !== line.center.x) {
        while (Math.sign(line.center.x - line.a.x) === Math.sign(line.center.x - arr[index].x)) {
            index--;
        }
    } else {
        while (Math.sign(line.center.y - line.a.y) === Math.sign(line.center.y - arr[index].y)) {
            index--;
        }
    }

    return [arr[arr.length - 1], arr[index]];
}

function reduceLine(line, intersections) {
    line.a = intersections[0];
    line.b = intersections[1];
    line.center.x = (line.a.x - line.b.x) / 2;
    line.center.y = (line.a.y - line.b.y) / 2;
    line.dx = line.b.x - line.a.x;
    line.dy = line.b.y - line.a.y;
}

function applyRule(line) {
    var intersections = getIntersections(line);
    intersections = getNearestIntersections(line, intersections);
    reduceLine(line, intersections);
    return true;
}

function createLine() {
    var pos = new Vec(margin + Math.random() * (w - 2 * margin), margin + Math.random() * (h - 2 * margin));
    var angle = Math.random() * Math.PI;

    var rad = 500;

    return new Line(
        pos.x + Math.cos(angle) * rad, pos.y + Math.sin(angle) * rad,
        pos.x + Math.cos(angle + Math.PI) * rad, pos.y + Math.sin(angle + Math.PI) * rad
    );
}

function addNewLine(x1, y1, x2, y2) {
    if (arguments.length === 0) {
        var line = createLine();
        if (applyRule(line)) {
            line.display();
            lines.push(line);
        }
    } else {
        lines.push(new Line(x1, y1, x2, y2));
        if (lines.length === 500) init();
    }
}

function init() {
    console.clear();

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    
    play = true;
    
    lines = [];

    addNewLine(margin, margin, w - margin, margin);
    addNewLine(margin, h - margin, w - margin, h - margin);
    addNewLine(margin, margin, margin, h - margin);
    addNewLine(w - margin, margin, w - margin, h - margin);

    draw();
}

function draw() {
    if (play) window.requestAnimationFrame(draw);
    addNewLine();
}

window.addEventListener('load', init);
window.addEventListener('resize', init);

showHome(document.createElement("div"));