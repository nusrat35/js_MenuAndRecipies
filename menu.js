const btnSubmit = document.querySelector('#btnRecipe');

const addMenu = (menu) =>{
    const containerDiv = document.querySelector('.container');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');

    let htmlData = 
    `<p>Menu Id : ${menu.id}</p>
    <img src="${menu.image}" alt="menuItem">
    <h2>${menu.title}</h2>`

    menuDiv.insertAdjacentHTML('afterbegin',htmlData );
    containerDiv.append(menuDiv);
}

const getMenu = async () => {
    const search = document.querySelector('#search');

    try {
        console.log(search.value);
        const apiKey = 'fd4411eddc234b1295eed0e8b54ecc65';
        // let url = `https://api.spoonacular.com/food/menuItems/search?query=${search}&maxFat=25&number=1&apiKey=${apiKey}`
        let url = `https://api.spoonacular.com/food/menuItems/search?query=${search.value}&number=1&apiKey=${apiKey}`;

        const res = await fetch(url);
        const data = await res.json();

        const menuItems = data.menuItems;
        console.log(data);
        console.log(menuItems);
        menuItems.forEach(menu => {
            addMenu(menu);
        });
    } catch (err) {
        console.error(err);
    }


};

btnSubmit.addEventListener('click', () => getMenu());