# Pflichtenheft



| Projektbezeichnung | Vocabulous 	 		|
|------------------- |:-------------------: |
| Projektleiter		 | Urbanides Konstantin |
| Erstellt am 		 | 19.11.2017		    |
| Zuletzt geändert	 | 16.04.2018			|
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
| 	  02.02.2018| Nicht-funktionale Anforderungen, Abbildungsverzeichnis            |Änderungen laut Feedback eingebaut             |       David Hiebl|
| 	  07.02.2018| Aufgabenstellung hinzugefügt            |generelle Überarbeitung             |       Konstantin Urbanides|

## Inhalt

*  1 Motivation
* 2	Ausgangssituation und Zielsetzung
    * 2.1 Ausgangssituation
    * 2.1.1 Beschreibung des Problembereiches
    * 2.1.2 Modell des Problembereiches
    * 2.2 Zielbestimmung
* 3 Aufgabenstellung
* 4 Funktionale Anforderungen
    * 4.1 Use Case Diagramm
* 5 Nicht-funktionale Anforderungen
* 6 Mengengerüst
* 7 Lieferumfang
* 8 Abnahmekriterien
* 9 Abbildungsverzeichnis




## 1 Motivation
Wir sehen dieses Projekt als Vorbereitung für zukünftige Projekte, um die Aufgaben und den Ablauf eines Projektes kennenzulernen, sowie auch die verschiedenen Problembereiche eines Projektes zu identifizieren und diese auch vorbeugend zu behandeln. Projekte/Aufgaben in Gruppen zu erledigen ist in der IT-Branche sehr wichtig, da heutzutage viele Projekte, vorallem in der IT-Branche, in Gruppen erledigt werden. Deshalb sehen wir dieses Projekt als Chance, um die gelernte Theorie in die Praxis umzusetzen und unsere Fähigkeiten in der Projektentwicklung zu verbessern.

## 2 Ausgangssituation und Zielsetzung
## 2.1 Ausgangssituation und Projektbegründung
In den vergangenen Jahren gingen beim Sprachlerninstitut Language4everyone Linz immer wieder Fragen aufgrund eines mobilen Assistenzprogrammes ein, um Vokabeln nicht nur mit Hilfe eines PC überprüfen zu können. Derzeit haben die Studenten, Schüler und Kunden des Sprachlerninstitutes Language4everyone Linz nur die Möglichkeit die Vokabeln mit den in den Kursräumlichkeiten befindlichen PCs zu lernen.

### 2.1.1 Beschreibung des Problembereiches
Das benötigte Vokabelüberprüfungsprogramm wird die Studenten, Schüler und Kunden des Sprachlerninstitutes Language4everyone Linz unterstützen und den Lernprozess digitalisieren, um beim Vokabel lernen nicht von einem PC abhängig sein zu müssen.

### 2.1.2 Modell des Problembereiches
<img src="Images\ERD.png" alt="Drawing" style="width: 500px;"/>

### 2.2 Zielbestimmung
#### Zeitlich

Ab Beginn des Studienjahres 2018/2019 wird das Vokabelüberprüfungsprogramm im Echtbetrieb eingesetzt werden, obwohl das Projekt ausgenommen von den spezifischen Einrichtungen für das Studienjahr 2018/2019 schon Ende Juni 2018 fertigzustellen ist.
#### Ergebnis
Mit Hilfe dieser Anwendung soll der Lernprozess der Studenten, Schüler und Kunden vereinfacht werden und eine Verbesserung der Noten ermöglichen.

## 3 Aufgabenstellung
Das Sprachlerninstitut hat somit eine Entwicklung/Erstellung eines Vokabelüberprüfungsprogrammes angeordnet. Es ist ein Programm zu entwickeln, dass nicht nur auf PCs sondern auch auf Smartphones einsetzbar ist, um auch in Zeiten, wo kein Computer zur Verfügung steht, Vokabeln lernen zu können. Das Vokabelprüfprogramm dient als Ergänzung zum Präsenzunterricht in den Kursräumlichkeiten des Language4everyone Institutes.

## 4 Funktionale Anforderungen
Der Benutzer kann mit dieser Software vorgegebene Lernabschnitte, sogenannte Units lernen. Um den Lernfortschritt zu überprüfen, können Selbstkontrollen in Form von kleinen Wiederholungen durchgeführt werden. Zur besseren Übersicht werden die Fortschritte mit Hilfe von Diagrammen und Statistiken angezeigt.

