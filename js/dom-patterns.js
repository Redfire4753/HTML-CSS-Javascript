const showPattern = () => {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;
    let borderradius = 300;
    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.style.borderRadius = borderradius + 'px';
        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];
        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}