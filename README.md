# POC-eHealth Woorden filteren/ suggestief antwoord geven
Werkend prototype: http://rowennaroelofsen.github.io/index.html


<h2>Inleiding</h2><br>
In de README maak ik duidelijk wat mijn proces is geweest en hoe het werkende prototype is opgebouwd. Verder wil ik even duidelijk maken welke stappen ik heb gezet ten opzichte van het begin van het project. Ik heb in ieder geval meer vertrouwen gekregen in mijn CSS vaardigheden. Ik heb voor dit ontwerp namelijk eerst photoshop schermen gemaakt en deze vervolgens geprobeert na te maken met code. Dit is mij gelukt en ik heb nu het idee dat als ik mij er voor in zet dat ik veel designs kan vertalen in code (hoewel ik op dit gebied natuurlijk nog wel veel kan leren). Verder probeer ik javascript meestal een beetje te ontwijken omdat ik hier best veel moeite mee heb. Voor dit ontwerp was javascript de basis en moest ik er wel veel mee doen. Ik ben blij dat ik hier meer mee heb geoefend en ben tevreden met hoe ver ik ben gekomen. 

Mijn progressie op een rijtje. Ik heb geleerd: <br>
<u>
<li>hoe je een modal kan triggeren en de achtergrond onklikbaar kan maken / donker maken.</li>
<li>hoe je een hamburger menu maakt.</li>
<li>hoe je een menu in kan laten sliden middels CSS.</li>



<h2>Begin fase, POC</h2>
<b>Inleiding, wat wil je weten?</b><br>
Hoe kan ik er voor zorgen dat er een pop-up komt dat mensen er aan herinnert positief te reageren op het moment dat zei een negatief woord invoeren in het berichten venster? 

<b>Hoe heb ik onderzoek aangepakt?</b><br>
Voor mijn onderzoek heb ik naar twee technieken gekeken die in de praktijk worden toegepast waar er gereageerd wordt op bepaalde woorden. Zo kwam ik op een chatbot en een woorden filter. Bij de chatbot wordt er individueel gereageerd op bepaalde woorden. Zo kun je als het ware een gesprek na bootsen. Bij een woorden filter kun je een lijst maken met woorden en daar een actie aan verbinden, bijvoorbeeld het verbergen van deze woorden of hier op reageren met een alert. 

Allereerst heb ik naar voorbeelden in de praktijk gezocht. Zo heb ik een artikel gelezen (Jacobs, 2014) over een virtuele doktersassistente op de website van een dokterspraktijk genaamd Bibi. Bibi is een chatbot van de chatbot-leverancier Ecreation dat mensen advies (dus geen diagnose!) geeft op basis van hun vragen. De dokter kon zelf de antwoorden bijhouden die Bibi gaf en deze voor de volgende keer aanvullen zodat er steeds beter antwoord gegeven kan worden. Er zijn wel een aantal problemen die een dergelijke techniek met zich meeneemt. Zo kan niet iedereen de chatbot vinden, dit zijn voornamelijk de mensen die al meer verstand hebben van het web. Ook is het niet voor iedereen even duidelijk wat het concept van een chatbot is waardoor sommigen denken dat ze met een echt persoon praten. Een dergelijk systeem is erg geavanceerd en misschien niet persee nodig voor wat ik er voor wil bereiken. Ik wil immers gewoon een lijst van woorden hebben waar 1 bepaalde reactie uit komt (reageer positiever!). Daar hoeft geen dialoog voor plaats te vinden. Een voorbeeld van een woorden filter is het comment systeem van youtube. Hier worden comments met bepaalde woorden (die content-creators zelf kunnen aangeven) geblokt en niet geplaatst. Ik heb het systeem daarachter helaas niet kunnen vinden maar ik heb wel verder gekeken naar andere woord filters. Zo heb je een aantal CMSen die plug-ins aanbieden voor een dergelijk systeem, zoals Drupal met project wordfilter (Haupt, 2005). Ook zijn er voorbeelden te vinden waar het middels PHP wordt gedaan (Blinnikov, 2009). Het voorbeeld dat mij het meest aansprak was er één dat is gemaakt middels Jquery. De code is te vinden op github (Florell, 2012). Het nadeel van deze code was dat het niet gebaseerd was op textfields maar op de tekst vanuit de cliëntside. Ook werden de woorden gecensureerd middels sterretjes. Er kwam dus geen modal of alert aan te pas om de gebruikers een suggestie te geven. Ik heb dus besloten apart op zoek te gaan naar een manier om een restricties te plaatsen op woorden in textfields. Ook wilde ik dus dat er een functie aan gelinkt kon worden zodat er een modal opent met de suggestieve tekst op het moment dat er zo’n dergelijk woord ingetypt wordt. 

