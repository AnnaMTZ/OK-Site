
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
        title: "Aubergine spread",
        category: "Voor-en-bij",
        img: "home_recepten/aubergine.jpg",
        link: "aubergine_spread.html",
    },
    
    {
        id: 3, 
        title: "3 x gevuld ei",
        category: "Voor-en-bij",
        img: "home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
    },
    
    {
        id: 4, 
        title: "Broodje met sprotje",
        category: "Voor-en-bij",
        img: "home_recepten/sprotje.jpg",
        link: "broodje_sprotje.html",
    },

    {
        id: 5, 
        title: "Pyrizhky met vlees",
        category: "Varenyky",
        img: "home_recepten/pyrizhky_met_vlees.jpg",
        link:"pyrizhky_met_vlees.html",
    },

    {
        id: 6, 
        title: "Salade Vinegret",
        category: "Salades",
        img: "index_home_recepten/vinegret.jpg",
        link: "vinegret.html",
    },

    {
        id: 7, 
        title: "Aardappelpannenkoekjes",
        category: "Pannenkoeken",
        img: "index_home_recepten/deruny.jpg",
        link: "deroeny.html",
    },

    {
        id: 8, 
        title: "Gestoofde kool",
        category: "Voor-en-bij",
        img: "index_home_recepten/kool.jpg",
        link: "gestoofde_witte_kool.html",
    },

    {
        id: 9, 
        title: "Dunne pannenkoeken",
        category: "Pannenkoeken",
        img: "index_home_recepten/dunne_pannenkoeken.jpg",
        link: "dunne_pannenkoeken.html",
    },


    {
        id: 10, 
        title: "Pannenkoeken met romige champignonsaus",
        category: "Pannenkoeken",
        img: "index_home_recepten/pannenkoeken_champignons.jpg",
        link: "pannenkoeken_met_champignonsaus.html",
    },

    {
        id: 11, 
        title: "Koreaanse worteltjes",
        category: "Voor-en-bij",
        img: "index_home_recepten/koreaanse_worteltjes.jpg",
        link: "koreaanse_worteltjes.html",
    },

    {
        id: 12, 
        title: "Zelfgemaakte kwark",
        category: "Nagerechten",
        img: "index_home_recepten/zelfgemaakte_kwark.jpg",
        link: "zelfgemaakte_kwark.html",
    },

    {
        id: 13, 
        title: "Salade met Chinese kool en surimi",
        category: "Salades",
        img: "index_home_recepten/chinese_kool_salade.jpg",
        link: "salade_met_chinese_kool.html",
    },

    {
        id: 14, 
        title: "Salade Varya Hoetsoelska",
        category: "Salades",
        img: "index_home_recepten/varya_hoetsoelska1.jpg",
        link: "varya.html",
    },

    {
        id: 15, 
        title: "Salade Bedekte haring",
        category: "Salades",
        img: "index_home_recepten/shuba.jpg",
        link: "shuba.html",
    },

    {
        id: 16, 
        title: "Gefermenteerde kool",
        category: "Voor-en-bij",
        img: "index_home_recepten/gefermenteerde_kool.jpg",
        link: "gefermenteerde_kool.html",
    },

    {
        id: 17, 
        title: "Eiersalade met lente-ui",
        category: "Salades",
        img: "index_home_recepten/eiersalade_met_lente-ui.jpg",
        link: "eiersalade_met_lente-ui.html",
    },

    {
        id: 18, 
        title: "Salade met varkensvlees",
        category: "Salades",
        img: "index_home_recepten/salade_met_varkensvlees.jpg",
        link: "salade_met_varkensvlees.html",
    },

    {
        id: 19, 
        title: "3X salade met rode biet",
        category: "Salades",
        img: "index_home_recepten/3rodebiet.jpg",
        link: "driebietsalade.html",
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
    
    