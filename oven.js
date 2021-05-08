
const selectionMenu = [

    {
        id: 1, 
        title: "Hapje gebakken aardappels met haring",
        category: "Voor-en-bij",
        img: "home_recepten/hapje_aardappelen.jpg",
        link: "aardappels_met_haring.html",
    },
    
    {
        id: 2, 
        title: "Kerst honing peperkoekjes",
        category: "Nagerechten",
        img: "home_recepten/kerst_honing_peperkoekjes.jpg",
        link: "kerst_honing_peperkoekjes.html",
    },

    {
        id: 3, 
        title: "Boekweit met champignons uit de oven",
        category: "Hoofdgerechten",
        img: "home_recepten/Boekweit.jpg",
        link:  "boekweit_met_champignons.html",
    },

    {
        id: 4, 
        title: "Klassieke Oost-Europese Appeltaart",
        category: "Nagerechten",
        img: "home_recepten/appeltaart.jpg",
        link: "oost-europese_appeltaart.html",
    },

    {
        id: 5, 
        title: "Geraspt gebak",
        category: "Nagerechten",
        img: "home_recepten/geraspt_gebak.jpg",
        link: "geraspt_gebak.html",
    },

    {
        id: 6, 
        title: "Lymonnyj mannyk",
        category: "Nagerechten",
        img: "home_recepten/lemon_cake2.jpg",
        link: "lymonnyj_mannyk.html",
    },

    {
        id: 7, 
        title: "Klassieke havermoutkoekjes",
        category: "Nagerechten",
        img: "home_recepten/havermout.jpg",
        link: "havermout.html",
    },

    {
        id: 8, 
        title: "Pyrizhky met vlees",
        category: "Varenyky",
        img: "home_recepten/pyrizhky_met_vlees.jpg",
        link:"pyrizhky_met_vlees.html",
    },

    {
        id: 9, 
        title: "Julienne met kip en champignons",
        category: "Hoofdgerechten",
        img: "index_home_recepten/julienne.jpg",
        link: "julienne.html",
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
    
    