<b>Wat zijn de resultaten</b><br>
In eerste instantie dacht ik eraan om een soort van chatbot te maken die suggesties kon geven op bepaalde woorden die werden ingevoerd in het berichten venster. Bij het uitwerken van dit idee kwam ik er echter achter dat ik niet apart wilde reageren op elk woord. Ik wilde bij bepaalde lijst van woorden gewoon zeggen dat gebruikers positiever moeten reageren. Ik hoef daar dus niet een hele chatbot voor te ontwikkelen maar gewoon een systeem die een lijst van bepaalde woorden kan herkennen en hier een actie aan kan verbinden waardoor er een pop up met een positieve melding tevoorschijn komt. Hiervoor heb ik dus gekeken naar code voor het herkennen van een lijst woorden (een string) en code voor het maken van een modal. Het resultaat hiervan is te vinden in het code voorbeeld. 

<b>Conclusie: antwoord op wat je wilde weten…</b><br>
Het is mogelijk om middels jQuery bepaalde woorden te herkennen en hierop te reageren middels een pop-up die gebruikers er aan herinnerd om positief te reflecteren zoals is te zien in het code voorbeeld. Ik ben er echter niet zeker van of dit ook makkelijker kan.

<h2>Vervolg, eindproduct</h2><br>
Na het POC ben ik verder gegaan met het maken van de berichten pagina's in HTML & CSS om de flow duidelijker te maken. Mijn focus lag echter vooral op de pagina met het woordfilter. Uit onderzoek en feedback van Marije bleek dat ik onderscheidt moest maken in de woorden waar ik op filterde. Als je gebruikers zegt dat het negatief is als ze onzeker zijn en zegt dat ze dit niet mogen zeggen is de kans groot dat ze zich belemmerd voelen. Hiervoor hebben we de gefilterde woorden er nog eens bij gepakt en drie categorieën gemaakt waar allemaal anders op wordt gereageerd; Ontmoedigd, slecht & onzeker. Ik moest de code dus ook zo aanpassen zodat de verschillende categoriën ook verschillende berichten lieten zien. Ook waren er nog wat andere dingen die in de test naar voren kwamen waar ik rekening mee wilde houden. Zo komt de melding nu pas als de gebruiker klikt op de knop om naar de volgende stap te gaan, komt de melding niet als de woorden maar, echter, of desondanks worden gebruikt om zo rekening te houden met de context, krijgt de gebruiker een melding als hij niks heeft ingevoerd, & spelen we in op eventuele typfouten middels een spellingschecker (een javascript plugin) zodat het woordfilter deze niet over het hoofd ziet.

<b>Code toelichting</b>
Je kunt het werkend prototype hier bekijken: http://rowennaroelofsen.github.io/index.html<br>
Ik loop hier even door de javascript code door vanaf regel 17 (woordfilter.js)<br>

Op het moment dat er op submit wordt geklikt (de volgende stap knop) wordt de function checkeEpty getriggerd. Deze kijkt of er tekst in het tekstveld staat. Als dit niet het geval is krijgt het variabel empty de waarde true mee waardoor de overlay zichtbaar wordt en waardoor het modal wordt geopend met daarin de melding "Je bent vergeten een bericht in te voeren!". Als er wel tekst is ingevoerd krijgt het variabel empty de waarde false mee en wordt de functie correct getriggerd.<br>

