const xhr = new XMLHttpRequest();

const body = document.getElementById('body');
const title = document.getElementById('title');

function submitForm() {

  let json = JSON.stringify({
    title: title.value,
    body: body.value
    });
  xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts/')
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
	
  xhr.send(json);
}
