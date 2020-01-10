# Posmi un atbilstošie zari

- **master** - zars ar dokumentāciju un minimālo sākuma kodu, lai strādātu Heroku aplikācija. Šis ir zars kurā jūs varat strādāt visu laiku. Pārējie zari ir domāti gadījumā, ja kaut kas nesanāca vai pietrūka laika pabeigt posmu - lai varētu turpināt sekot uzdevumiem.
- **0.1-sakums** - zars ar sākuma kodu, mapju un failu struktūra un "sveika pasaule" kodu, lai pārbaudītu Heroku servera uzstādījumus
- **0.2-servera-puse** - chata rindu lasīšanas/raksīšanas funkcionalitāte servera pusē (Python), pārbaudāma un lietojama caur Postman vai Developer Tools
- **0.3-klienta-puse** - vienkāršu chata rindu lasīšanas/raksīšanas funkcionalitāte klienta (pārlūkprogrammas) pusē (HTML/Javascript)
- **0.4-klienta-izskata-uzlabojumi** - chata izskata uzlabojumi (HTML/CSS)
- **0.5-oop-modelis** - refaktorēšana uz OOP modeli
- **0.6-komandas** - jauna funkcionalitāte servera un klienta pusē - komandu apstrāde, konkrēti - iespēja nomainīt vārdu un izdrukāt palīdzību
- **0.7-laika-zimogs** - jauna funkcionalitāte - laika zīmogs ziņām

## Uzdevumi pa posmiem

## 0.1 - Sākums

Ņemot par paraugu esošo projektu, izveidot mapju un failu struktūru Flask projektam, kas izmanto HTML templates

1. Izveido Flask izmantoto mapju struktūru: `templates` un `static` mapes
1. Izveido pamata template failu `index.html` template mapē
1. Izveido js (un favicon) failus static mapē
1. Izmaina `main.py`, lai tas izmantotu index.html template / routei
1. Pievieno jaunu importu - `render_template`
1. Pievieno servera monitorēšanas routi `/health`, kas atbild ar "OK"
1. Pārbauda darbību palaižot un atverot <http://127.0.0.1:5000/> un <http://127.0.0.1:5000/health> adreses

## 0.2 - Servera puses pamata funkcionalitāte

Turpinot iepriekšējā posmā paveikto, pievienot servera pusē čata pamata funkcionalitāti - iespēju izlasīt esošu čata tekstu, kā arī pievienot jaunu ziņu - čata rindiņu. Funkcionalitātes nodrošināšanai čata tekstu nepieciešams ierakstīt logfailā. Jāņem vērā, ka datus sūtīt labāk JSON formātā, tādēļ jāveido attiecīgas datu struktūra:

chats.txt:

```text
Sveicieni no StartIT
Otra rinda
```

Datu struktūra:

```json
{
    "chats":
        [
            "Sveicieni no StartIT",
            "Otra rinda"
        ]
}
```

1. Izveido divas jaunas routes - `/chats/lasi` un `/chats/suuti` ar funkcijām `ielasit_chatu` un `suutiit_zinju`
1. Izveido chata logfailu `chats.txt`, kurā ieraksta dažas rindiņas ar tekstu (turpmāk vienu chata rindiņu sauksim par *ziņu*)
1. `ielasit_chatu` jāatver chata logfails, jāielasa saturs un jāpārveido json. Izsauc šo funkciju no routes **/chats/lasi**
1. Pārbauda darbību caur Developer Tools vai Postman
1. `suutiit_zinju` jāatver chata logfails un jāpievieno jauna rindiņa.Izsauc šo funkciju no routes **/chats/suuti**
1. Pārbauda darbību caur Developer Tools vai Postman

## 0.3 - Klienta puse

Turpinot iepriekšējā posmā paveikto, pievienot klienta pusē čata pamata funkcionalitāti - iespēju izlasīt esošu čata tekstu, kā arī pievienot jaunu ziņu - čata rindiņu.

1. Izveido chata template `chats.html`, ar `div id="chats"` lauku, kur rādīt chata tekstu, kā arī `input` lauku un `submit` pogu jaunas ziņas ievadei.
1. Pievieno `chats.js` kā javascript avotu pie `chats.html`
1. Nomaina routes / template uz `chats.html`
1. `chats.js` failā izveido jaunu async funkciju `lasiChatu`, kas izmanto `fetch`, lai pieprasītu datus no servera puses routes `/chats/lasi`
1. Izveido jaunu funkciju `raadiChatuVienkarsi`, kas atrod chata elementu pēc ID `chats` un vienkārši ieraksta šajā elementā chata tekstu, atdalot rindiņas ar `<br>`.
1. Izveido jaunu async funkciju `suutiZinju`, kas nolasa tekstu no ievades lauka un izmanto `fetch`, lai POSTotu to uz routi `/chats/suuti`, sagaida atbildi un izsauc funkciju `raadiChatuVienkarsi` ar jauno chata saturu
1. Ērtībai pievieno iespēju sūtīt ziņu ne tikai nospiežot pogu, bet arī nospiežot `Enter` taustiņu.

