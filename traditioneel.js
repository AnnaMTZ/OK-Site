
const selectionMenu = [
    
    {
        id: 1, 
        title: "Groenteragout",
        category: "Hoofdgerechten",
        img: "index_home_recepten/groentetagout.jpg",
        link: "groenteragout.html",
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
    title: "Salade Varya Hoetsoelska",    
        category: "Salades",
        img: "index_home_recepten/varya_hoetsoelska1.jpg",
        link: "varya.html"
},
       
    {
        id: 4, 
        title: "Gefermenteerde kool",
        category: "Voor-en-bij",
        img: "index_home_recepten/gefermenteerde_kool.jpg",
        link: "gefermenteerde_kool.html",
    },

    {
        id: 5, 
        title: "Boekweit met champignons uit de oven",
        category: "Hoofdgerechten",
        img: "index_home_recepten/Boekweit.jpg",
        link:  "boekweit_met_champignons.html",
    },


    {
        id: 6, 
        title: "Koolsoep met verse kool",
        category: "Soepen",
        img: "index_home_recepten/koolsoup.jpg",
        link: "koolsoup.html",
    },

    {
        id: 7, 
        title: "3X salade met rode biet",
        category: "Salades",
        img: "index_home_recepten/3rodebiet.jpg",
        link: "driebietsalade.html",
    },

    {
        id: 8, 
        title: "Borsjtsj",
        category: "Soepen",
        img: "home_recepten/borsh.jpg",
        link: "borsh.html",
    },


    {
        id: 9, 
        title: "Pannenkoeken met romige champignonsaus",
        category: "Pannenkoeken",
        img: "home_recepten/pannenkoeken_champignons.jpg",
        link: "pannenkoeken_met_champignonsaus.html",
    },

    {
        id: 10, 
        title: "3 x gevuld ei",
        category: "Voor-en-bij",
        img: "home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
    },

    {
        id: 11, 
        title: "Varenyky met aarpappelpuree en champignions",
        category: "Varenyky",
        img: "home_recepten/Verenyky.jpg",
        link: "varenyky.html",
    },

    {
        id: 12, 
        title: "Eiersalade met lente-ui",
        category: "Salades",
        img: "index_home_recepten/eiersalade_met_lente-ui.jpg",
        link: "eiersalade_met_lente-ui.html",
    },

    {
        id: 13, 
        title: "Uzvar",
        category: "Nagerechten",
        img: "index_home_recepten/uzvar.jpg",
        link: "uzvar.html",
    },
    
    {
        id: 14, 
        title: "Dunne pannenkoeken",
        category: "Nagerechten",
        img: "home_recepten/dunne_pannenkoeken.jpg",
        link: "dunne_pannenkoeken.html",
    },

    {
        id: 15, 
        title: "Zelfgemaakte kwark",
        category: "Nagerechten",
        img: "home_recepten/zelfgemaakte_kwark.jpg",
        link: "zelfgemaakte_kwark.html",
    },

    {
        id: 16, 
        title: "Kerst honing peperkoekjes",
        category: "Nagerechten",
        img: "index_home_recepten/kerst_honing_peperkoekjes.jpg",
        link: "kerst_honing_peperkoekjes.html",
    },

    {
        id: 17, 
        title: "Hapje aardappelen met haring",
        category: "Voor-en-bij",
        img: "index_home_recepten/hapje_aardappelen.jpg",
        link: "aardappels_met_haring.html",
    },

    {
        id: 18, 
        title: "Koetja",
        category: "Nagerechten",
        img: "index_home_recepten/koetja1.jpg",
        link: "koetja.html",
    },

    {
        id: 19, 
        title: "Lymonnyj mannyk",
        category: "Nagerechten",
        img: "index_home_recepten/lemon_cake2.jpg",
        link: "lymonnyj_mannyk.html",
    },

    {
        id: 20, 
        title: "Varenyky met kwark en dille",
        category: "Varenyky",
        img: "index_home_recepten/varenyky_dille.jpg",
        link: "varenyky_dille.html",
    },

    {
        id: 21, 
        title: "Pannenkoeken met kefir",
        category: "Pannenkoeken",
        img: "index_home_recepten/pannenkoeken_met_kefir.jpg",
        link: "pannenkoeken_met_kefir.html",
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
    
    