# Par projektu

StartIT skolotāju kursu chata projekts kā piemērs klienta/servera programmai.
Projekta mērķis ir praktizēties gan klienta, gan servera puses programmēšanā, kā arī lielāka projekta sadalīšanā mazākos soļos, līdzīgi kā *agile* izstrādes metodoloģijās.
Projekta mērķis ir pamazām izveidot webčata aplikāciju, kurā būtu realizēta aprakstīta funkcionalitāte.

## Tehniskās prasības

1. Izveido **GitHub Fork** no orģinālā repozitorija uz savu
1. Veic **git clone** no *sava* GitHub repozitorija
1. Lai darbinātu un pārbauditu lokāli nepieciešama izstrādes vide ar Python 3 (un pip) un git atbalstu
1. Lai darbinātu citiem pieejamā veidā nepieciešams Heroku projekts, kas savienots ar GitHub repozitoriju, skat. [KAA-HEROKU](KAA-HEROKU.md)
1. Alternatīvi iepriekšējam punktam - pastāvīgi strādājošs serveris ar Interneta pieeju, publisku IP adresi un Python 3, piemēram:
   - repl.it projekts (skat. komentārus beigās)
   - personīgais/skolas serveris

## Mācību process

Viss projekts ir sadalīts posmos, katrs posms - sīkākos uzdevumos.

Katra posma sākuma stāvoklis ir zars (branch) GitHub repozitorijā ar pilnībā strādājošu projektu. Katrs zars ir ar posma sākumam (un attiecīgi - iepriekšējā posma beigām) atbilstošu funkcionalitāti un īsiem komentāriem konkrētā posma uzdevumu vietās.

Katrā posmā ir vairāki uzdevumi - jaunu failu un funkciju veidošana, funkciju pārveidošana un uzlabošana utml. Atsevišķu uzdevumu izpilde var izraisīt kļūdas vai nepilnības projekta darbībā, līdz ir pabeigti visi posma uzdevumi.

Sīkāk par posmiem un uzdevumiem skatīties [UZDEVUMI](UZDEVUMI.md)

Ir aplūkojama [prezentācija](https://gitpitch.com/startitfonds/startit-chats)

## Funkcionalitātes idejas

- [ ] lasīt ziņas
- [ ] sūtīt ziņu kā *Viesis*
- [ ] /vards *jauns_vards* - mainīt vārdu
- [ ] redzēt sūtītāja vārdu visām ziņām
- [ ] redzēt sūtīšanas laiku visām ziņām
- [ ] /palidziba - izdrukā visas pieejamās komandas
- [ ] /versija - rāda čata versiju
- [ ] /ping - parāda *latency* uz serveri
- [ ] /uptime - cik ilgi serveris strādā
- [ ] /stats - kaut kāda statistika par ziņām/dalībniekiem
- [ ] /joks - ģenerē joku no ārēja / iekšēja resursa
- [ ] /joks2 - ģenerē joku no API
- [ ] /vardi - parāda lietotāju sarakstu
- [ ] /poke *cita_vards* - pievērst kāda lietotāja uzmanību
- [ ] /joks *cita_vards* - pastāstīt kādam (vai par kādu) joku
- [ ] /dati *vards* - statistika par konkrētu lietotāju
- [ ] /auu - sūta uzmanību pievērsošu ziņu
- [ ] /bilde *link* - parāda attēlu no linka
- [ ] /mute /ignore /limit - prespama aizsardzība
- [ ] Limitēt ziņas garumu uz 280 simboliem
- [ ] limitēt *Viesu* sūtito ziņu biežumu
- [ ] skaņas efekts pie jaunas ziņas
