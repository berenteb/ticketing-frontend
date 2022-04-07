# Ticketing frontend
***ReactJS tanfolyam példa projekt***
## Előkészületek
Yarn megléte erősen ajánlott, a projekt azzal lett elindítva és telepítve, így nem garantált, hogy NPM-mel is out-of-the-box működni fog.

[Yarn telepítéséről itt!](https://classic.yarnpkg.com/en/docs/install)

## Setup
### Telepítés:
``yarn install``
### Configuráció
``.env`` fájlban be lehet állítani a használni kívánt backend szolgáltatás címét így:

``REACT_APP_BACKEND_URL="http://localhost:3001"``

Ez egyébként az alapértelmezett cím, így ha nem kerül a ``.env`` fájl létrehozásra, akkor ezt fogja használni a frontend.

Backend-ként a Kir-Dev [Ticketing API-ját](https://github.com/kir-dev/ticketing-api) használjuk, arról bővebben a linkre kattintva lehet olvasni és elindítani.
Figyeljünk arra, hogy a backend a ``3001``-es porton induljon el, mert a React-ot célszerű a ``3000``-res portra engedni.
### Indítás
Az indítás a következő paranccsal történik:

``yarn start``

Ezután a [http://localhost:3000](http://localhost:3000) címen látható a futó projekt.