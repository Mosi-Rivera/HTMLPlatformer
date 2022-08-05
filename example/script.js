const body = document.getElementsByTagName('body')[0];
const obstacles = [
    {
        type: 'input',
        left: '20vw',
        top: '85vh',
        class: 'obstacle'
    },
    {
        type: 'input',
        left: '30vw',
        top: '81vh',
        class: 'obstacle'
    },
    {
        type: 'div',
        left: '43vw',
        top: '77vh',
        class: 'obstacle box'
    },
    {
        type: 'div',
        left: '50vw',
        top: '80vh',
        class: 'obstacle box'
    },
    {
        type: 'div',
        left: '55vw',
        top: '85vh',
        class: 'obstacle box'
    }
];
const START = () => {
    for (let obs of obstacles)
    {
        let obstacle_element = document.createElement(obs.type);
        obstacle_element.className = obs.class;
        obstacle_element.style.left =obs.left;
        obstacle_element.style.top = obs.top;
        obstacle_element.innerHTML = obs.type;
        obstacle_element.placeholder = obs.type;
        obstacle_element.style.backgroundColor = obs.color || '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.appendChild(obstacle_element);
    }
    const options = {
        collidableClass: 'obstacle'
    };
    LoadHTMLPlatformer(options);
}