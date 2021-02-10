// alle voorgerechten

const selectionMenu = [

    {
        id: 1, 
        title: "Salade met Chinese kool en surimi",
        category: "Vis",
        img: "home_recepten/chinese_kool_salade.jpg",
        link: "salade_met_chinese_kool.html",
    },
    
    {
        id: 2, 
        title: "Salade Bedekte haring",
        category: "Vis",
        img: "home_recepten/shuba.jpg",
        link: "shuba.html",
    },

    
    {
        id: 3, 
        title: "Salade Varya Hoetsoelska",
        category: "Groente",
        img: "home_recepten/varya_hoetsoelska1.jpg",
        link: "varya.html",
    },
    
    {
        id: 4, 
        title: "Salade Vinegret",
        category: "Groente",
        img: "home_recepten/vinegret.jpg",
        link: "vinegret.html",
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
    
    