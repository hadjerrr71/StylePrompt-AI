# StylePrompt AI

Bibliothèque de styles visuels avec aperçus et prompts explicatifs à copier dans un outil IA externe.

## Lancer le projet
1. Décompressez le dossier.
2. Ouvrez `index.html` dans votre navigateur. Pour une meilleure expérience, utilisez l'extension Live Server de VS Code.
3. Explorez les styles, ouvrez une fiche et copiez son prompt.

## Ajouter un style
Ajoutez un objet dans le tableau `styles` du fichier `js/styles-data.js` avec :
- `id` unique
- `name`
- `category`
- `description`
- `image`
- `tags`
- `prompt`

Placez l'image correspondante dans `assets/images/styles/`.

## Limites de cette version
- Les favoris sont sauvegardés localement dans le navigateur (LocalStorage).
- Aucun compte utilisateur ni backend.
- Le site ne lit pas les fichiers de l'utilisateur et ne génère pas les documents. L'utilisateur joint son fichier directement à l'outil IA choisi.
