
const selectionMenu = [
    {
        id: 1, 
        title: "Pannenkoeken met romige champignonsaus",
        category: "Groente",
        img: "home_recepten/pannenkoeken_champignons.jpg",
        link: "pannenkoeken_met_champignonsaus.html",
    },
    
    {
        id: 2, 
        title: "Groenteragout",
        category: "Groente",
        img: "home_recepten/groentetagout.jpg",
        link: "groenteragout.html",
    },
    
    {
        id: 3, 
        title: "Aardappelpannenkoekjes",
        category: "Groente",
        img: "home_recepten/deruny.jpg",
        link: "deroeny.html",
    },
    
    {
        id: 4, 
        title: "Borsjtsj",
        category: "Vlees",
        img: "home_recepten/borsh.jpg",
        link: "borsh.html",
    },

    {
        id: 5, 
        title: "Nieuwe oogst aardappels met salade met radijs",
        category: "Groente",
        img: "home_recepten/aardappelen.jpg",
        link: "aardappels_salade.html",
    },
   
    {
        id: 6, 
        title: "Boekweit met champignons uit de oven",
        category: "Groente",
        img: "home_recepten/Boekweit.jpg",
        link:  "boekweit_met_champignons.html",
    },

    {
        id: 7, 
        title: "Oost-Europese gehaktballetjes met rijst",
        category: "Vlees",
        img: "home_recepten/tefteli.jpg",
        link: "tefteli.html",
    },

    {
        id: 8, 
        title: "Gevulde paprika's",
        category: "Vlees",
        img: "home_recepten/gevulde_paprika.jpg",
        link: "gevuld_paprika.html",
    },

    {
        id: 9, 
        title: "Varenyky met aarpappelpuree en champignions",
        category: "Groente",
        img: "home_recepten/Verenyky.jpg",
        link: "varenyky.html",
    },
    
    {
        id: 10, 
        title: "Varenyky met kwark en dille",
        category: "Groente",
        img: "home_recepten/varenyky_dille.jpg",
        link: "varenyky_dille.html",
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
    
    