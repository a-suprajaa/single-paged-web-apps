const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main")
const search = document.getElementById("search")
const form = document.getElementById("form")

//username = "florinpop17";
 getusername();
 //console.log(username)
//get_user(username);

function getusername()
{  let username1;
    form.addEventListener("submit",(e) =>
    {   e.preventDefault();
        username1 =search.value ;
        console.log(username1)
        get_user(username1);
        search.value= ""
    })
   // return username1;
}


async function get_user(username)
{    console.log(username)
    const resp =await fetch(APIURL + username) 
    const respdata = await resp.json();
    console.log(respdata);
    createcard(respdata);
}

function createcard(user)
{ const cardHTML = `
<div class="card"> 
    <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
    </div>
</div>
`;

main.innerHTML = cardHTML;
}