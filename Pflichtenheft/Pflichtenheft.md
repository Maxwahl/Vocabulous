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
| 	  09.12.2017| Lieferumfang, Abnahmekriterien, Mengengerüst          | Änderungen laut Feedback eingebaut             |       Konstantin Urbanides|
| 	  12.12.2017| Use Case Diagramm, Aktivitätsdiagramm            |Änderungen laut Feedback eingebaut             |       David Hiebl|

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
* 11 Änderungsverfolgung zu den Anfordernungen (Lastenheft)
* 12 Abkürzungsverzeichnis
* 13 Literaturverzeichnis
* 14 Abbildungsverzeichnis




## 1 Motivation
Wir sehen dieses Projekt als Vorbereitung für zukünftige Projekte, um die Aufgaben und den Ablauf eines Projektes kennenzulernen, sowie auch die verschiedenen Problembereiche eines Projektes zu identifizieren und diese auch vorbeugend zu behandeln. Projekte/Aufgaben in Gruppen zu erledigen ist in der IT-Branche sehr wichtig, da heutzutage viele Projekte, vorallem in der IT-Branche, in Gruppen erledigt werden. Deshalb sehen wir dieses Projekt als Chance die gelernte Theorie in die Praxis umzusetzen und unsere Fähigkeiten in der Projektentwicklung zu verbessern.

## 2 Ausgangssituation und Zielsetzung
## 2.1 Ausgangssituation und Projektbegründung
---
In den vergangenen Jahren gingen beim Sprachlerninstitut Language4everyone Linz immer wieder Fragen aufgrund eines mobilen Assistenzprogrammes ein, um auch Vokabeln nicht nur mithilfe eines PC zu überprüfen.

Das Sprachlerninstitut hat somit eine Entwicklung/Erstellung eines Vokabelüberprüfungsprogrammes angeordnet. Es ist ein Programm zu entwickeln, dass nicht nur auf PC sondern auch auf Smartphones einsetzbar ist, um auch in Zeiten, wo kein Computer zur Verfügung steht, Vokabeln lernen zu können. Das Vokabelprüfprogramm dient als Ergänzung zum Präsenzunterricht in den Kursräumlichkeiten des Language4everyone Instituts.

### 2.1.1 Beschreibung des Problembereiches
Das benötigte Vokabelüberprüfungsprogramm wird die Studenten, Schüler und Kunden des Sprachlerninsitutes Language4everyone Linz unterstützen und den Lernprozess digitalisieren, um nicht von einem PC abhängig zu sein, die Vokabeln zu lernen.

### 2.1.2 Glossar
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.1.3 Modell des Problembereiches
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.1.4 Beschreibung des Geschäftsfeldes
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.1.5 Beschreibung der Geschäftsprozesse
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

### 2.2 Zielbestimmung
#### Zeitlich

Ab Beginn des Studienjahres 2018/2019 wird das Vokabelüberprüfungsprogramm im Echtbetrieb eingesetzt werden, obwohl das Projekt ausgenommen von den spezifischen Einrichtungen für das Studienjahr 2018/2019 schon Ende Juni 2018 fertigzustellen ist.
#### Ergebnis
Es wird eine Web-Anwendung entstehen, über die sich neue Vokabeln in einem modernen und übersichtlichen Format erlernen lassen, entstehen.
Der Notendurchschnitt der Kunden des Sprachlerninstitutes soll sich von 4 auf mindestens 3 oder mehr verbessern.

## 3 Funktionale Anforderungen
Die Software lässt den Benutzer vorgegebene Lernabschnitte, so genannte Units, lernen, um dann die dazugehörigen Selbstkontrollen positiv abschließen zu können. Dabei kann der Benutzer auf seine Ergebnisse in Form von Statistiken zugreifen.

### 3.1 Use Case Diagramm

<img src="Images\UseCaseDiagram.png" alt="Drawing" style="width: 500px;"/>

