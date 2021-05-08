
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
        title: "Kippensoep met boekweit",
        category: "Soepen",
        img: "index_home_recepten/kippensoep.jpg",
        link: "kippensoep.html",
    },
    
    {
        id: 5, 
        title: "Salade Varya Hoetsoelska",
        category: "Salades",
        img: "index_home_recepten/varya_hoetsoelska1.jpg",
        link: "varya.html",
    },
    
    {
        id: 6, 
        title: "Aubergine spread",
        category: "Vooren-bij",
        img: "index_home_recepten/aubergine.jpg",
        link: "aubergine_spread.html",
    },
    
    {
        id: 7, 
        title: "Salade Vinegret",
        category: "Salades",
        img: "index_home_recepten/vinegret.jpg",
        link: "vinegret.html",
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
        title: "Okroshka",
        category: "Soepen",
        img: "index_home_recepten/okroshka.jpg",
        link: "okroshka.html",
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
        title: "Koreaanse worteltjes",
        category: "Voor-en-bij",
        img: "index_home_recepten/koreaanse_worteltjes.jpg",
        link: "koreaanse_worteltjes.html",
    },
    
    
    {
        id: 12, 
        title: "Gefermenteerde kool",
        category: "Voor-en-bij",
        img: "index_home_recepten/gefermenteerde_kool.jpg",
        link: "gefermenteerde_kool.html",
    },

    {
        id: 13, 
        title: "Nieuwe oogst aardappels met salade met radijs",
        category: "Hoofdgerechten",
        img: "index_home_recepten/aardappelen.jpg",
        link: "aardappels_salade.html",
    },
   
    {
        id: 14, 
        title: "Boekweit met champignons uit de oven",
        category: "Hoofdgerechten",
        img: "index_home_recepten/Boekweit.jpg",
        link:  "boekweit_met_champignons.html",
    },

    {
        id: 15, 
        title: "Gevulde paprika's",
        category: "Hoofdgerechten",
        img: "index_home_recepten/gevulde_paprika.jpg",
        link: "gevuld",
        
    },

    {
        id: 16, 
        title: "Koolsoep met verse kool",
        category: "Soepen",
        img: "index_home_recepten/koolsoup.jpg",
        link: "koolsoup.html",
    },

    {
        id: 17, 
        title: "3X salade met rode biet",
        category: "Salades",
        img: "index_home_recepten/3rodebiet.jpg",
        link: "driebietsalade.html",
    },

    {
        id: 18, 
        title: "Borsjtsj",
        category: "Soepen",
        img: "index_home_recepten/borsh.jpg",
        link: "borsh.html",
    },

    {
        id: 19, 
        title: "Aardappelpannenkoekjes",
        category: "Pannenkoeken",
        img: "index_home_recepten/deruny.jpg",
        link: "deroeny.html",
    },

    {
        id: 20, 
        title: "Pannenkoeken met romige champignonsaus",
        category: "Pannenkoeken",
        img: "index_home_recepten/pannenkoeken_champignons.jpg",
        link: "pannenkoeken_met_champignonsaus.html",
    },

    {
        id: 21, 
        title: "3 x gevuld ei",
        category: "Voor-en-bij",
        img: "index_home_recepten/gevuld-ei.jpg",
        link: "gevuld_ei.html",
    },

    {
        id: 22, 
        title: "Varenyky met aarpappelpuree en champignions",
        category: "Varenyky",
        img: "index_home_recepten/Verenyky.jpg",
        link: "varenyky.html",
    },

    {
        id: 23, 
        title: "Eiersalade met lente-ui",
        category: "Salades",
        img: "index_home_recepten/eiersalade_met_lente-ui.jpg",
        link: "eiersalade_met_lente-ui.html",
    },

    {
        id: 24, 
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
    
    