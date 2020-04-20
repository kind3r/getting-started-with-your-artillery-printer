# Getting started with your Artillery 3D printer

This guide is aimed at new people looking to get into 3D printing and is a collection of articles and videos that helped me getting starting. It is mostly aimed at setting up your new Artillery 3D printer, be it the Genius or Sidewinder X1 but the same principles apply to most cartesian 3D printers. Inspiration came from the repeating questions in the [Artillery Genius facebook group](https://www.facebook.com/groups/artillerygenius/), people seem to have the same issues and ask the same questions mostly due to the fact that they don't understand the process of 3D printing in general, have not read the basics, or did not check/calibrate their printers.

So, let's get started !

## Understanding 3D printing

There are multiple types of 3D printing techniques, but we are focusing on the most popular and afordable one: [fused filament fabrication (FFF) or fused deposition modeling (FDM)](https://en.wikipedia.org/wiki/Fused_filament_fabrication).

> A 3D printer essentially works by extruding molten plastic through a tiny nozzle that it moves around precisely under computer control. It prints one layer, waits for it to dry, and then prints the next layer on top.  
> *Full article: [3D printers](https://www.explainthatstuff.com/how-3d-printers-work.html)*

Sounds easy, right ? Except it's not, as we don't live in an ideal world. There are a lot of factors that influence 3D printing starting from the quality and precision of the 3D printer itself, type and brand of material you're printing, bed surface, room temperature and humidity, slicer settings etc. But don't worry, advances over the past years have improved material printability and also printer parts got cheaper and so did the printers themselfs.

The 3 main components of a 3D printing environement are:
1. Slicer PC software
2. 3D printer
3. Filament or material used to print

### Slicer PC sofware

The slicer is a software that transforms a 3D model into 3D printer instructions known as G-code. Once again, this is no easy feat as the G-code has to describe every single move your printer has to perform, this includes moving the print head on X, Y and sometimes Z while also extruding or retracting filament and/or accelerating to some desired speed, increasing part cooling fan flow, changing bed and extruder temperature etc. All of this happens in the G-code exported by the slicer.

