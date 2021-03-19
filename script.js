//  1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
const ARRAY = [1, 5, 7, 8, 9, 0, -5, -55, 105, 0, 5, 299, 6 ,7];
    let max = ARRAY[0];
    for(let i = 0; i < ARRAY.length; i++){
        if(ARRAY[i] > max){
            max = ARRAY[i];
        }
    }
    console.log(`Максимальне значення: ${max}.`);

//  2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. 
//  Створити новий масив де будуть тільки Стрінгові значення.
const ALLTYPES = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];

let onlyString = ALLTYPES.filter(el => typeof el === 'string');
console.log(onlyString);

//  3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] 
//  – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. 
//  Додати можливість додати нове поле для всіх юзерів – job (true/false);
const COLLECTION = [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, 
{name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, 
{name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}];

let usersOutput = (arr) => {
  for(let item in arr) {
      if(arr[item].type === "user") {
          console.log(`${arr[item].name}, role: ${arr[item].type}`);
      }
  }
};
usersOutput(COLLECTION);

let hobbies = (arr) => {
  let hobbiesArr = [];
  for (let i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].hobby.length; j++) {
        if(arr[i].hobby === 'hiking'){
          hobbiesArr.push(arr[i].name);
        }
      }
  }
  console.log(`${hobbiesArr}`);
};
hobbies(COLLECTION);                  
          
  /* ERROR Продолжение следуєт =) */

//  4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) 
//  і сповіщати що це інтелектуальна власність власника.
const NOCOPY = document.querySelector('div.notToCopy');

NOCOPY.addEventListener('copy', (event) => {
    alert('Це інтелектуальна власність власника');
    event.preventDefault();
});

//  5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, 
//назву країни зробити великими буквами. 
function getData() {

  let api = `https://restcountries.eu/rest/v2/all`;

  axios.get(api).then(response => {
      generateData(response.data);
  }).catch(e => {
      generateDataFail();
  })
}

/* TIME FASTED */