
const selectionMenu = [
    
   
    

    {
        id: 1, 
        title: "Salade Varya Hoetsoelska",
        category: "Salades",
        img: "index_home_recepten/varya_hoetsoelska1.jpg",
        link: "varya.html",
    },
    

    {
        id: 2, 
        title: "Kwarkpannenkoekjes",
        category: "Pannenkoeken",
        img: "index_home_recepten/kwarkpannenkoekjes.jpg",
        link: "kwarkpannenkoekjes.html",
    },

    {
        id: 3, 
        title: "Kerst honing peperkoekjes",
        category: "Nagerechten",
        img: "index_home_recepten/kerst_honing_peperkoekjes.jpg",
        link: "kerst_honing_peperkoekjes.html",
    },

    {
        id: 4, 
        title: "Koetja",
        category: "Nagerechten",
        img: "index_home_recepten/koetja1.jpg",
        link: "koetja.html",
    },


    {
        id: 5, 
        title: "Uzvar",
        category: "Nagerechten",
        img: "index_home_recepten/uzvar.jpg",
        link: "uzvar.html",
    },

    {
        id: 6, 
        title: "Zelfgemaakte kwark",
        category: "Nagerechten",
        img: "index_home_recepten/zelfgemaakte_kwark.jpg",
        link: "zelfgemaakte_kwark.html",
    },
    
    {
        id: 7, 
        title: "Dunne pannenkoeken",
        category: "Pannenkoeken",
        img: "index_home_recepten/dunne_pannenkoeken.jpg",
        link: "dunne_pannenkoeken.html",
    },

    {
        id: 8, 
        title: "Klassieke Oost-Europese Appeltaart",
        category: "Nagerechten",
        img: "index_home_recepten/appeltaart.jpg",
        link: "oost-europese_appeltaart.html",
    },

    {
        id: 9, 
        title: "Geraspt gebak",
        category: "Nagerechten",
        img: "index_home_recepten/geraspt_gebak.jpg",
        link: "geraspt_gebak.html",
    },

    {
        id: 10, 
        title: "Lymonnyj mannyk",
        category: "Nagerechten",
        img: "index_home_recepten/lemon_cake2.jpg",
        link: "lymonnyj_mannyk.html",
    },


    {
        id: 11, 
        title: "Pannenkoeken met romige champignonsaus",
        category: "Pannenkoeken",
        img: "index_home_recepten/pannenkoeken_champignons.jpg",
        link: "pannenkoeken_met_champignonsaus.html",
    },


    {
        id: 12, 
        title: "Varenyky met aarpappelpuree en champignions",
        category: "Varenyky",
        img: "index_home_recepten/Verenyky.jpg",
        link: "varenyky.html",
    },
    
    {
        id: 13, 
        title: "Varenyky met kwark en dille",
        category: "Varenyky",
        img: "index_home_recepten/varenyky_dille.jpg",
        link: "varenyky_dille.html",
    },

    {
        id: 14, 
        title: "Syrnyky",
        category: "Nagerechten",
        img: "index_home_recepten/syrnyky.jpg",
        link: "syrnyky.html",
    },

    {
        id: 15, 
        title: "Klassieke havermoutkoekjes",
        category: "Nagerechten",
        img: "index_home_recepten/havermout.jpg",
        link: "havermout.html",
    },



    {
        id: 16, 
        title: "3X salade met rode biet",
        category: "Salades",
        img: "index_home_recepten/3rodebiet.jpg",
        link: "driebietsalade.html",
    },

    {
        id: 17, 
        title: "Pannenkoeken met kefir",
        category: "Pannenkoeken",
        img: "index_home_recepten/pannenkoeken_met_kefir.jpg",
        link: "pannenkoeken_met_kefir.html",
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
    
    