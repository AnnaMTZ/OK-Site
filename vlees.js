
const selectionMenu = [
    
    {
        id: 1, 
        title: "Borsjtsj",
        category: "Soepen",
        img: "index_home_recepten/borsh.jpg",
        link: "borsh.html",
    },
    
    {
        id: 2, 
        title: "Kippensoep met boekweit",
        category: "Soepen",
        img: "index_home_recepten/kippensoep.jpg",
        link: "kippensoep.html",
    },

    {
        id: 3, 
        title: "Okroshka",
        category: "Soepen",
        img: "index_home_recepten/okroshka.jpg",
        link: "okroshka.html",
    },
    
    {
        id: 4, 
        title: "3 x gevuld ei",
        category: "Voor-en-bij",
        img: "index_home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
    },
    
    {
        id: 5, 
        title: "Oost-Europese gehaktballetjes met rijst",
        category: "Hoofdgerechten",
        img: "index_home_recepten/tefteli.jpg",
        link: "tefteli.html",
    },

    {
        id: 6, 
        title: "Gevulde paprika's",
        category: "Hoofdgerechten",
        img: "index_home_recepten/gevulde_paprika.jpg",
        link: "gevuld_paprika.html",
    },

    {
        id: 7, 
        title: "Koolsoep met verse kool",
        category: "Soepen",
        img: "index_home_recepten/koolsoup.jpg",
        link: "koolsoup.html",
    },

    {
        id: 8, 
        title: "Pyrizhky met vlees",
        category: "Varenyky",
        img: "index_home_recepten/pyrizhky_met_vlees.jpg",
        link:"pyrizhky_met_vlees.html",
    },

    {
        id: 9, 
        title: "Julienne met kip en champignons",
        category: "Hoofdgerechten",
        img: "index_home_recepten/julienne.jpg",
        link: "julienne.html",
    },


    {
        id: 10, 
        title: "Salade met varkensvlees",
        category: "Salades",
        img: "index_home_recepten/salade_met_varkensvlees.jpg",
        link: "salade_met_varkensvlees.html",
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
    
    