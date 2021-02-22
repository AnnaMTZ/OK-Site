<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title class="words">Oekrainse recepten - contact</title>
  <meta http-equiv="X-UA-Compatible content=" IE="edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title class="words">CONTACT</title>
  <meta name="keyword" content="oekrainse, keuken, koken, lekker, recepten, eten" />
  <meta name="description" content="Oekrainse keuken" />
  <meta name="author" content="Irina Solodovnikova" />
  <link rel="stylesheet" href="ok_styles/contact.css" />
  <link rel="stylesheet" href="ok_styles/reset.css" />
  <link rel="icon" href="OK_favicon.jpg" type="image/x-icon" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap" rel="stylesheet"> 
</head>

<body>
  
  <section class="mobNavBar">
    <ul class="hamburger">
      <li class="line"></li>
      <li class="line"></li>
      <li class="line"></li>
    </ul>
    
  <ul class="nav-links">
  <li><a href="#">HOME</a></li>
  <li><a href="recepten.html" target="_blank">RECEPTEN</a></li>
  <li><a href="weetjes.html" target="_blank">WEETJES</a></li>
  <li><a href="about.html" target="_blank">ABOUT</a></li>
  <li><a href="contact.html" target="_blank">CONTACT</a></li>
  </ul>
  </section>
  
  <div class="menu-container">
    <div class="only">
      <a class="logo logoAplha"><img src="oklogo.png"></a>
      <a class="logo logoImg"><img src="oklogo.jpg"></a>
      <div class="toLeft">
      <a href="index.html" target="_blank" class="nav__link">HOME</a>
      <a href="recepten.html" target="_blank" class="nav__link">RECEPTEN</a>
      <a href="weetjes.html" target="_blank" class="nav__link">WEETJES</a>
      <a href="about.html" target="_blank" class="nav__link">ABOUT</a>
      <a href="contact.html" target="_blank" class="nav__link">CONTACT</a>
      <!-- <a class="zoek nav__link"><input type="text" placeholder="ZOEKEN....."></a> -->
    </div>
    </div>
  </div>
  
  <div class="mobLogo"><img src="oklogo.jpg" alt=""></div>

  
        <form class="contact-form container" action="contact.php" method="POST">
      
          <input type="text" id="name" name="name" placeholder="Your full name">
          <input type="text" id="mail" name="mail" placeholder="Your email">
          <input type="text" id="subject" name="subject" placeholder="Subject">
          <textarea name="message" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>
         <button type="submit" name="submit">Submit</button>

     </form>

<!-- FOOTER -->
<footer>
    <section class="footer">
      <div class="footerCont">
        <div class="fRecepten"><a href="#recepten"></a><br>
          <a id="fHead" href="#recepten">Recepten</a><br>
          <a href="#" target="_blank">Soepen</a><br>
          <a href="#" target="_blank">Salades</a><br>
          <a href="#" target="_blank">Pannenkoeken</a><br>
          <a href="#" target="_blank">Hoofdgerechten</a><br>
          <!-- <a href="#">Varenyky en pyrizhky</a><br> -->
          <a href="#" target="_blank">Desserts en drankjes</a><br>
          <a href="#" target="_blank">Voor-en-bijgerechten</a><br>
          <!-- <a href="#">Pannenkoeken en cakes</a><br> -->
        </div>

        <div class="fOver_ons"><a href="#"></a><br>
          <a id="fHead" href="#">Over ons</a><br>
          <a href="#" target="_blank">About</a><br>
          <a href="#" target="_blank">Over Oekraïne</a><br>
          <a href="#" target="_blank">Restaurants</a><br>
          <a href="#" target="_blank">Leuke feitjes</a><br>
        </div>

        <div class="fOekraïens"><a href="#"></a><br>
          <a id="fHead" href="#">Oekraïens</a><br>
          <a href="borsh.html" target="_blank">Borsjtsj</a><br>
          <a href="syrnyky.html" target="_blank">Syrnyky</a><br>
          <a href="varenyky.html" target="_blank">Varenyky</a><br>
        </div>

        <div class="fContacts"><a href="#"></a><br>
          <a id="fHead" href="#">Contacts</a><br>
          <a href="https://www.instagram.com/oekraiense.keuken/" target="_blank">Instagram</a><br>
          <a href="https://www.facebook.com/oekraiensekeuken.iryna" target="_blank">Facebook</a><br>
          <a href="#">Pinterest</a><br>

          <!-- <a href="#"><img src="facebook.png"></a><br>
        <a href="https://www.instagram.com/oekraiense.keuken/?hl=uk"><img src="instagram.png"></a><br>
        <a href="#"><img src="facebook.png"></a><br> -->
        </div>
      </div>
    </div>
    </section>

    <!-- @media screen and (max-width: 1000px) -->


  <div class="mediaFooterCont">
    <div class="mediaFooterText">
      <a href="#recepten" target="_blank">Recepten</a>
    </div>

    <div class="mediaFooterText">
      <a href="#" target="_blank">Over ons</a>
    </div>

    <div class="mediaFooterText">
      <a href="#" target="_blank">Oekraïens</a>
    </div>

    <div class="mediaFooterText">
      <a href="#" target="_blank">Contacts</a>
    </div>
  </div>
</div>

<!-- @media screen and (max-width: 600px) -->
  <div class="mobileFooterText">
    <a href="#recepten" target="_blank">Recepten</a>
    <a href="#recepten" target="_blank">Contacts</a>
  </div>
  </footer>
  <script src='mostpages.js'></script>

    </body>
</html>