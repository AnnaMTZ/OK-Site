
const selectionMenu = [

    
    {
        id: 1, 
        title: "Kwarkpannenkoekjes",
        category: "Pannenkoeken",
        img: "index_home_recepten/kwarkpannenkoekjes.jpg",
        link: "kwarkpannenkoekjes.html",
    },
    
    {
        id: 2, 
        title: "Zelfgemaakte kwark",
        category: "Nagerechten",
        img: "index_home_recepten/zelfgemaakte_kwark.jpg",
        link: "zelfgemaakte_kwark.html",
    },
    
    
    {
        id: 3, 
        title: "Lymonnyj mannyk",
        category: "Nagerechten",
        img: "index_home_recepten/lemon_cake2.jpg",
        link: "lymonnyj_mannyk.html",
    },

    {
        id: 4, 
        title: "Syrnyky",
        category: "Nagerechten",
        img: "index_home_recepten/syrnyky.jpg",
        link: "syrnyky.html",
    },


    {
        id: 5, 
        title: "Pannenkoeken met kefir",
        category: "Pannenkoeken",
        img: "index_home_recepten/pannenkoeken_met_kefir.jpg",
        link: "pannenkoeken_met_kefir.html",
    },

    {
        id: 6, 
        title: "3 x gevuld ei",
        category: "Voor-en-bij",
        img: "index_home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
    },

    // {
    //     id: 7, 
    //     title: "Syrnyky uit Lviv",
    //     category: "Nagerechten",
    //     img: "index_home_recepten/.....",
    //     link: "syrnyky.html",
    // }
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
    
    