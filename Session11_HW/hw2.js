const clockContent = document.querySelector('.now');
console.log(clockContent);
let text;

//방법_1
const getCurrentTime = () => {
    //현재 시간을 반환하는 객체 Date
    const date = new Date();
    console.log(date); //F12 console창에서 찍어보면 알 수 있다.
    
    const year = date.getFullYear();
    console.log(year);
    const month = date.getMonth()+1;
    console.log(month);
    const day = date.getDate();
    console.log(day);
    const hour = date.getHours();
    console.log(hour);
    const minute = date.getMinutes();
    console.log(minute);
    const seconds = date.getSeconds();
    console.log(seconds);

    text = `${year}년 ${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일 ${hour < 10 ? `0${hour}` : hour}시 ${minute < 10 ? `0${minute}` : minute}분 ${seconds < 10 ? `0${seconds}` : seconds}초`;
    // text = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${seconds}초`;

    clockContent.innerText = "현재 시간: " + text;
    console.log(clockContent.innerText);
    // 시간을 계산해서 clockContent에 표시해줍시다.
};

//방법_2
// const getCurrentTime = () => {
//     //현재 시간을 반환하는 객체 Date
//     // const date = new Date();
//     let date= new Date().toISOString();
//     // alert(date);
//     console.log(date); //F12 console창에서 찍어보면 알 수 있다.
    
//     const year = date.slice(0, 4);
//     console.log(year);
//     const month = date.slice(5, 7);
//     console.log(month);
//     const day = date.slice(8, 10);
//     console.log(day);
//     const hour = date.slice(11, 13);
//     console.log(hour);
//     const minute = date.slice(14, 16);
//     console.log(minute);
//     const seconds = date.slice(17, 19);
//     console.log(seconds);

//     // text = `${year}년 ${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일 ${hour < 10 ? `0${hour}` : hour}시 ${minute < 10 ? `0${minute}` : minute}분 ${seconds < 10 ? `0${seconds}` : seconds}초`;
//     text = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${seconds}초`;

//     clockContent.innerText = text;
//     console.log(clockContent.innerText);
//     // 시간을 계산해서 clockContent에 표시해줍시다.
// };

// const initClock = () => {
//     getCurrentTime();
//     setInterval(getCurrentTime, 1000);
// };

const getRandomHexaColor = () => {
    const hexa = '0123456789abcdef';
    
    let randomHexa = Math.floor(Math.random() * 0xffffff).toString(16);
    let color = "#" + randomHexa;
    return color;
};

const initClock = () => {
    setInterval(() => {
        getCurrentTime();
        clockContent.style.color = getRandomHexaColor();
    }, 1000);
};

initClock();

// const idInput = document.querySelector('#id');

// const checkInputValid = () => {
//     if (idInput.value.length > 10) {
//         alert('아이디는 10자리 이하로 해주세요!');
//     }
// };

// checkInputValid();
