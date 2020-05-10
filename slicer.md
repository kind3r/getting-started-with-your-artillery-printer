---
title: "Slicer PC sofware"
updated: 06-05-2020
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

> Excelent tutorial about Ultimaker Cura: [2020 Cura Tutorial: Master Cura Slicer Software Settings](https://all3dp.com/1/cura-tutorial-software-slicer-cura-3d/)

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
- **Material** - Material specific settings such as printing temperature, bed temperature, cooling, flow rate etc.
- **Print** - Main settings like printing speed, acceleration and jerk, layer height, infill percentage, supports etc.

Slicers do a good job explaining what each setting does via tooltips or even via a plugin that provides very detailed explanations in case of **Cura**. So I'm not going to explain the settings themselfs just how they are organized and split between the 3 categories.

### Machine settings

This category applies to the printer itself and it includes things like size of the printing area, number of extruders, if the bed is heated or not, what is the maximum speed and acceleration for X, Y and Z movements, maximum extrusion speed, temperature limits, start and end g-code.

Most of the settings are self explanatory and should be provided by the 3D printer manufacturer, so I will focus a bit on the **start and end g-code**. 

In principle, **before** your print starts you want to perform the following actions:
- Start preheating the nozzle to a standby temperature but don't wait for it to reach that temperature
- Preheat bed and wait for it to reach it's temperature
- Home your machine so that it knows where it's at
- If you have a BLTouch or similar probe perform ABL
- Move to one corner of the bed (I preffer 0/0/0)
- Turn off the LED as it's really anoying
- Preheat nozzle to first layer's printing temperature and wait for it to reach that temperature
- Purge the nozzle (draw 2 lines for the full length of the bed so that material flows corectly when you start your print)

Some of the steps like preheating to specified temperatures are usually also done by the slicer, but in case you have it in your startup g-code the slicer will skip that step and rely on your one g-code for preheating.

At the end of your print you usually want to:
- Retract a bit so that less material oozes
- Move Z a bit higher
- Move the bed forward so you have easy access to your print
- Turn off fans, motors and heating

### Material settings

There are a lot of settings that are material dependent. The main ones are nozzle temperature for printing and first layer (sometimes you need more heat for the first layer to get better adhesion), bed temperature, cooling (maximum fan speed, if the fan needs to always be on, only start the fan after the first X layers etc.), flow rate (some materials have the tendency to under-extrude so you need to increase the flow of material to compensate).

Other material specific settings are related to **retraction** (distance, speed and Z-hop/lift Z). This settings are aimed at preventing stringing and unwanted oozing during your print by quickly pulling the filament from the nozzle at the right time thus creating a negative pressure that will suck the melting filament from the tip of the nozzle. This move is usually acompanied by the Z axis moving up a bit so that the nozzle is pulled away from the print.

**Linear advance** (if your firmware supports it) is another setting that is material dependent.

**Bridging settings** (like the speed, flow and fan speed) are also dependent on the material you print. Bridges are basically air printing lines that link 2 printed parts (or parts of the same print), just like a bridge in real life links to banks of a river for example. Most materials (like PLA) preffer to be printed slower and with cooling at 100%.

Via the [material settings plugin](https://marketplace.ultimaker.com/app/cura/plugins/fieldofview/MaterialSettingsPlugin) **Ultimaker Cura** allows you to add any of the settings to a material profile. For example you can have different retraction distance and speed that best suits the material. **Prusa Slicer** is not so flexible and gives you a hardcoded list of available material settings.

### Print settings

This settings are related to how and what you want to print. You want more detail on your 3D printed model ? Go with smaller layer height, line width and slower speed, use more walls (external perimeters). You want to print faster ? Increase the speed, use a bigger layer height, line width etc.

**Line width** is the width of the line used in prinding your model. You would expect it to be sa same size as your nozzle, but it can also be set wider or narrower. Using a wider **line width** alows you to print faster while using a narrower line width alows for more precision. The difference between the nozzle size and the line width can be set as high as +/- 15% of the nozzle size.

In most slicers you can specify the **number of solid walls/shells** for external, top and bottom of the part. Keep in mind that this is basically the number of lines (or layers) so the thickness of the wall itself is dependent on the line width for external walls and the layer size for top and bottom walls. This is why in **Cura** you can specify how to build walls using their number or by specifying the desired thickness.

> Thou shall not escape the seam !

**The seam** is the place where the printing goes from one layer to another. This usually leaves a mark on your 3D print. You cannot avoid this, but you can hide it between the details of your model. **Seam position** setting alows you to place your seam in a fixed position or let the slicer put it where it thinks it's best. Crossing from one layer to another does not have to happen in the same position from top to bottom of your print so the seam does not have to be in the same place all the time.

**Infill percentage** determines how much of the inside of your 3D printed model needs to be filled with a pattern of your choice. This adds to the strength of your part, but only up to a certain level. Going over 15-20% infill does not provide a real strength advantage but only ads to your print time. You can make your print stronger by adding **solid walls/shells**. There are many infill patterns available, some print faster, some take longer to print, my favourite is gyroid but feel free to experiment.

The **skirt** provides a way to purge your nozzle from partial oozed material during your previous print. I prefer to use a dedicated purge line in my startup g-code as this skirt has the tendency not to stick properly due to the bad initial extrusion which we are trying to avoid anyway, thus it can be dragged along to your main print.

The **brim** provides extends the suroundings of your model's first layer and provides better bed adeshion especially in case the model has small points of contact with the bed.

**Support material** can be generated to be used ... well, to support printing parts of your model that would otherwise be unprintable.


**Next step**: [First things to do after unpacking your printer](setup)

