# Pflichtenheft



| Projektbezeichnung | Vocabulous 	 		|
|------------------- |:-------------------: |
| Projektleiter		 | Urbanides Konstantin |
| Erstellt am 		 | 19.11.2017		    |
| Zuletzt geändert	 | 03.12.2017			|
| Zustand			 | in Bearbeitung		|
| Dokumentenablage	 | ---------------		|


## Weitere Produktinformationen
|                 | Mitwirkende 	     |                      |
|------------     |:----------:          |         :----------: |
| David Hiebl	  | Max Wahl             | Konstantin Urbanides |

## Änderungsverzeichnis
|          Datum | Geänderte Kapitel | Beschreibung der Änderung|     Autor     |
|------------------------------- |:----------------: | :------------------------:|:-------------:|
| 	  03.12.2017| Funktionale Anforderungen, Charakterisierende Informationen            |Alle Bilder wurden zugeschnitten (Gui,Diagramme)             |       David Hiebl|
| 	  05.12.2017| Ziele, Zielbestimmungen, Funktionale Anforderungen          | Änderungen laut Feedback eingebaut             |       Maximilian Wahl|

## Inhalt

*  1 Motivation
* 2	Ausgangssituation und Zielsetzung
    * 2.1 Ausgangssituation
    * 2.1.1 Beschreibung des Problembereiches
    * 2.1.2 Glossar
    * 2.1.3 Modell des Problembereiches
    * 2.1.4 Bechreibung des Geschäftsfeldes
    * 2.1.5 Beschreibung der Geschäftsprozesse
    * 2.2 Zielbestimmung
* 3 Funktionale Anforderungen
    * 3.1 Use Case Diagramm
* 4 Nicht-funktionale Anforderungen
* 5 Mengengerüst
* 6 Risikoakzeptanz
* 7 Lebenszyklusanalyse und Gesamtsystemarchitektur
* 8 Schnittstellenübersicht
* 9 Lieferumfang
* 10 Abnahmekriterien
* 11 Anderungsverfolgung zu den Anfordernungen (Lastenheft)
* 12 Abkürzungsverzeichnis
* 13 Literaturverzeichnis
* 14 Abbildungsverzeichnis




## 1 Motivation
Wir sehen dieses Projekt als Vorbereitung für zukunftige Projekte, um die Aufgaben und den Ablauf eines Projektes kennen zu lernen, sowie auch die verschiedenen Problembereiche eines Projektes zu identifizieren und diese auch vorbeugend zu behandeln. Projekte/Aufgaben in Gruppen zu erledigen ist in der IT-Branche sehr wichtig, da heutzutage viele Projekte vorallem in der IT-Branche in Gruppen erledigt werden, deshalb sehen wir dieses Projekt als Chance die gelernte Theorie in die Praxis umzusetzen und unsere Fähigkeiten in der Projektentwicklung zu verbessern.

## 2 Ausgangssituation und Zielsetzung
## 2.1 Ausgangssituation und Projektbegründung
---
In den vergangenen Jahren gingen beim Sprachlerninsitut Language4everyone Linz immer wieder Fragen auf Grund eines mobilen Assistenzprogrammes ein, um auch Vokabeln nicht nur mit Hilfe von PC zu überprüfen.

Das Sprachlerninstitut hat somit um eine Entwicklung/Erstellung eines Vokabelüberprüfungsprogrammes angeordnet. Es soll ein Programm entwickelt werden, dass nicht nur auf PC sondern sowohl auch auf Smartphones einsatzbar ist, um auch zu Zeiten wo kein Computer zur Verfügung steht, Vokabeln lernen zu können. Das Vokabelprüfprogramm dient als Ergänzung zum Präsenzunterricht in den Kursräumlichkeiten des Language4everyone Instituts.

### 2.1.1 Beschreibung des Problembereiches
Das benötigte Vokabelüberprüfungsprogramm soll die Studenten, Schüler und Kunden des Sprachlerninsitutes Language4everyone Linz unterstützen und den Lernprozess digitalisieren, um nicht von einen PC abhängig zu sein, die Vokablen zu lernen.

### 2.1.2 Glossar
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.1.3 Modell des Problembereiches
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.1.4 Beschreibung des Geschäftsfeldes
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.1.5 Beschreibung der Geschäftsprozesse
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.2
#### Zeitlich

