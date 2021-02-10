
const selectionMenu = [
    
    {
        id: 1, 
        title: "Borsjtsj",
        category: "Soup",
        img: "home_recepten/borsh.jpg",
        link: "borsh.html",
    },
    
    {
        id: 2, 
        title: "Kippensoep met boekweit",
        category: "Soup",
        img: "home_recepten/kippensoep.jpg",
        link: "kippensoep.html",
    },

    {
        id: 3, 
        title: "Okroshka",
        category: "Soup",
        img: "home_recepten/okroshka.jpg",
        link: "okroshka.html",
    },
    
    {
        id: 4, 
        title: "3 x gevuld ei",
        category: "Hapje",
        img: "home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
    },
    
    {
        id: 5, 
        title: "Oost-Europese gehaktballetjes met rijst",
        category: "Hoofdgerecht",
        img: "home_recepten/tefteli.jpg",
        link: "tefteli.html",
    },

    {
        id: 6, 
        title: "Gevulde paprika's",
        category: "Hoofdgerecht",
        img: "home_recepten/gevulde_paprika.jpg",
        link: "gevuld_paprika.html",
    },


    ];
    
    const sectionCenter = document.querySelector(".section-center");
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    
    // load items
    
    window.addEventListener("DOMContentLoaded", function () {
       displayMenuItems(selectionMenu);
    });
    
    // filter items
    
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = selectionMenu.filter(function(menuItem) {
    
    if(menuItem.category === category) {
        return menuItem;
    }
            });
            if (category === "Alles") {
                displayMenuItems(selectionMenu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
    
    
    
    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(function (item) {
    
            return `<article class="menu-item">
    
            <li class='recListItem'>
    
            <div class="item-info">
            <h2>${item.title}</h2>
        </div>
             
              <div class="recListImg"><a href=${item.link} target="_blank">
                  <img src=${item.img} loading="lazy" alt=${item.title} width="200" height="200"></a></div>
                  
                 
            </li>
          </article>`;
        });
        displayMenu = displayMenu.join("");
        sectionCenter.innerHTML = displayMenu;
    }
    
    