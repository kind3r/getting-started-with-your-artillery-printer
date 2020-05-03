---
title: "Slicer PC sofware"
---
# Slicer PC sofware

Now that we have a basic understanding of [how a 3D printer works](3d-printer-overview) and what [materials](materials) can be used, let's dig into the brains that controls the 3d printing process: **the slicer**.

**The slicer** is a software that transforms a 3D model into 3D printer instructions known as G-code. Once again, this is no easy feat as the G-code has to describe every single move your printer has to perform, this includes moving the print head on X, Y and sometimes Z while also extruding or retracting filament and/or accelerating to some desired speed, increasing part cooling fan flow, changing bed and extruder temperature etc. All of this happens in the G-code exported by the slicer.

> [What Is a 3D Slicer? – Simply Explained](https://all3dp.com/2/what-is-a-3d-slicer-simply-explained/)

To be able to compute the list of moves required to create your 3D model in real life, the software first slices (hence the name) the model into layers. The height of each layer is defined by your **print settings** also know as **profiles**. Depending on your slicer, it is also possible to have a variable layer height based on various conditions - for now know that this option exists in some software but it's out of the scope of this guide.

After defining the layers **the slicer** analyses each layer and turns it into lines - the print moves. Since you can't really print into thin air, the slicer also needs to make some decisions while comparing the current layer to the previous one to be able to determine how to print a specific section of your model. If a section of your print is not directly above the previous layer the slicer can decide if it needs **supports** for that section, or if it's enough to just start printing on top of the previous layer and slowly move outside creating what are know as **overhangs**, or if it can just link two distant points with a mid air extrusion - **bridging**.

While there are a lot of settings that can be made in the slicer below is an article containg a list of the most 8 important ones, more in detail later:

> [3D Slicer Settings for Beginners – 8 Things You Need to Know](https://pinshape.com/blog/3d-slicer-settings-5-things-you-need-to-know-about-3d-printing-software/)

There are many slicers out there, most of them **open source and free**, each using it's own algorithms to produce the set of printing instructions and each having pros and cons. Whichever one you choose is up to you. 

## Prusa Slicer 2.2.0

I started with [Prusa Slicer](https://github.com/prusa3d/PrusaSlicer/releases) which has a **very good organisation of the printing settings** split by printer, material and print profiles, detailed explanation for all the settings and good defaults to get you started. It was a good learning tool as it was very easy for me to understand what each setting did and I was able to experiment with most of them to see how they affect the printing. Unfortunately, as time passed I realized that using the same settings on the same model did not always produce the same slicing result, which I found a bit confusing.

## Simplify 3D 4.1

So after a couple of month of trying different materials, models and settings I thought to myself *why not experiment with other software*. And so I purchased a copy of [Simplify 3D](https://www.simplify3d.com/) which turned out to be quite a bust for me. While it printed fine, I felt like I had no control over the print settings as everything was bulked into one profile, so having to setup 10s of profiles for each material and print mode I needed for it instead of having multiple material profiles and multiple print profiles and just combine them was a big no-no for me. Also, the lack of pugins and OctoPrint connection were also big minuses. So I had to ask for a refund.

## Ultimaker Cura 4.6

The third slicer I tried and I'm curently very happy with is [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura). It is probably the most hip slicer out there and for very good reasons. It is very friendly and easy to use, it uses a similar split of profiles between **machine settings**, **filament settings** and **print settings**, and best of all it has an integrated [marketplace](https://marketplace.ultimaker.com/app/cura/plugins) from which you can **install plugins** and **download filament settings**. The [OctoPrint connection](https://marketplace.ultimaker.com/app/cura/plugins/fieldofview/OctoPrintPlugin) plugin provides a very nice integration, you can directly send your print to your PI and also control your printer and view the webcam if available, all straigth from **Cura** without the need to have OptoPrint web UI open in a browser. It also features a very interesting [tree support](https://support.ultimaker.com/hc/en-us/articles/360012614559-Experimental) (still experimental) that offer a lot of advantages versus the traditional support methods used in other slicers. The only thing I don't like so far about **Cura** is the movement in 3D view, I'm using a touchpad and it's dificult to control.

## Other slicers

Once you get your printer up and running and you get familiar with your first slicer, don't be afraid to experiment with other software as well. Don't let the fact that *there is no preset profile for my printer* stop you because once you understand the settings, you will know which ones are important for your printer and you will be able to setup a new slicer in no time, just like I did when switching from **Prusa Slicer** to **Cura**. You might find out that one slicer is better for a specific type of model while not good for others and viceversa.

Here is a list of some of the other popular free slicers:
- [Repetier-Host](https://www.repetier.com/)
- [ideaMaker](https://www.raise3d.com/ideamaker/)
- [MakerBot Print](https://www.makerbot.com/3d-printers/apps/makerbot-print/)

> A more comprehensive list: [2020 Best 3D Printer Slicer Software](https://all3dp.com/1/best-3d-slicer-software-3d-printer/)

## Overview of slicer settings

Most slicers have their settings split into 3 sets of profiles:
- **Machine** - 3D printer specific settings such as bed size, acceleration, jerk and speed limits, number of extruders, nozzle size etc.
- **Material** - Material specific settings such as printing temperature, bed temperature, flow rate etc.
- **Print** - Main settings like printing speed, acceleration and jerk, layer height, infill percentage, supports etc.



**Next step**: [First things to do after unpacking your printer](setup)

All topics:
{% include_relative _toc.md %}