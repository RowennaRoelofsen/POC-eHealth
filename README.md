# POC-eHealth Woorden filteren/ suggestief antwoord geven

<b>Inleiding, wat wil je weten?</b><br>
Hoe kan ik er voor zorgen dat er een pop-up komt dat mensen er aan herinnert positief te reageren op het moment dat zei een negatief woord invoeren in het berichten venster? 

<b>Hoe heb ik onderzoek aangepakt?</b><br>
Voor mijn onderzoek heb ik naar twee technieken gekeken die in de praktijk worden toegepast waar er gereageerd wordt op bepaalde woorden. Zo kwam ik op een chatbot en een woorden filter. Bij de chatbot wordt er individueel gereageerd op bepaalde woorden. Zo kun je als het ware een gesprek na bootsen. Bij een woorden filter kun je een lijst maken met woorden en daar een actie aan verbinden, bijvoorbeeld het verbergen van deze woorden of hier op reageren met een alert. 

Allereerst heb ik naar voorbeelden in de praktijk gezocht. Zo heb ik een artikel gelezen (Jacobs, 2014) over een virtuele doktersassistente op de website van een dokterspraktijk genaamd Bibi. Bibi is een chatbot van de chatbot-leverancier Ecreation dat mensen advies (dus geen diagnose!) geeft op basis van hun vragen. De dokter kon zelf de antwoorden bijhouden die Bibi gaf en deze voor de volgende keer aanvullen zodat er steeds beter antwoord gegeven kan worden. Er zijn wel een aantal problemen die een dergelijke techniek met zich meeneemt. Zo kan niet iedereen de chatbot vinden, dit zijn voornamelijk de mensen die al meer verstand hebben van het web. Ook is het niet voor iedereen even duidelijk wat het concept van een chatbot is waardoor sommigen denken dat ze met een echt persoon praten. Een dergelijk systeem is erg geavanceerd en misschien niet persen nodig voor wat ik er voor wil bereiken. Ik wil immers gewoon een lijst van woorden hebben waar 1 bepaalde reactie uit komt (reageer positiever!). Daar hoeft geen dialoog voor plaats te vinden.   Een voorbeeld van een woorden filter is het comment systeem van youtube. Hier worden comments met bepaalde woorden (die content-creators zelf kunnen aangeven) geblokt en niet geplaatst. Ik heb het systeem daarachter helaas niet kunnen vinden maar ik heb wel verder gekeken naar andere woord filters. Zo heb je een aantal CMSen die plug-ins aanbieden voor een dergelijk systeem, zoals Drupal met project wordfilter (Haupt, 2005). Ook zijn er voorbeelden te vinden waar het middels PHP wordt gedaan (Blinnikov, 2009). Het voorbeeld dat mij het meest aansprak was er één dat is gemaakt middels Jquery. De code is te vinden op github (Florell, 2012). Het nadeel van deze code was dat het niet gebaseerd was op textfields maar op de tekst vanuit de cliëntside. Ook werden de woorden gecensureerd middels **. Er kwam dus geen modal of alert aan te pas om de gebruikers een suggestie te geven. Ik heb dus besloten apart op zoek te gaan naar een manier om een restricties te plaatsen op woorden in textfields. Ook wilde ik dus dat er een functie aan gelinkt kon worden zodat er een modal opent met de suggestieve tekst op het moment dat er zo’n dergelijk woord ingetypt wordt. 

<b>Wat zijn de resultaten</b><br>
In eerste instantie dacht ik eraan om een soort van chatbot te maken die suggesties kon geven op bepaalde woorden die werden ingevoerd in het berichten venster. Bij het uitwerken van dit idee kwam ik er echter achter dat ik niet apart wilde reageren op elk woord. Ik wilde bij bepaalde lijst van woorden gewoon zeggen dat gebruikers positiever moeten reageren. Ik hoef daar dus niet een hele chatbot voor te ontwikkelen maar gewoon een systeem die een lijst van bepaalde woorden kan herkennen en hier een actie aan kan verbinden waardoor er een pop up met een positieve melding tevoorschijn komt. Hiervoor heb ik dus gekeken naar code voor het herkennen van een lijst woorden (een string) en code voor het maken van een modal. Het resultaat hiervan is te vinden in het code voorbeeld. 

<b>Conclusie: antwoord op wat je wilde weten…</b><br>
Het is mogelijk om middels jQuery bepaalde woorden te herkennen en hierop te reageren middels een pop-up die gebruikers er aan herinnerd om positief te reflecteren zoals is te zien in het code voorbeeld. Ik ben er echter niet zeker van of dit ook makkelijker kan.

<b>Bronnen:</b><br>
Agus (z.j.). 10 Tools to Build your Own Chatbots [Artikel]. Geraadpleegd op 06 december, 2016, van http://www.hongkiat.com/blog/tools-to-build-chatbots/
Blinnikov, L. (2009, 13 juni). Creating a word filter in PHP. Geraadpleegd op 06 december, 2016, van http://nookkin.com/articles/programming/creating-a-word-filter-in-php.ndoc
Florell, C. (2012). jQuery.ProfanityFilter [Github repository]. Geraadpleegd op 06 december, 2016, van https://github.com/ChaseFlorell/jQuery.ProfanityFilter
Haupt, M. (2005, 12 juni). A simple but extendable word filter for Drupal.. Geraadpleegd op 06 december, 2016, van https://www.drupal.org/project/wordfilter
J148 (2014, 30 september). How to restrict certain words in text field using javascript? [Forumpost]. Geraadpleegd op 06 december, 2016, van http://stackoverflow.com/questions/26126076/how-to-restrict-certain-words-in-text-field-using-javascript
Jacobs, A. (2014, 08 december). eHealth op de werkvloer: vraag het aan de virtuele doktersassistente. Geraadpleegd op 06 december, 2016, van http://www.smarthealth.nl/2014/12/08/ehealth-op-de-werkvloer-vraag-het-aan-de-virtuele-doktersassistente/
W3Schools. (z.j.). How TO - CSS/JS Modal. Geraadpleegd op 06 december, 2016, van http://www.w3schools.com/howto/howto_css_modals.asp