## Charakterisierende Informationen
Units üben:

Der Benutzer wählt eine bestimmte Unit aus und übt diese. Während des Übens wird ein Timer angezeigt, genauso wie die derzeitige Fehleranzahl. Wird ein Wort falsch eingegeben, wird die richtige Lösung sofort angezeigt, nachdem der Anwender auf "weiter" gedrückt hat. Als Abschluss kann der Benutzer noch seine Ergebnisse einsehen (Zeit, Fehleranzahl,...).

Selbstkontrolle durchführen: 

Ähnlicher Ablauf wie bei "Units durchführen".
Auch hier wird dem Benutzer während der Selbstkontrolle die Zeit angezeigt werden, jedoch nicht die derzeitige Fehleranzahl und die richtige Lösung bei einer falschen Eingabe. Erst zum Schluss sieht der Anwender seine Fehleranzahl und ob er die Selbstrkontrolle bestanden hat oder nicht. Außerdem darf der Benutzer nun seine Falscheingaben und die richtigen Lösungen einsehen.

Statistiken anzeigen:

Hier wird dem Benutzer angezeigt, welche Units er schon geübt hat, welche Selbstkontrollen er absolviert hat (welche positiv, welche negativ), wie seine durchschnittliche Fehlerquote insgesamt und pro Unit/Selbstkontrolle aussieht und wie lange er pro Tag übt. 

## GUI für den Aufruf der Use Cases

### Main Page

<img src="Images\GUI-MainWindow.png" alt="Drawing" style="width: 500px;"/>

### Vokabel-Prüfung

<img src="Images\GUI_Pruefung.jpeg" alt="Drawing" style="width: 800px;"/>

### Statistik

<img src="Images\GUI_Statistik.jpeg" alt="Drawing" style="width: 800px;"/>

## Beschreibung des allgemeinen Ablaufes
### Aktivitätsdiagramm
<img src="Images\Aktivitaetsdiagramm.png" alt="Drawing" style="width: 500px;"/>


## 4 Nicht-funktionale Anforderungen
#### Use: Benutzbarkeitsanforderung
Die Software erhält ein modernes Design, dass die Benutzer (Schüler, Studenten) anspricht. Es ist einfach und übersichtlich aufgebaut, um den Anwender durch unnötige Komplexität nicht zum Verzweifeln zu bringen.
#### Effizienz: Effizienzanforderung
Es wird durch Komprimieren von Bildern und Optimieren der Software die Ladezeit auf ein Minimum veringert(max. 0,5 Sekunden).

#### Sicher: Sicherheitsanforderung

Es muss ein Account angelegt werden, um seine Ergebnisse zu speichern. Es sollen außerdem Maßnahmen getroffen werden, um Datenverlust bei einem Absturz oder bei anderen Komplikationen vermieden werden (Durch beispielsweise Backups, die automatisch geladen werden und immer wieder aktualisiert werden.).

## 5 Mengengerüst
| Gesamtanzahl der Nutzer | 1000 Personen |
| ----------------------- |:-------------:|
| Anzahl der gleichzeitigen Nutzer | 250 Personen |

## 6 Risikoakzeptanz
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 7 Lebenszyklusanalyse und Gesamtsystemarchitektur
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 8 Schnittstellenübersicht
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 9 Lieferumfang
Benutzerhandbuch inkl. Anmeldedaten für die Kunden und Studenten.

## 10 Abnahmekriterien
Vollfunktionstüchtiges Programm, welches sofort in den Echtzeitbetrieb übernommen werden kann.

## 11 Anforderungsverfolgung zu den Anforderungen (Lastenheft)
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 12 Abkürzungsverzeichnis
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)

## 13 Literaturverzeichnis
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)
## 14 Abbildungsverzeichnis
In Arbeit (Die im Unterricht durchbesprochenen und zur Zeit relevanten Punkte wurden umgesetzt.)
