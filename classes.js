const image = document.getElementById("image")
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const buttonsDiv = document.getElementById("buttons")

class Scene {
    constructor(image_path, text1, text2)
    {
        this.image_path = image_path;
        this.text1 = text1;
        this.text2 = text2;
        this.children = [];
    }

    setChildren(children)
    {
        this.children = children;
    }

    renderScene()
    {
        image.src = this.image_path;
        text1.innerText = this.text1;
        text2.innerText = this.text2;
        buttonsDiv.ineerHTML = ""
        for (let i = 0; i < this.children.length; i++)
        {
            let newButton = document.createElement('button');
            newButton.innerText = "Option " + (i+1);
            newButton.addEventListener('click', () => {buttonsDiv.innerHTML = ""; this.children[i].renderScene()});            buttonsDiv.appendChild(newButton);
        }
    }
}

let introScene = new Scene("tung.jpg",
    "I would like you to meet tung tung tung sahur",
    "click to move around");
let sceneA = new Scene("ballerina.jpg",
    "This is ballerina cappuccina",
    "mimimimi");
let sceneB = new Scene("bombardino.jpg",
    "This is bombardino crocodillo",
    "BOMBARDOOOO!");

introScene.setChildren([sceneA, sceneB]);
sceneA.setChildren([introScene]);
sceneB.setChildren([sceneA, introScene]);

introScene.renderScene();