Deze functie controlleert eerst voor elk van de drie van de drie categoriën woorden (bang, slecht & ontmoedigd) of er een woord in het tekstveld is gebruikt uit deze strings. Dit gebeurt middels een forloop die door de string heen loopt. Als de loop een woord tegen komt wordt de waarde van het variabel found van false omgezet naar true. Elk van de categoriën heeft een eigen melding, deze worden in de HTML gezet door de inner html van span-text aan te passen. Ook wordt het negatieve woord dat de gebruikers hebben gebruikt herhaald in deze melding. Op dezelfde manier wordt er door de string van het variabel exception heen gelopen. Als het één van deze woorden tegen komt wordt het modal niet geopend en gaat de gebruiker direct door naar de volgende pagina (het bericht kan gewoon geplaatst worden).<br>

Als de waarde van het variabel found true is wordt het modal geopend met hierin de juiste melding en worden twee buttons zichtbaar, één waarmee de gebruikers er voor kunnen kiezen het bericht aan te passen en een ander waarbij de gebruiker er toch voor kan kiezen het bericht te plaatsen. Als het variabel found op false blijft staan wordt de gebruiker meteen doorverwezen naar de voglende pagina.<br> 

Als de gebruiker op het kruisje klikt wordt het modal gesloten.<br>

<h2>Hoe zou ik verder gaan?</h2><br>
In de lijst van issues staan een aantal punten waarvan ik denk dat het verbeteringen en aanvullingen zijn. Als ik hier momenteel zelf verder mee gaan zou ik die issues aanpakken en het inzetten in de praktijk om te kijken hoe het werkt (zijn er problemen met de context (wordt er onnodig of verkeerd gereageerd op woorden)/ worden er woorden gebruikt die duiden op een terugval waar nog niet op gereageerd wordt).<br>


<h2>Bronnen:</h2><br>
Agus (z.j.). 10 Tools to Build your Own Chatbots [Artikel]. Geraadpleegd op 06 december, 2016, van http://www.hongkiat.com/blog/tools-to-build-chatbots/<br>
Blinnikov, L. (2009, 13 juni). Creating a word filter in PHP. Geraadpleegd op 06 december, 2016, van http://nookkin.com/articles/programming/creating-a-word-filter-in-php.ndoc<br>
Florell, C. (2012). jQuery.ProfanityFilter [Github repository]. Geraadpleegd op 06 december, 2016, van https://github.com/ChaseFlorell/jQuery.ProfanityFilter<br>
Haupt, M. (2005, 12 juni). A simple but extendable word filter for Drupal.. Geraadpleegd op 06 december, 2016, van https://www.drupal.org/project/wordfilter<br>
J148 (2014, 30 september). How to restrict certain words in text field using javascript? [Forumpost]. Geraadpleegd op 06 december, 2016, van http://stackoverflow.com/questions/26126076/how-to-restrict-certain-words-in-text-field-using-javascript<br>
Jacobs, A. (2014, 08 december). eHealth op de werkvloer: vraag het aan de virtuele doktersassistente. Geraadpleegd op 06 december, 2016, van http://www.smarthealth.nl/2014/12/08/ehealth-op-de-werkvloer-vraag-het-aan-de-virtuele-doktersassistente/<br>
W3Schools. (z.j.). How TO - CSS/JS Modal. Geraadpleegd op 06 december, 2016, van http://www.w3schools.com/howto/howto_css_modals.asp<br>
Modal: http://www.w3schools.com/howto/howto_css_modals.asp<br>
var found idee: Dave Bitter<br>
Spellingchcker: Javascriptspellcheck. (2004). JavaScript Spell Check JavaScript SpellCheck The intelligent cross-platform spellchecker solution using JavaScript , since 2004 [Code]. Geraadpleegd op 22 januari, 2017, van http://www.javascriptspellcheck.com/JavaScript_SpellChecking_Dictionaries



