'use strict';

fetch('./user.json')
    .then(response => response.json())
    .then(appendUserItemsToList)
    .catch(console.error);

/*const fetchPromise = fetch('./user.json');

const jsonPromise = fetchPromise.then(response => response.json()).catch(console.error);

const data = jsonPromise.then(data => {appendUserItemToList(data) }).catch(console.error);
*/



function appendUserItemsToList(users) {
    console.log(users);
    //получаем элемент списка карточек пользователя
    const usersList = document.getElementById('usersList');
    // по циклу создаем карточку и добавляем в список
    users.forEach(function (user) {
        const newUserItem = createUserItem(user);
        usersList.appendChild( newUserItem );
    })
}



// создание карточки одного пользователя
function createUserItem(user) {

    const userItemContainer = document.createElement('li');
    userItemContainer.classList.add('userItem');
    //создаем аватарку пользователя
    const userImageContainer = createUserProfilePicture(user.picturePath);


    //создаем full name
    const userFullNameElem = document.createElement('h3');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;

    //добавляем аватарку в карточку
    userItemContainer.appendChild( userImageContainer );
    //добавляем полное имя в карточку
    userItemContainer.appendChild(userFullNameElem);

    return userItemContainer;

}
//создание аватарки пользователя
function createUserProfilePicture(picturePath) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add('imageContainer');

    const userImage = document.createElement("img");
    userImage.setAttribute("src",picturePath);
    userImage.setAttribute("alt","user picture");

    imageContainer.appendChild(userImage);

    return imageContainer;
}
