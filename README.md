---

# Analyse des Performances Bancaires - Dashboard Next.js

Ce projet est une application [Next.js](https://nextjs.org) développée pour analyser les performances d'une banque tchèque fictive à partir des données du Berka Dataset (1993-1998). Il fournit un tableau de bord interactif permettant de visualiser les indicateurs clés de performance (KPI) tels que le volume des transactions, les statuts des prêts, les disparités régionales, et les comportements financiers des clients. L'objectif est d'aider les parties prenantes de la banque (comme le CEO) à comprendre les tendances, identifier les risques (par exemple, les défauts de prêt), et prendre des décisions stratégiques pour améliorer la performance globale.

## Fonctionnalités du Projet

- **Dashboard Intuitif** : Visualisation des KPI via des graphiques interactifs (courbes, histogrammes, boxplots) pour explorer les données facilement.
- **Analyse des Prêts** : Suivi des montants, durées, et statuts des prêts, avec une attention particulière aux défauts (15 % des prêts en statuts B et D).
- **Comportement des Clients** : Analyse des transactions par compte, des montants moyens, et des tendances saisonnières (pics en décembre).
- **Disparités Régionales** : Comparaison des performances par district pour identifier les zones à risque élevé ou à forte activité.
- **Détection des Anomalies** : Identification des transactions extrêmes (outliers) via un boxplot pour détecter les fraudes potentielles.
- **Connexion MongoDB Optimisée** : Récupération des données depuis MongoDB Atlas avec un fallback vers des fichiers CSV en cas d’erreur.

## Prérequis

Avant de lancer le projet, assurez-vous d’avoir les éléments suivants :

- **Node.js** : Version 18 ou supérieure (vérifiez avec `node -v`).
- **MongoDB Atlas** : Une base de données `payment_kpi_db` configurée avec les collections nécessaires (par exemple, `volume_transactions`). Ajoutez l’URL de connexion dans un fichier `.env.local` :
  ```
  MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/payment_kpi_db?retryWrites=true&w=majority
  ```
- **Dépendances** : Les dépendances du projet doivent être installées (voir ci-dessous).
- **Fichiers CSV** : Placez les fichiers CSV (par exemple, `volume_transaction_value_count_month_df.csv`) dans le dossier `public` pour le fallback.

## Installation et Lancement

Ce projet a été initialisé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Suivez ces étapes pour le lancer :

1. **Cloner le Répertoire** (si applicable) :
   ```bash
   git clone https://github.com/Martial2023/Bank-performance-analysis-dashboard.git
   cd transaction-analysis
   ```

2. **Installer les Dépendances** :
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. **Configurer les Variables d’Environnement** :
   Créez un fichier `.env.local` à la racine du projet et ajoutez votre URL MongoDB :
   ```
   MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/payment_kpi_db?retryWrites=true&w=majority
   ```

4. **Lancer le Serveur de Développement** :
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

5. **Accéder au Dashboard** :
   Ouvre [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le tableau de bord.

Le dashboard se mettra à jour automatiquement à mesure que vous modifiez les fichiers (par exemple, `app/page.tsx` pour la page principale).

## Structure du Projet

- **`app/`** : Contient les pages et les Server Actions.
  - `page.tsx` : Page principale affichant le dashboard.
  - `actions/volumeTransactionActions.ts` : Server Actions pour récupérer les KPI depuis MongoDB ou CSV.
- **`components/`** : Composants React comme `LoanAnalysis.jsx` pour afficher les analyses textuelles.
- **`lib/`** : Fonctions utilitaires.
  - `mongodb.ts` : Gestion optimisée de la connexion MongoDB.
  - `loadCSV.ts` : Chargement des données depuis les fichiers CSV.
- **`public/`** : Dossier pour les fichiers CSV de fallback.
- **`types/`** : Définitions TypeScript pour les données (par exemple, `kpiTypes.ts`).

## Exemple de KPI Visualisé

Le dashboard affiche des KPI comme le volume mensuel des transactions. Par exemple, pour `volume_transaction_value_count_month_df` :
- **Données** : De janvier 1993 (177 transactions, CA 702 157,6 CZK) à juin 1993 (1880 transactions, CA 18 291 948,9 CZK).
- **Totaux** : Volume total = 5347 transactions, CA total = 45 498 471,6 CZK.

## En Savoir Plus sur Next.js

Pour approfondir vos connaissances sur Next.js, consultez ces ressources :
- [Documentation Next.js](https://nextjs.org/docs) - Tout sur les fonctionnalités et l’API de Next.js.
- [Tutoriel Next.js](https://nextjs.org/learn) - Un tutoriel interactif pour apprendre Next.js.
- [Dépôt GitHub de Next.js](https://github.com/vercel/next.js) - Vos retours et contributions sont les bienvenus !

## Déploiement sur Vercel

Le moyen le plus simple de déployer cette application Next.js est d’utiliser la [Plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), créée par les développeurs de Next.js.

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## Contribution

Si vous souhaitez contribuer à ce projet, veuillez ouvrir une issue ou soumettre une pull request sur GitHub. Toute suggestion pour améliorer l’analyse ou l’interface utilisateur est la bienvenue !

---