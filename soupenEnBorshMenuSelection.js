
const selectionMenu = [
    
    {
        id: 4, 
        title: "Borsjtsj",
        category: "Vlees",
        img: "home_recepten/borsh.jpg",
        link: "borsh.html",
    },
    
    {
        id: 14, 
        title: "Okroshka",
        category: "Groente",
        img: "home_recepten/okroshka.jpg",
        link: "okroshka.html",
    },
    
    {
        id: 16, 
        title: "Holodnyk",
        category: "Groente",
        img: "home_recepten/holodnyk.jpg",
        link: "holodnyk.html",
    },

    {
        id: 9, 
        title: "Kippensoep met boekweit",
        category: "Kip",
        img: "home_recepten/kippensoep.jpg",
        link: "kippensoep.html",
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
    
    