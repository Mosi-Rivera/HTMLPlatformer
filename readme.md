# HTMLPlatformer

Check out a <a href="https://mosi-rivera.github.io/HTMLPlatformer/" target="_blank">live example</a>!

# Usage

Include index.js.
```html
<body>
    <script src="./[HTMLPlatformer].js"></script>
</body>
```

Load HTMLPlatformer passing in options.
```javascript
const options = {
    collidableClass: '[COLLIDABLECLASS]', //required
};
document.getElementsByTagName('body')[0].onload = () => {
    LoadHTMLPlatformer(options);
}
```
