const image = document.getElementById("image")
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const buttonsDiv = document.getElementById("buttons")
let music = new Audio();

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
            newButton.addEventListener('click', () => this.exitScene());
            buttonsDiv.appendChild(newButton);
        }
    }

    exitScene()
    {

    }
}

class MusicScene extends Scene {
    constructor(image_path, text1, text2, audio_path)
    {
        super(image_path, text1, text2);
        this.audio_path = audio_path;
    }

    renderScene() {
        super.renderScene();
        music.src = this.audio_path;
        music.play();
    }
    exitScene()
    {
        super.exitScene();
        music   
    }
}

let introScene = new Scene("tung.jpg",
    "I would like you to meet tung tung tung sahur",
    "click to move around");
let sceneA = new Scene("ballerina.jpg",
    "This is ballerina cappuccina",
    "mimimimi");
let sceneB = new MusicScene("bombardino.jpg",
    "This is bombardino crocodillo",
    "BOMBARDOOOO!",
    "Investigations.mp3");

introScene.setChildren([sceneA, sceneB]);
sceneA.setChildren([introScene]);
sceneB.setChildren([sceneA, introScene]);

introScene.renderScene();