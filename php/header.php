<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Band - La musique au bout des doigts</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta name="description"
        content="Music Band vous permet d'écouter votre musique préférée où vous voulez. Profitez de podcasts exclusifs et de playlists sur-mesure construite à partir de plus de cinquante millions de titres.">
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="m-auto">
    <nav class="navbar-nav d-flex flex-row align-items-center">
        <div class="menu-btn d-flex justify-content-center col-2">
            <img src="img/menuburger.svg" alt="Menu Burger">
        </div>
        <div class="d-flex col-5 logo ps-3 align-items-center">
            <img src="img/logo.svg" alt="logo du site">
            <p class="ms-3 brand">Music Band <br>
                <span class="sub-brand">La musique au bout des doigts</span></p>
        </div>
        <form id="searchfield" class="d-flex d-none d-md-block">
            <input type="search" size="35" placeholder="Recherchez, écoutez...">
            <button type="submit"><img src="img/headphones.svg" alt="Bouton de recherche de musique"></button>
        </form>
        <!-- Note pour plus tard, au clic le bouton suivant affiche la barre de recherche qui a disparue -->
        <div class="searchsong d-flex d-block d-md-none col-1">
            <img src="img/loupe.svg" alt="Loupe pour rechercher" class="loupe m-auto">
        </div>
        <div id="account">
            <img src="img/user.svg" alt="icone utilisateur">
        </div>
        <p class="m-0 d-none d-lg-block" id="login">Compte</p>
    </nav>
    <header>

        <div class="d-flex flex-column justify-content-end" id="catchphrase">
            <h1>Music <span class="text-white">Band</span></h1>
            <p class="description-offer text-white pt-3">Votre musique sans pub, partout. Seulement 9,99 €/mois
                ensuite.<br>
                Soumis à conditions. Des podcasts exclusifs.<br>
                Des playlists sur-mesure. Faites des découvertes.<br>
                Zappez à volonté. Plus de 50 M de chansons.<br>
                Annulation à tout moment.</p>
            <div class="pt-5">
                <a href="#" class="start-listening">COMMENCER L'ÉCOUTE</a>
                <a href="#" class="subscribe">S'ABONNER</a>
            </div>

        </div>

    </header>