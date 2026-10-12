# risikoversicherer.de · Version 1

Statische Website mit responsivem Fintech-Design, browserlokalem Absicherungsrechner, Ratgeber, FAQ, Druckfunktion und Rechtsseiten-Entwürfen. Keine Installation, kein Build, keine externen Fonts, keine Tracker. Alle Asset- und Navigationspfade sind relativ: funktioniert unter /risikoversicherer/ und einer eigenen Domain.

## 1. Lokal ansehen

ZIP entpacken, im Ordner `risikoversicherer` die `index.html` öffnen. Der Rechner funktioniert direkt. Alternativ `python3 -m http.server 8000` im Ordner starten und http://localhost:8000 aufrufen.

## 2. Vor öffentlicher Veröffentlichung

- `impressum.html`: Betreiberangaben sind eingetragen; vor Veröffentlichung prüfen, ob wegen einer späteren Änderung des Angebots zusätzliche Pflichtangaben erforderlich werden.
- `datenschutz.html`: Verantwortlicher ist eingetragen; den Entwurf mit der tatsächlichen Hostingkonfiguration abgleichen. Kein fertiger juristisch geprüfter Text.
- Rechnerannahmen und Texte fachlich prüfen. Keine konkreten Tarife oder Versicherungsvermittlung enthalten.
- `noindex,nofollow` und `robots.txt` verhindern keine öffentliche Einsicht! Es handelt sich nicht um Zugangsschutz.

## 3. Dateien in das bestehende GitHub-Repository hochladen

1. Repository `risikoversicherer` öffnen, Register **Code**.
2. **Add file → Upload files** wählen.
3. Den INHALT des entpackten Website-Ordners hochladen: `index.html`, `assets/`, `ratgeber.html`, `impressum.html`, `datenschutz.html`, `404.html`, `robots.txt`, `README.md`. Nicht die ZIP-Datei und nicht den übergeordneten Ordner hochladen.
4. Falls bereits eine README existiert, wird sie ersetzt; eigene Angaben vorher sichern.
5. Mit **Commit changes** auf dem Hauptbranch speichern.
6. Optional die leere `.nojekyll`-Datei mit hochladen. Falls sie unsichtbar ist: **Add file → Create new file**, Dateiname `.nojekyll`, speichern. Die einfachen statischen Dateien funktionieren auch ohne diese Datei.
7. Kontrollieren: `index.html` muss direkt auf der obersten Ebene des Repositorys liegen, und `assets` muss ein Unterordner sein.

## 4. GitHub Pages einschalten

Für GitHub Free ein öffentliches Repository verwenden. Keinerlei Zugangsdaten oder private Unterlagen hochladen.

1. **Settings → Pages** öffnen.
2. Unter **Build and deployment**: **Source → Deploy from a branch**.
3. Branch **main** (oder den tatsächlich verwendeten Hauptbranch) und Ordner **/ (root)** wählen.
4. **Save** klicken. Nach abgeschlossener Bereitstellung zeigt GitHub die Adresse an, gewöhnlich `https://DEINNAME.github.io/risikoversicherer/`.
5. Bei Fehlern im Register **Actions** das Deployment ansehen. Eine 404 entsteht oft, wenn die Dateien in einem zusätzlichen Unterordner statt auf der obersten Ebene liegen.
6. Auf Desktop und Smartphone prüfen: Rechner ändern, Beispiel zurücksetzen, negative Eingaben, FAQ öffnen, Ratgeber und Rechtsseiten anklicken, Druckfunktion testen.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 5. Hosting und spätere Monetarisierung

GitHub Pages verbietet die Nutzung als kostenloses Hosting für ein Onlinegeschäft oder eine Website, deren Schwerpunkt kommerzielle Transaktionen sind. Diese Version hat keine Affiliate-Links, Leadformulare oder Abschlussfunktion. Vor dem Wechsel zu einem Affiliate-Geschäft muss das Hosting anhand der Anbieterbedingungen neu bewertet werden. Der statische Code kann unverändert auf andere statische Hostingdienste übertragen werden.

Bedingungen: https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features

## 6. Eigene Domain erst danach verbinden

Die Version enthält absichtlich keine CNAME-Datei. DNS und united-domains bleiben unverändert. Erst nach erfolgreichem Test und Klärung des langfristigen Hostings verbinden wir `risikoversicherer.de` / `www.risikoversicherer.de`. Die aktuelle GitHub-Anleitung ist maßgeblich:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 7. Für Suchmaschinen freigeben

Nach Vervollständigung und Prüfung der Rechtsseiten und Inhalte:
- Aus allen HTML-Dateien `<meta name="robots" content="noindex,nofollow">` entfernen.
- In `robots.txt` `Disallow: /` durch `Allow: /` ersetzen.
- Nach Festlegung der endgültigen Domain Canonical-URLs und eine Sitemap mit den tatsächlichen Seitenadressen ergänzen; erst danach Search Console anbinden.

## Berechnung

`max(0, max(0, Bedarf − Einnahmen) × 12 × Jahre + Kredite + Einmalbedarf − Rücklagen − bestehende Absicherung)`.

Beispiel: (3.500 − 2.000) × 12 × 10 + 300.000 − 30.000 = 450.000 EUR.

Heutige Euro, keine Inflation, keine Rendite, keine steuerlichen Effekte, keine Tarif- oder Versicherbarkeitsbewertung. Bei vollständiger Tilgung die zugehörigen Kreditraten nicht zugleich im monatlichen Bedarf ansetzen. Die Dauer wird bewusst direkt gewählt, nicht aus der Kinderzahl abgeleitet. Die Eingaben werden weder gespeichert noch übertragen. Der Hostinganbieter verarbeitet technisch notwendige Zugriffsdaten.

## Anpassungen

- Design: `assets/style.css`
- Rechner: `assets/calculator.js`
- Inhalte: HTML-Dateien

Validiert: JavaScript-Syntax, Rechenfälle einschließlich Null-/Negativsaldo und Eingabegrenzen, lokale Dateiverweise. Keine visuelle Browserprüfung in dieser Umgebung durchgeführt. Öffentliche Veröffentlichung und Repository-Upload wurden nicht durchgeführt, da die Repository-Adresse nicht vorliegt.
