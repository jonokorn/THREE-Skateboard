Projekt Dokumentation - THREE Skateboard (Jonas Osterkorn)

https://github.com/jonokorn/THREE-Skateboard.git

---

Die App starten : 
1. Git Repo Clonen
2. Falls nicht automatisch geschehen : Auf den master branch wechseln (nicht main)
3. Per terminal in den Root-Ordner navigieren
4. "npm install" um alle dependencies zu installieren
5. "npx vite" um einen Lokalen Server zu starten, im Terminal wird eine lokale URL erscheinen, unter der 
die App aufgerufen werden kann 

--- 

Das Ziel dieses Projektes war, ein möglich realtisches Skateboard in THREE.JS zu bauen. 
Dafür wollte ich von möglichst vielen verschiedenen Techniken und Aspekten, die THREE.js bietet, 
gebrauch machen (Controls, diverse Geometrien, Texturem NormalMapping, Animation etc.) um ein gutes
Verständis von THREE.JS zu bekommen. Im volgenden Text werde ich die wichtigsten Komponenten / Module
der App beschreiben und erklären was mir am schwersten gefallen ist. 

--- 

1. Controls :
Eines der ersten Dinge, die ich der App hinzugefügt habe waren OrbitControls. Diese konnten schnell 
importiert werden und haben die weitere Entwicklung stark vereinfach, da ich mich besser in der Welt 
umsehen konnte und nicht aufeine statische Position der Kamera beschränkt war. 

2. Geometrie :
Als nächstes wollte ich ein Mesh für das Deck (Skateboard-Brett) erzeugen, da dies das wichtigste
Stück des Skateboards ist. Dies hat sich als deutlich schwieriger als erwarter herausgestellt und  
hat mehrere Stunden gedauert. Da ein Skateboard nicht einfach ein flaches Brett ist, sondern ein
sog. "Concave" hat (die typische Form) konnte ich nicht einfach eine BoxGeometry nutzen.
Nach einer Internetrecherche habe ich erst versucht durch einen Algortihmus
die einzelnen Vertices so zu verschieben, dass die typische Kurve im Deck ensteht.
Leider kam ich zu keinen guten Ergebnissen,weshalb ich am Ende doch ein Kombination aus einer
BoxGeometry und zwei Zylindern für das Deck genutzt habe. 

Im Anchluss habe ich direkt die Achsen (Trucks) modelliert aus einer Kombination von verschiedenen 
Geometrien,die THREE.js anbietet (Zylinder, Box, Tube) und auch die Rollen (Wheels) erzeugt.Diese Komponenten
habe ich so miteinander verbunden, dass das Deck quasi das Root-Parent ist, die Achsen jeweils Children vom Deck
und die Rollen wiederum Children der Achsen. 

3. Beleuchtung :
Für die Beleuchtung habe ich mich für eine Kombination von drei DirectionalLights und einem AmbientLight entschieden
und die Position der DirectionalLights so lange verändert, bis sie mit gefallen hat. Für die Positionierung waren die 
Helper ("DirectionalLightHelper") eine große Hilfe, um die Positionen innerhalb der Szene zu sehen. Außerdem hab ich alle 
DirectionalLights so eingestellt, dass sie Schatten werfen, damit meine Szene möglichst realtisch aussieht. 

4. Texturen und NormalMapping :
Mein urspünglicher Plan war es, ein echtes Skateboard-Design als Texture auf die Unterseite des Skateboards zu mappen, 
was sich jedoch als schwierig herausstelle, da mein Skateboard-Deck nicht aus einem einzelnen Mesh, sondern aus der 
Kombination von BoxGeometry und Zylinder bestand und ich nicht wusste, wie ich die Textur sauber anlegen kann. 
Im Endeffekt habe ich eine schöne Holz-Textur gefunden, die ich den Teilen, die das Deck ausmachen, angelegt habe.
Für die Oberseite habe ich eine NormalMap genutzt die das Gripttape (Schleifpapier / Sandpapier) darstellt.
Durch die Option im Mesh-Konstruktor statt einem Material ein Array von Materials (ein Material für jede Seite) durchzugeben, 
war es sehr leicht das Gripttape auf die Oberseite und Holztextur auf alle anderen Seiten des Meshes zu legen.

Für die Achsen habe ich ein normales MeshStandardMaterial genutzt und die Metallness maximiert, dabei die Roughness minimiert
um einen Metall-Look zu erzeugen. Gerne hätte ich eher einen silbernen Metall-Look erzeugt, bei dem sich ggf. auch andere
Objekte in den Achsen spiegel, dies habe ich jedoch nicht so geschafft wie ich es wollte.

Für die Rollen habe ich auch eine NormalMap genutzt, die eine Plastik/Gummi Oberfläche darstellen soll.

Des Weiteren habe ich der Szene eine Textur als Hintergrund gegeben und eine Bodexplatte erzeugt, die eine Beton-Textur hat. 

5. GUI :
Für ein leichteres Debugging und auch um die Szene reaktionsfähig zu machen habe ich mit dem NPM Package dat.gui 
ein GUI erzeugt, wodurch sich die Szene verändern lässt. (Board kann rotiert werden, Bodenplatte verstecken,
alle Helper anzeigen)

6. Animationen :
Zu diesem Punkt bin ich leider nicht mehr gekommen, obwohl es urspünglich das Hauptziel der App war. Mein Plan war es, 
mehrere GUI-Buttons zu haben, auf die man klicken kann und das Skateboard dann echte Tricks performt wie z.B einen Kickflip
(schnelle Drehung um die eigene X-Achse) oder auch komplexere Tricks. Da sich jeder der Tricks durch eine Rotations-Matrix
darstellen lässt, wäre die Drehung an sich kein Problem, allerdings sollte die Rotation ja eine langsamere und fließende
Bewegung sein und nicht innerhalb eines Frames stattfinden. Nach kurzer Recherhce bin ich auf ein Framework
names "Tween" gestoßen, welches wohl oft für Animationen in THREE genutzt wird. Allerdings konnte ich meine 
Animation nicht wie gewünscht erzeugen.