Bis zum Beginn des Studienjahres 2018/2019 soll das Vokabelüberprüfungsprogramm in den Echtbetrieb übernommen werden, obwohl das Projekt ausgenommen von den spezifischen Einrichtungen für das Studienjahr 2018/2019 schon Ende Juni 2018 fertigzustellen ist.
#### Ergebnis
Es soll eine vokabelüberprüfende Web-Anwendung über die sich neue Vokabeln in einem modernen und übersichtlichen Format erlernen lassen entstehen.
Der Notendurchschnitt der Kunden des Sprachlerninstitutes soll sich von 4 auf mindestens 3 oder mehr erhöhen.

## 3 Funktionale Anforderungen
Mit der Software soll es möglich sein vorgegebene Lernabschnitte, so genannte Units, lernen zu können, um dann die dazugehörigen Prüfungen positiv abschließen zu können. Dabei soll der Benutzer auf seine Ergebnisse in Form von Statistiken haben.

### 3.1 Use Case Diagramm

<img src="Images\Use_Case.jpeg" alt="Drawing" style="width: 800px;"/>

## Charakterisierende Informationen
Units durchführen:

Der Benutzer soll eine bestimmte Unit auswählen und diese dann durchführen können. Dabei soll während der Unit ein Timer angezeigt werden, genauso wie die derzeitige Fehleranzahl. Wird ein Wort falsch eingegeben, soll die richtige Lösung sofort angezeigt werden, nachdem der Anwender auf "weiter" gedrückt hat. Am Schluss sollen dem Benutzer noch die Ergebnisse angezeigt werden (Zeit, Fehleranzahl,...)

Prüfung durchführen: 

Ähnlicher Ablauf wie bei "Units durchführen".
Auch hier sollen dem Benutzer während der Prüfung die Zeit angezeigt werden, jedoch hier nicht die derzeitige Fehleranzahl und die richtige Lösung bei einer falschen Eingabe. Erst zum Schluss sieht der Anwender seine Fehleranzahl und ob er die Prüfung bestanden hat oder nicht. Außerdem soll es dem Benutzer nun möglich sein seine Falscheingaben und die richtigen Lösungen anzusehen.

Statistiken anzeigen:

Hier soll sich Benutzer anschauen können welche Units er schon geübt hat, welche Prüfungen er absolviert hat (welche positiv, welche negativ), wie seine durchschnittliche Fehlerquote insgesamt und pro Unit/Prüfung aussieht und wie lange er pro Tag übt. 

## GUI für den Aufruf der Use Cases

### Main Page

<img src="Images\GUI_MainPage.jpeg" alt="Drawing" style="width: 800px;"/>

### Vokabel-Prüfung

<img src="Images\GUI_Pruefung.jpeg" alt="Drawing" style="width: 800px;"/>

### Statistik

<img src="Images\GUI_STatistik.jpeg" alt="Drawing" style="width: 800px;"/>

## Beschreibung des allgemeinen Ablaufes
### Aktivitätsdiagramm
<img src="Images\Aktivitaetsdiagramm_allgemeiner_Ablauf.jpeg" alt="Drawing" style="width: 800px;"/>


## 4 Nicht-funktionale Anforderungen
#### Use: Benutzbarkeitsanforderung
Die Software soll ein modernes Design erhalten, dass die Benutzer (Schüler, Studenten) anspricht. Es soll einfach und übersichtlich aufgebaut sein, um den Anwender durch unnötige Komplexität nicht zum Verzweifeln zu bringen.
#### Effizienz: Effizienzanforderung
Es soll durch Komprimieren von Bildern und Optimieren der Software die Ladezeit auf ein Minimum veringert werden (max. 0,5 Sekunden).

#### Sicher: Sicherheitsanforderung

Es soll möglich sein Accounts anzulegen, um seine Ergebnisse zu speichern. Diese sollen durch Passwörter geschützt werden. Es sollen außerdem Maßnahmen getroffen werden, um Datenverlust bei einem Absturz oder bei anderen Komplikationen vermieden werden (Durch beispielsweise Backups, die automatisch geladen werden und immer wieder aktualisiert werden.).

## 5 Mengengerüst
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 6 Risikoakzeptanz
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 7 Lebenszyklusanalyse und Gesamtsystemarchitektur
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 8 Schnittstellenübersicht
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 9 Lieferumfang
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 10 Abnahmekriterien
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 11 Anforderungsverfolgung zu den Anforderungen (Lastenheft)
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 12 Abkürzungsverzeichnis
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 13 Literaturverzeichnis
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)
## 14 Abbildungsverzeichnis
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)