## 0.4 Klienta puses izskata uzlabojumi

Turpinot iepriekšējā posmā paveikto, nemainot funkcionalitāti uzlabot chata izskatu.
Šis posms nav nepieciešams, bet padara projektu daudz patīkamāku lietošanā un demonstrēšanā.
Posms izmaina html template un css failus, kā arī javascript funkcijas, kas attēlo chata rindiņas.

1. `static` mapē izveido `stils.css` failu un pievieno to pie `index.html` template
1. Pievieno Bootstrap css bibliotēku
1. Veic izmaiņas `chat.html` un `stils.css` failos, ņemot par paraugu dotos `0.4-paraugs-chats.html` un `0.4-paraugs-stils.css` failus
1. Veic izmaiņas `chats.js`, ņemot par paraugu `04-chats.js` failu
1. Ekstra - šo darbību rezultātā droši vien gadījās, ka css/js izmaiņas nav redzamas. Tas var notikt, ja pārlūkprogramma atcerās kādu iepriekšējo statisko failu versiju. Lai būtu vieglāk pamanīt šo problēmu, var pielikt versijas rādīšanu chata galvenē.
1. Ekstra2 - var pārbaudīt vai ievades laukā vispār kaut kas ir ierakstīts, lai nesūtītu tukšas rindas

## 0.5 Refaktorēšana uz OOP modeli

Chatu būtu jāpapildina ar jaunu funkcionalitāti, tādu kā vārda nomaiņu, laika rādīšanu, chata komandas, statistiku utml. Bet ar pašreizējo struktūru, kad katra chata ziņa ir vienkārša teksta rindiņa bez nekādas konteksta informācijas, pievienot katru papildus funkcionalitāti būtu arvien grūtāk un grūtāk. Būtu labāk, ja katra ziņa sastāvētu no dažādām daļām - ziņas teksta, ziņas autora, ziņas nosūtīšanas laika utml. Lai apstrādātu šādu datu struktūru būtu ērtāk lietot objektorientēto programmēšanu, kas arī ir šī posma mērķis.

1. Izmainām chata logfailu `chats.txt`, lai katra rindiņa ir json objekts, piemēram:

    ```json
    {"vards": "Serveris", "zinja": "Sākam jaunu, skaistu dzīvi!"}
    ```

1. Izveidojam jaunu Python failu `chats.py` un izveidojam tur funkcijas chata lasīšanai un papildināšanai, pārvietojot attiecīgo kodu no main.py
1. Papildinām lasīšanas kodu, lai apstrādātu katru chata rindiņu kā json objektu.
1. Papildinām rakstīšanas kodu, lai pārvērstu json objektu par stringu
1. Pārbaudām servera lasīšanas un rakstīšanas funkcionalitāti ar Postman

Klienta pusē pēc šīm izmaiņām vairs nekas nerādīsies, tādēļ jāveic izmaiņas arī `chats.js`

1. Izveidojam divas klases - `Chats` un `Zinja`, izveidojam konstruktorus un pārveidojam funkcijas par klases metodēm - `Chats.raadiChataRindas()` un `Zinja.formateRindu()`
1. Izmanto jaunās klases abās async funkcijās, kas komunicē ar serveri - `lasiChatu()` un `suutiZinju()`
1. Tagad strādā arī klienta puse!

## 0.6 Komandu pievienošana

Papildinot iepriekšējo posmu, pievienosim chata komandas.

- Izveido funkciju `saprotiKomandu`, kas apstrādā ievades ziņu, pārbauda vai tā sākas ar komandas simbolu, piemēram "/", un tad izpilda komandu, nevis vienkārši izvada ziņu
- Pirms ziņas sūtīšanas uz serveri izsauc izveidoto funkciju

## 0.7 Laika zīmogs

- Pievieno jaunu parametru `chats.py`, kas pievieno jaunai chata rindai tās izveidošanas laiku
- `chats.js` pievieno jauno parametru `Zinja` klases inicializatoram un `formateRindu` metodei.
