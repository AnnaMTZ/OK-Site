
const selectionMenu = [ 
    {
        id: 1, 
        title: "Kerst honing peperkoekjes",
        category: "Feestelijk",
        img: "home_recepten/kerst_honing_peperkoekjes.jpg",
        link: "kerst_honing_peperkoekjes.html",
    },

    {
        id: 2, 
        title: "Hapje gebakken aardappels met haring",
        category: "Vis",
        img: "home_recepten/hapje_aardappelen.jpg",
        link: "aardappels_met_haring.html",
    },
    
    
    {
        id: 3, 
        title: "Aubergine spread",
        category: "Groente",
        img: "home_recepten/aubergine.jpg",
        link: "aubergine_spread.html",
    },
    
    
    {
        id: 4, 
        title: "3 x gevuld ei",
        category: "Vlees",
        img: "home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
    },
    
    {
        id: 5, 
        title: "Broodje met sprotje",
        category: "Vis",
        img: "home_recepten/sprotje.jpg",
        link: "broodje_sprotje.html",
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
    
    