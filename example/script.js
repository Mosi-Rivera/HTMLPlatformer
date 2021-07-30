const body = document.getElementsByTagName('body')[0];
const START = () => {
    for (let i = 5; i--;)
    {
        let box = document.createElement('div');
        box.className = 'obstacle box';
        box.style.left = Math.random(0) * window.innerWidth + 'px';
        box.style.top = 440 + 'px';
        box.innerHTML = 'Div';
        box.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        body.appendChild(box);
    }
    const options = {
        collidableClass: 'obstacle'
    };
    LoadHTMLPlatformer(options);
}