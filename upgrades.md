---
title: Upgrades for your Artillery printer
updated: 08-05-2020
---

# Upgrades for your Artillery printer

Now that you got your printer up and running and spitting out [calicats](https://www.thingiverse.com/thing:1545913) like there's no tomorrow, you might be inclined to do a **firmware upgrade** to get the latest and greatest. Unfortunately Artillery only provides one firmware based on [Marlin](https://marlinfw.org/) 1.1.9 which is the latest version of [Marlin](https://marlinfw.org/) 1.x released in August 2018. There is a good reason for that which we will discuss a bit later, but for now **don't do any changes to the firmware**.

**You should run your printer for a couple of weeks to make sure it works fine in the default configuration. Play with the [slicer](slicer) settings, experiment with different materials, see what works and what doesn't and try to understand why.** Then feel free to start modding and upgrading.

## A few 3D printed parts

As mentioned in the [setup procedure](setup#your-first-useful-prints), print a [bed cable strain relief](https://www.thingiverse.com/thing:4056229), [flat ribbon strain relief](https://www.thingiverse.com/thing:3998458) and a [dust filter](https://www.thingiverse.com/thing:190118). Very handy and easy to install upgrades that will save you a lot of trouble in the long run.

## A better nozzle

One thing that might give you a bit of a headache in the begining could be the nozzle that came installed in the printer. Leaving asside the fact that it's a low quality nozzle and it will wear out over time, mine was already partially clogged from the factory. I spent about 4 days trying to tune my slicer settings and the presure of the extruder idler lever until I decided to replace it with the spare provided with the printer. After that everything magicaly worked like it should have from the begining.

So do yourself a favor and order some [good quality nozzles](3d-printer-overview#the-nozzle) to have handy. But don't go for the steel nozzles just yet as their main purpose is printing abrasive materials which you will not be doing any time soon.

## A new fan shroud

One thing that can influence the quality of your prints is the cooling. The **default fan shroud** is fine in most situations but it does have a small flow derived from the fact that it blows all the air from one direction. This will create more stringing on the back of your print when using materials such as PETG that loves to string. Replacing it with a fan that distributes the air flow from 2 directions will help reduce this stringing issue and improve the cooling of your part during the printing process.

I am still experimenting with different shroud designs but I still have not found a perfect one so I can't really make a recommendation here. But feel free to experiment with the designs you find on thingiverse and see what works for you. Just keep in mind that since the shroud will be close to the nozzle you have to print it in [PETG](materials#petg) or better yet [ABS or ASA](materials#abs-asa). 

> A good comparison between different shroud models can be found in the video [What is the BEST fan for your Sidewinder X1 3d printer?](https://youtu.be/27MnEC7ejzs). Some of them require a different fan tho.

## Auto bed leveling

There is some controversy regarding the benefit of adding a bed probe like the [BLTouch](https://www.antclabs.com/bltouch) or clones. The bed on the **Genius** is rather small and leveling it is easy enough so that it does not really require a leveling probe. On the **Sidewinder** on the other hand it makes more sense as the bed is biger. It also makes sense to add one if you are using different printing surfaces like magnetic PEI sheets on top of your bed and keep swapping between them.

Adding a bed probe unfortunately is not a straight forward process and requires a firmware update for both the mainboard and the TFT.

> **Steve Wagg** has an excelent tutorial on installing [BLTouch - Waggster Mod on a Artillery Sidewinder X1 3D Printer](https://youtu.be/ynm8inRMVkE). The **Genius** already has a plug on the extruder (behind the blue cover) so you don't have to reuse the LED pins. You should watch his video a few times before getting started to make sure you understand the whole process.

## OctoPrint

*Has the process of moving SDCards from your computer to the printer and viceversa tired you out ?* 

Fear not, there is a much better way of doing things! Get yourself a [Raspberry PI](https://www.raspberrypi.org/) and install [OctoPrint](https://octoprint.org/). Both **Prusa Slicer** and **Ultimaker Cura** can connect remotely to the **OctoPrint** server and be used for printing. The **Cura** plugin even allows you to monitor the webcam (if you have one on your PI) and control your printer.

The only downside is that you won't get any feedback on the TFT while using OctoPrint, except for the nozzle and bed temperatures. This means no print time, no pause and no way to abort the print from the TFT in case something goes wrong.

As there is a lot of empty space inside the base of the printer, I have installed my PI next to the vents on the left side, behind the TFT. This way the PI is in the way of the airflow cooling the printer and it does not go over 50C even without a radiator.

## And all metal heatbreak

Changing the default [PTFE lined heatbreak with an all metal one](3d-printer-overview#the-heatbreak) will allow you to use extruder temperatures above the 250C recomended for the one that comes with the printer. This will grant access to printing more specialized materials but could create issues for the more basic ones like PLA. In my experience of about 6 weeks since I upgraded to an all metal heatbreak I did not experiece such issues but I guess it's too early to tell.

## Build an enclosure

One way to make your printer blend in your living room is by [building an enclosure](https://photos.app.goo.gl/pB1xUda8z3scRGzd9). This will also prevent draft from ruining your prints and protect the printer from dust. 

I built myself an adapted version of the [Original Prusa i3 MK3 ENCLOSURE - Ikea Lack table](https://www.thingiverse.com/thing:2864118) with modified top supports to which I **added 60mm** in height to match the height of the **Genius**. Of course the plexiglass panels are now **500mm** in height instead of the 440 specified in the guide. The Lack tables are cheap but also hallow inside so I had to add some 3D printed L shaped brackets to all the legs for more stability. Contrary to other beliefs, there is no need for extra cooling of the printer's electronics as the temperature inside does not go over 40C which is fine as most components start having issues only above 50C.

## Upgrade your firmware

As mentioned in the [3d printer overview](3d-printer-overview) there are 2 components (the mainboard and the TFT) that work independently and have separate firmwares and only communicate with each other via a serial port which is also shared with the external USB of the mainboard. **This shared serial port design unfortunately blocks the USB firmware upgrade process for the mainboard**. 

In order to update your mainboad's firmware you need to open the printer and disconnect your TFT from the mainboard by unpluging it's ribbon cable at one of the ends (whichever one has less glue on it). After that you connect your printer to a PC and use **Prusa Slicer** to upload the .hex firmware to the mainboard.

The TFT can be updated via a SD Card (16Gb or less), so it's a bit easier. 

**Do not upgrade your firmware until your machine is fully functional using the firmware it came with**. Upgrading the firmware will not solve your problems with the machine (if you have any).

### Reasons to upgrade your firmware

Main reason you want to upgrade your firmware are the new features. While there are not many radical improvements from the stock firmware there are a few quality of life ones.

- **Save to EEPROM** - gives you the ability to persist your settings across printer reboots. This includes your E-steps, PID tunning, max speed and acceleration, default acceleration and jerk so that you don't have to include those settings in your slicer each and every time, especially when changing from one slicer to another.
- **Babystepping** - enables real-time movement of the axes by tiny increments without changing the current position value. This is useful during the first layer to adjust for a slightly missaligned bed leveling
- **Linear advance** - gives you the posibility to reduce the extrusion just before changing directions while printing. Because of inertia, the extruder cannot change directions and speed instantenously, it needs to slow down and accelerate again. This is especially obvious on sharp edges where the printer has to change direction by 90 degrees or more. Because the extrusion is constant, this slowdown followed by acceleration leaves a bit more material than it's supposed to be on and around that sharp edge. Read more about [linear advance](https://marlinfw.org/docs/features/lin_advance.html).
- **Auto Bed Level** via [BLTouch](https://www.antclabs.com/bltouch) or other bed probes.
- **Mesh Bed Leveling** - for manually creating a mesh used to compensate for uneven beds, in case you don't want to install a probe.

### Firmware options

As explained in the [3D printer overview](3d-printer-overview#marlin-firmware), Artillery printers run on **Marlin 1.x** firmware (1.1.9 to be more precise). Because the printers use an 8bit board there is no real advantage to using **Marlin 2.x** as all the features the board can handle are implemented in the 1.x version.

> Great article explaining why Marlin 1.x is enough for our printers: [Artillery X1 and Genius: Why Haven't I Done a Marlin 2.x.x Firmware yet? ABL Sensors?](https://3d-nexus.com/newsroom/news-announcements-m/artillery-x1-and-genius-why-havent-i-done-a-marlin-2-x-x-firmware-yet)

Here are several firmware available, all based on **Marlin**. Most of them include an instalation guide and also a TFT firmware companion. I will try to keep this list as up-to-date as possible, but it's better check on each site what each firmware has to offer.

[3D-Nexus (3DN) Printer firmware for Sidewinder X1 and Genius](https://3d-nexus.com/resources/file-archives/category/5-printer-firmware)
- Marlin 1.1.9
- Save to EEPROM
- Linear advance
- Babystepping
- Mesh Bed Leveling

[3dprintbeginner Artillery Sidewinder Firmware](https://3dprintbeginner.com/sidewinder-x1-firmware/)  
[3dprintbeginner Artillery Genius Firmware](https://3dprintbeginner.com/artillery-genius-firmware/)  
- Marin 2.0.5.3
- Save to EEPROM
- Linear advance
- Babystepping
- S-Curve Acceleration, Adaptive Step Smoothing and Quick Home

[Waggster Firmware for Artillery Sidewinder](https://pretendprusa.co.uk/index.php?topic=30.0)  
[Waggster Firmware for Artillery Genius](https://pretendprusa.co.uk/index.php?action=downloads;cat=8)  
- Marlin 2.0.2
- Save to EEPROM
- Linear advance
- Babystepping
- Bilinear Auto Bed Level for BLTouch (or compatible) probes

[Firmware that I use for my Artillery Genius](https://github.com/kind3r/genius-firmware/releases) (more or less same as Waggster but on Marlin 1.x and with my own personal tweaks)
- Marlin 1.1.9 (from Artillery)
- Save to EEPROM
- Linear advance
- Babystepping
- Bilinear Auto Bed Level for BLTouch (or compatible) probes
- Lower max speeds, acceleration and jerk
- Lower default acceleration
- You can use the TFT firmware from Waggster's version

[Original Artillery Sidewinder Firmware (source code only)](https://github.com/artillery3d/sidewinder-x1-firmware)
[Original Artillery Genius Firmware (source code only)](https://github.com/artillery3d/genius-firmware)
- The default firmware of the printer

## Other resources

> A list of upgrades and replacement parts can be found on 3D Nexus' article [Artillery 3D Printers, Parts, Upgrades And Mods](https://3d-nexus.com/newsroom/fdm-printing/artillery-3d-printers-parts-upgrades-and-mods?fbclid=IwAR15y_IgitSDFj-ReUOPp1ZuJ7GZBjObifABdUXcDEhpicH2ia6ILlEDWO8)

> 3dprintbeginner's pick at his favourite upgrades [Sidewinder X1 Upgrades – Paid and Free](https://3dprintbeginner.com/sidewinder-x1-upgrades/)

### Original part suppliers

> International: [https://www.happy3dthai-artillery.com/](https://www.happy3dthai-artillery.com/)

> Europe: [https://3dprinterdele.dk/](https://3dprinterdele.dk/)

### More learning resources

**Youtube channels**:
> [Maker's Muse](https://www.youtube.com/channel/UCxQbYGpbdrh-b2ND-AfIybg)

> [Thomas Sanladerer](https://www.youtube.com/channel/UCb8Rde3uRL1ohROUVg46h1A)

> [CNC Kitchen](https://www.youtube.com/channel/UCiczXOhGpvoQGhOL16EZiTg)

> [Hobby Hoarder](https://www.youtube.com/channel/UCJzj8WPo-qOnIK1UHEiLRKQ)

**Websites**:
> [3dprintbeginner](https://3dprintbeginner.com/)

> [All3DP](https://all3dp.com/)

> [Simplify 3D - Print Quality Troubleshooting Guide](https://www.simplify3d.com/support/print-quality-troubleshooting/)

> [3D Beginners](https://www.3dbeginners.com/)

> [Let's Print 3D](https://letsprint3d.net/)


**Next step**: [Troubleshooting common issues and how to fix them](troubleshooting)

All topics:
{% include_relative _toc.md %}