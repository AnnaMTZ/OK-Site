
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
        title: "Borsjtsj",
        category: "Soepen",
        img: "index_home_recepten/borsh.jpg",
        link: "borsh.html",
    },

    {
        id: 3, 
        title: "Aubergine spread",
        category: "Voor-en-bij",
        img: "index_home_recepten/aubergine.jpg",
        link: "aubergine_spread.html",
    },

    {
        id: 4, 
        title: "Salade Vinegret",
        category: "Salades",
        img: "index_home_recepten/vinegret.jpg",
        link: "vinegret.html",
    },


    {
        id: 5, 
        title: "Gestoofde kool",
        category: "Voor-en-bij",
        img: "index_home_recepten/kool.jpg",
        link: "gestoofde_witte_kool.html",
    },

    {
        id: 6, 
        title: "Okroshka",
        category: "Soepen",
        img: "index_home_recepten/okroshka.jpg",
        link: "okroshka.html",
    },


    {
        id: 7, 
        title: "Uzvar",
        category: "Nagerechten",
        img: "index_home_recepten/uzvar.jpg",
        link: "uzvar.html",
    },

    {
        id: 8, 
        title: "Nieuwe oogst aardappels met salade met radijs",
        category: "Salades",
        img: "index_home_recepten/aardappelen.jpg",
        link: "aardappels_salade.html",
    },


    {
        id: 9, 
        title: "Oost-Europese gehaktballetjes met rijst",
        category: "Hoofdgerechten",
        img: "index_home_recepten/tefteli.jpg",
        link: "tefteli.html",
    },


    {
        id: 10, 
        title: "Holodnyk",
        category: "Soepen",
        img: "index_home_recepten/holodnyk.jpg",
        link: "holodnyk.html",
    },

    {
        id: 11, 
        title: "Groenteragout",
        category: "Voor-en-bij",
        img: "index_home_recepten/groentetagout.jpg",
        link: "groenteragout.html",
    },


    {
        id: 12, 
        title: "Koreaanse worteltjes",
        category: "Voor-en-bij",
        img: "index_home_recepten/koreaanse_worteltjes.jpg",
        link: "koreaanse_worteltjes.html",
    },

    {
        id: 13, 
        title: "Zelfgemaakte kwark",
        category: "Nagerechten",
        img: "index_home_recepten/zelfgemaakte_kwark.jpg",
        link: "zelfgemaakte_kwark.html",
    },

    {
        id: 14, 
        title: "Boekweit met champignons uit de oven",
        category: "Hoofdgerechten",
        img: "index_home_recepten/Boekweit.jpg",
        link: "boekweit_met_champignons .html",
    },


    {
        id: 15, 
        title: "Kippensoep met boekweit",
        category: "Soepen",
        img: "index_home_recepten/kippensoep.jpg",
        link: "kippensoep.html",
    },


    {
        id: 16, 
        title: "Gevulde paprika’s",
        category: "Hoofdgerechten",
        img: "index_home_recepten/gevulde_paprika.jpg",
        link: "gevuld_paprika.html",
    },

    {
        id: 17, 
        title: "Salade Varya Hoetsoelska",
        category: "Salades",
        img: "index_home_recepten/varya_hoetsoelska1.jpg",
        link: "varya.html",
    },

    {
        id: 18, 
        title: "Salade Bedekte haring",
        category: "Salades",
        img: "index_home_recepten/shuba.jpg",
        link: "shuba.html",
    },
    
    {
        id: 19, 
        title: "Hapje gebakken aardappels met haring",
        category: "Voor-en-bij",
        img: "index_home_recepten/hapje_aardappelen.jpg",
        link: "aardappels_met_haring.html",
    },
    
    {
        id: 20, 
        title: "Gefermenteerde kool",
        category: "Voor-en-bij",
        img: "index_home_recepten/gefermenteerde_kool.jpg",
        link: "gefermenteerde_kool.html",
    },


    {
        id: 21, 
        title: "Julienne met kip en champignons",
        category: "Hoofdgerechten",
        img: "index_home_recepten/julienne.jpg",
        link: "julienne.html",
    },

    {
        id: 22, 
        title: "Koolsoep met verse kool",
        category: "Soepen",
        img: "index_home_recepten/koolsoup.jpg",
        link: "koolsoup.html",
    },

    {
        id: 23, 
        title: "3X salade met rode biet",
        category: "Salades",
        img: "index_home_recepten/3rodebiet.jpg",
        link: "driebietsalade.html",
    },

    {
        id: 24, 
        title: "Eiersalade met lente-ui",
        category: "Groente",
        img: "index_home_recepten/eiersalade_met_lente-ui.jpg",
        link: "eiersalade_met_lente-ui.html",
    },

    {
        id: 25, 
        title: "Salade met varkensvlees",
        category: "Salades",
        img: "index_home_recepten/salade_met_varkensvlees.jpg",
        link: "salade_met_varkensvlees.html",
    },

    {
        id: 26, 
        title: "3 x gevuld ei",
        category: "Voor-en-bij",
        img: "index_home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
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
    
    