#### Flexibilität

Die Software kann auf Notebooks, Tablets und Smartphones verwendet werden, dies macht das System transportabel und flexibel.

## 4.1 Use Case Diagramm
<img src="Images\UseCaseDiagram.png" alt="Drawing" style="width: 500px;"/>

## Charakterisierende Informationen
#### Units üben:

Der Benutzer wählt eine bestimmte Unit aus und kann diese beliebig oft wiederholen. Während des Übungsdurchlaufes wird die benötigte Zeit mit Hilfe eines Timer angezeigt, ebenso wie die aktuelle Fehlerquote. Falls ein Wort falsch eingegeben wurde, wird die richtige Lösung, nachdem der Anwender den "Weiter"-Button gedrückt hat, sofort angezeigt. Am Ende jedes Übungsdurchlaufes werden die erzielten Ergebnisse dargestellt (benötigte Zeit, Fehlerquote, ...).

#### Selbstkontrolle durchführen: 

Ähnlicher Ablauf wie bei "Units durchführen".
Auch hier wird während des Übungsdurchlaufes die benötigte Zeit mit Hilfe eines Timer angezeigt, jedoch werden falsch eingegebene Vokabeln nicht gekennzeichnet und die Fehlerquote wird nicht angezeigt. Erst zum Schluss werden die Fehlerquote und die negative/positive Absolvierung der Selbstkontrolle dem Anwender angezeigt. Außerdem darf der Benutzer nun die richtigen Lösungen für seine Falscheingaben einsehen.

#### Statistiken anzeigen:

Mit Hilfe der Statistiken werden die Ergebnisse übersichtlich dargestellt. Es wird dem Benutzer zum Beispiel angezeigt, welche Units er schon geübt hat, welche Selbstkontrollen er bereits absolviert hat (welche positiv, welche negativ). Weiters kann der Benutzer seine durchschnittliche Fehlerquote insgesamt und pro Unit/Selbstkontrolle anzeigen lassen und die Zeit wie lange er durchschnittlich pro Tag übt. 

## GUI für den Aufruf der Use Cases

### Main Page

<img src="Images\GUI-MainWindow.png" alt="Drawing" style="width: 500px;"/>

### Vokabel-Prüfung

<img src="Images\GUI-Vokabelprüfung.png" alt="Drawing" style="width: 500px;"/>

### Statistik

<img src="Images\GUI-Statistiken.png" alt="Drawing" style="width: 500px;"/>

## Beschreibung des allgemeinen Ablaufes
### Aktivitätsdiagramm
<img src="Images\Aktivitaetsdiagramm.png" alt="Drawing" style="width: 500px;"/>


## 5 Nicht-funktionale Anforderungen
#### Benutzbarkeit
Die Software erhält ein modernes Design, dass die Benutzer (Schüler, Studenten) anspricht. Es ist einfach und übersichtlich aufgebaut, um den Anwender durch unnötige Komplexität nicht zum Verzweifeln zu bringen.
#### Effizienz
Es wird durch Komprimieren von Bildern und Optimieren der Software die Ladezeit auf ein Minimum veringert(max. 0,5 Sekunden).

#### Sicherheit

Es muss ein Account angelegt werden, um seine Ergebnisse zu speichern. Es sollen außerdem Maßnahmen getroffen werden, um Datenverlust bei einem Absturz oder bei anderen Komplikationen vermieden werden (Durch beispielsweise Backups, die automatisch geladen werden und immer wieder aktualisiert werden.).

## 6 Mengengerüst
| Gesamtanzahl der Nutzer | 1000 Personen |
| ----------------------- |:-------------:|
| Anzahl der gleichzeitigen Nutzer | 250 Personen |


## 7 Lieferumfang
Benutzerhandbuch inkl. Anmeldedaten für die Kunden und Studenten.

## 8 Abnahmekriterien
Vollfunktionstüchtiges Programm, welches sofort in den Echtzeitbetrieb übernommen werden kann.


## 9 Abbildungsverzeichnis
* [Use Case Diagramm](#31-use-case-diagramm)
* GUI
    * [Main Page](#main-page)
    * [Vokabel-Prüfung](#vokabel-prüfung)
    * [Statistik](#statistik)
* [Aktivitätsdiagramm](#aktivitätsdiagramm)