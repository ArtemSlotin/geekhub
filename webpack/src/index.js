const getUserModule = () => import("./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getUserModule().then(({ getUsers }) => {
        getUsers().then(json => console.log(json));
    });
});
import { createElement } from 'react'

console.dir(createElement('div'))
console.dir(document.createElement('div'))