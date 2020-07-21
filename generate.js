let fs = require('fs');
let json = require('./codes.json');

let template = `---
prev: ../codes/
next: false
---

# Error {code}
### {message}
{description}

#### Possible Causes
{causes}
#### Possible Solutions
{solutions}* Contact PrognoSports support to inquire further
`;

Object.entries(json).forEach(entry => {
    const [key, value] = entry;

    let causes = "";
    value.causes.forEach(cause => {
        causes += "* " + cause + "\n";
    });
    let solutions = "";
    value.solutions.forEach(solution => {
        solutions += "* " + solution + "\n";
    });
    let content = template.replace("{code}", key)
                            .replace("{message}", value.message)
                            .replace("{description}", value.description)
                            .replace("{causes}", causes)
                            .replace("{solutions}", solutions);

    fs.writeFile("docs/api/codes/" + key + ".md", content, function (err) {
        if (err) return console.log(err);
    });
});