//100ms(0.1s) 마다 body의 색이 무작위로 변하게

const getRandomHexaColor = () => {
    const hexa = '0123456789abcdef';
    let color = "#";
    
    for (var i=0; i<6; i++) {
        let random = Math.floor( Math.random() * 16 )
        const result = hexa[random];
        color += result;
    }
    // console.log(color);

    return color;
};

// const getRandomHexaColor = () => {
//     const hexa = '0123456789abcdef';
    
//     let randomHexa = Math.floor(Math.random() * 0xffffff).toString(16);
//     let color = "#" + randomHexa;
//     return color;
// };

// setInterval 은 100ms 당 해당 함수를 실행하는 함수
setInterval(() => {
    document.querySelector('body').style.backgroundColor = 
        getRandomHexaColor();
}, 100);

