// $ --> dom 객체와 일반 변수를 구분해주기 위해 쓰는 것임! 이게 있으면 element 라는 뜻임!

const $ulElement = document.querySelector('ul');

$ulElement.addEventListener("click", (event) => {
    const $target = event.target;
    // X 누르면 삭제하기
    if($target.classList.contains('close')){
        const $parentTarget = $target.parentElement;
        $parentTarget.style.display = "none";
        console.dir($parentTarget)
        const deleteItem = $parentTarget.childNodes[1].innerText;
        deleteTodoList('todoList', deleteItem);
    }
    $target.classList.toggle('checked'); //class에 'checked' 삽입 및 삭제 해줌!
})

function newElement() {
    let inputValue = document.getElementById("myInput").value;
    const $liElement = `
        <li>
            <span>${inputValue}</span>
            <span class="close">&#215;</span>
        </li>
    `

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $ulElement.insertAdjacentHTML(`beforeend`, $liElement);
        addTodoList('todoList', inputValue);
    }
    document.getElementById("myInput").value = "";
}

// 두번째 실습

//localStorage 확인 -> 데이터가 있으면 -> li 객체 만들기
function init() {
    const todoList = getTodoList('todoList')
    for (let i=0; i<todoList.length; i++) {
        $ulElement.insertAdjacentHTML('beforeend', `
            <li>
                <span>${todoList[i]}</span>
                <span class="close">&#215;</span>
            </li>
        `)
    }
}

// localStorage에 key값을 통해 value 리턴해주는 함수
function getTodoList(key) {
    // if (localStorage.getItem(key)) { // key 가 하나도 없으면 undefined 임 -> split 불가!
    //     return localStorage.getItem(key).split(',')
    // }
    return localStorage.getItem(key) ? localStorage.getItem(key).split(',') : [] ;
}

//key를 통해 localStorage에 어떤 key 가 있는지 확인하고 새로운 값 추가
//return 값은 추가된 새로운 배열
function addTodoList(key, value) {
    const todoList = getTodoList(key);
    // todoList.push(value);
    // localStorage.setItem(key, todoList)
    return localStorage.setItem(key, [...todoList,value]) //todolist의 배열을 열고 value를 추가하는 spread list임!
}

//key -> localStorage 정보를 가져옴 ->
//array 내에서 value에 해당 되는 값을 지운 새로운 배열을 return
// [1,2,3,5,6]
// value = 3
// return = [1,2,5,6]
function deleteTodoList(key,value) {
    const todoList = getTodoList(key)
    return localStorage.setItem(key,todoList.filter(todo => todo !== value))
    // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환해준다!
    // 위에서는 value가 아닌 todoList 요소들을 모아서 새로운 todoList 배열을 형성해준다!
}

init()

function darkmode() {
    const header = document.getElementsByClassName('header')[0]
    header.classList.toggle('dark-mode-header')

    const tooltipText = document.getElementsByClassName('tooltipText')[0]
    tooltipText.classList.toggle('dark-mode-tooltipText')

    const darkBtn = document.getElementsByClassName('darkBtn')[0]
    darkBtn.classList.toggle('dark-mode-darkBtn')
    if (darkBtn.innerText == 'It\'s blinding!') {
        darkBtn.innerText = 'It\'s dark!'
    } else {
        darkBtn.innerText = 'It\'s blinding!'
    }

    const popupText = document.getElementsByClassName('popuptext')[0]
    popupText.classList.toggle('dark-mode-popuptext')

    // popupText.classList.toggle('dark-mode-popuptext')
    // if (popupText.innerText == '눈이 부시나요? 그럼 왼쪽 버튼을 클릭해보세요.') {
    //     popupText.innerText = '너무 어둡나요? 그럼 왼쪽 버튼을 클릭해보세요.'
    // } else {
    //     popupText.innerText == '눈이 부시나요? 그럼 왼쪽 버튼을 클릭해보세요.'
    // }
}


function popups() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}






// function newElement() {
//     const $liElement = document.createElement("li");

//     const $textElement = document.createElement("span");
//     const inputValue = document.getElementById("myInput").value;
//     $textElement.innerText = inputValue;

//     const $closeElement = document.createElement("span");
//     const $closeText = document.createTextNode("\u00D7"); // html 내부적으로 x를 의미하여 텍스트를 넣어주는 방식!
//     $closeElement.className = "close";
//     $closeElement.appendChild($closeText);

//     $liElement.appendChild($textElement);
//     $liElement.appendChild($closeElement);

//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         $ulElement.appendChild($liElement);
//     }
//     document.getElementById("myInput").value = "";
// }