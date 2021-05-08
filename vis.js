
const selectionMenu = [
    
    {
        id: 1, 
        title: "Broodje met sprotje",
        category: "Voor-en-bij",
        img: "index_home_recepten/sprotje.jpg",
        link: "broodje_sprotje.html",
    },
    
    {
        id: 2, 
        title: "Salade met Chinese kool en surimi",
        category: "Salades",
        img: "index_home_recepten/chinese_kool_salade.jpg",
        link: "salade_met_chinese_kool.html",
    },
    
    {
        id: 3, 
        title: "Salade Bedekte haring",
        category: "Salades",
        img: "index_home_recepten/shuba.jpg",
        link: "shuba.html",
    },
    
    {
        id: 4, 
        title: "Hapje gebakken aardappels met haring",
        category: "Voor-en-bij",
        img: "index_home_recepten/hapje_aardappelen.jpg",
        link: "aardappels_met_haring.html",
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
    
    