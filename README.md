# Projet FizzBuzz and Multiplication table

## Description

Ce projet regroupe deux grands classiques du développement de logiciels, conçus pour pratiquer et maîtriser la logique algorithmique de base en JavaScript. L'objectif est de manipuler avec précision les structures de contrôle et la modularité du code.

## Features

1. FizzBuzz (fizzbuzz.js)
   Un script qui parcourt les nombres de 1 à 100 et applique les règles suivantes :Affiche "Fizz" pour les multiples de 3.Affiche "Buzz" pour les multiples de 5.Affiche "FizzBuzz" pour les nombres qui sont à la fois multiples de 3 et de 5.Affiche le nombre lui-même si aucune des conditions précédentes n'est remplie.

2. Tables de Multiplication (tables.js)
   Un script comprenant deux fonctionnalités majeures :Table unique : Une fonction réutilisable qui prend un nombre en paramètre et affiche sa table de multiplication (de 1 à 10).Génération globale : Une boucle automatisée qui utilise la fonction précédente pour générer et afficher l'intégralité des tables de multiplication de 1 à 9.

## 🎨 Interface et Design (CSS)

- **Architecture par Variables** : Utilisation de variables globales CSS (`:root`) pour maintenir l'harmonie de la palette de couleurs d'origine.
- **Navigation Intelligente** : Un menu de navigation persistant (`position: sticky`) pour basculer facilement entre les sections de la page.
- **Grille & Alignement Flexbox** :
  - La grille FizzBuzz s'adapte automatiquement (5 colonnes sur mobile, 10 colonnes sur écran large).
  - Les tables de multiplication s'organisent de manière fluide via **Flexbox** (`flex-wrap: wrap`) pour s'aligner proprement selon la taille de l'écran.
- **Interactivité (`:hover`)** :
  - Les lignes de calcul se mettent en surbrillance au passage de la souris pour une meilleure lisibilité.
  - Les cartes des tables se soulèvent subtilement et changent de couleur de bordure au survol.

## Architecture des fichiers

```text
├── index.html       # Structure sémantique (Header, Main, Section, Nav)
├── style.css        # Palette de couleurs, Flexbox, Grids et animations :hover
├── fizzbuzz.js      # Logique de calcul et d'affichage du FizzBuzz
├── table.js         # Logique des tables de multiplication (simple et multi)
└── README.md        # Documentation du projet
```

## Technologies exploitées

- **HTML5** (Balises sémantiques et ancres de navigation)
- **CSS3** (Variables personnalisées, Flexbox, Grid Layout, Transitions)
- **JavaScript ES6+** (Structures itératives `while`/`for`, opérateurs logiques, manipulation du DOM)

## Install and Use

Pour lancer le script FizzBuzz
`node fizzbuzz.js`

Pour lancer le script des tables de multiplication
`node tables.js`

## Informations sur le projet

- **Auteur** : Val Pedro
- **Contexte** : Akieni Academy — Cohorte 2 — 2026 (Semaine 7)
