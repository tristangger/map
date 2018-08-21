# [Start Interactive Map]

[interactive map](https://github.com/kplusgithub/interactivemap2/) is a basic example for an interactive map with jquery created by [KPLUSKONZEPT](http://kplus-konzept.de/).

## Getting Started

To begin using this example, download the files and open the index.html

## How does it work?


There are four mainparts:

    1. The area1.html ...area13.html contain the information that gets visible if you click on a field in the interactive map.
    2. The interactive.js file containes the logic of this app. 
        The first part of the code controls the visibilty of the div's thad injects the area[0-9]?[0-9].html files.
        The ID's #area[0-9]?[0-9] links this function so the fields of the map (svg)
    3. The second part of the code in the interactive.js reads a json file that containes atrributes, 
        which controlls the behavior (opacity) of the fields in the svg. it manipulates the css (map-[0-9]?[0-9])attributes (svg)
    4. The Json file containes information about the fields, the first field geht the css class map-0 the second map-1 and so on. 



## Copyright and License

Copyright Kplus Konzept