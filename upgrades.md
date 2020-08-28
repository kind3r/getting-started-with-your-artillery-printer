---
title: Upgrades for your Artillery printer
updated: 26-06-2020
---

Now that you got your printer up and running and spitting out [calicats](https://www.thingiverse.com/thing:1545913) like there's no tomorrow, you might be inclined to do a **firmware upgrade** to get the latest and greatest. Unfortunately Artillery only provides one firmware based on [Marlin](https://marlinfw.org/) 1.1.9 which is the latest version of [Marlin](https://marlinfw.org/) 1.x released in August 2018. There is a good reason for that which we will discuss a bit later, but for now **don't do any upgrades to the firmware**.

**You should run your printer for a couple of weeks to make sure it works fine in the default configuration. Play with the [slicer](slicer.html) settings, experiment with different materials, see what works and what doesn't and try to understand why.** Then feel free to start modding and upgrading.

## Original part suppliers

Should you need out of warranty replacement parts (or just don't want to wait for Artillery to send them to you), here is a list of suppliers of original Artillery Sidewinder and Genius spare parts across the world: 

> **International**:  
> [https://www.happy3dthai-artillery.com/](https://www.happy3dthai-artillery.com/)  

> **US** :  
> [https://fulament.com/](https://fulament.com/)  
> [https://www.alien3d.us/](https://www.alien3d.us/)  

> **Europe**:  
> [https://3dprinterdele.dk/](https://3dprinterdele.dk/)  
> [https://www.printaplenty.co.uk/](https://www.printaplenty.co.uk/)  
> [https://www.3d-dez.de/](https://www.3d-dez.de/) - Artillery distributor Germany  
> [https://3dplady.de/](https://3dplady.de/) - Official Artillery 3D partner for Germany

## Other parts and upgrades

> [https://www.abs-3d.de/](https://www.abs-3d.de/) - Machined aluminium print beds

## A few 3D printed parts

As mentioned in the [setup procedure](setup.html#your-first-useful-prints), print a [bed cable strain relief](https://www.thingiverse.com/thing:4056229), [flat ribbon strain relief](https://www.thingiverse.com/thing:3998458) and a [dust filter](https://www.thingiverse.com/thing:190118). Very handy and easy to install upgrades that will save you a lot of trouble in the long run.

## A better nozzle

One thing that might give you a bit of a headache in the begining could be the nozzle that came installed in the printer. Leaving asside the fact that it's a low quality nozzle and it will wear out over time, mine was already partially clogged from the factory. I spent about 4 days trying to tune my slicer settings and the presure of the extruder idler lever until I decided to replace it with the spare provided with the printer. After that everything magicaly worked like it should have from the begining.

So do yourself a favor and order some [good quality nozzles](3d-printer-overview.html#the-nozzle) to have handy. But don't go for the steel nozzles just yet as their main purpose is printing abrasive materials which you will not be doing any time soon.

## A new fan shroud

One thing that can influence the quality of your prints is the cooling. The **default fan shroud** is fine in most situations but it does have a small flow derived from the fact that it blows all the air from one direction. This will create more stringing on the back of your print when using materials such as PETG that loves to string. Replacing it with a fan that distributes the air flow from 2 directions will help reduce this stringing issue and improve the cooling of your part during the printing process.

I am still experimenting with different shroud designs but I still have not found a perfect one so I can't really make a recommendation here. But feel free to experiment with the designs you find on thingiverse and see what works for you. Just keep in mind that since the shroud will be close to the nozzle you have to print it in [PETG](materials.html#petg) or better yet [ABS or ASA](materials.html#abs-asa). 

> A good comparison between different shroud models can be found in the video [What is the BEST fan for your Sidewinder X1 3d printer?](https://youtu.be/27MnEC7ejzs). Some of them require a different fan tho.

## Auto bed leveling

There is some controversy regarding the benefit of adding a bed probe like the [BLTouch](https://www.antclabs.com/bltouch) or clones. The bed on the **Genius** is rather small and leveling it is easy enough so that it does not really require a leveling probe. On the **Sidewinder** on the other hand it makes more sense as the bed is biger. It also makes sense to add one if you are using different printing surfaces like magnetic PEI sheets on top of your bed and keep swapping between them.

But don't think that adding a bed probe will magically solve your leveling issues as unfortunately is not a straight forward process, it requires some calibration and a firmware update for both the mainboard and the TFT.

> I wrote a detailed guide on [How to setup a BLTouch probe on tour Artillery printer](/2020/05/30/BLTouch-setup.html)

## OctoPrint

*Has the process of moving SDCards from your computer to the printer and viceversa tired you out ?* 

Fear not, there is a much better way of doing things! Get yourself a [Raspberry PI](https://www.raspberrypi.org/) and install [OctoPrint](https://octoprint.org/). Both **Prusa Slicer** and **Ultimaker Cura** can connect remotely to the **OctoPrint** server and be used for printing. The **Cura** plugin even allows you to monitor the webcam (if you have one on your PI) and control your printer.

The only downside is that you won't get any feedback on the TFT while using OctoPrint, except for the nozzle and bed temperatures. This means no print time, no pause and no way to abort the print from the TFT in case something goes wrong.

As there is a lot of empty space inside the base of the printer, I have installed my PI next to the vents on the left side, behind the TFT. This way the PI is in the way of the airflow cooling the printer and it does not go over 50C even without a radiator.

## And all metal heatbreak

Changing the default [PTFE lined heatbreak with an all metal one](3d-printer-overview.html#the-heatbreak) will allow you to use extruder temperatures above the 240C recomended for the one that comes with the printer. This will grant access to printing more specialized materials but could create issues for the more basic ones like PLA. In my experience of about 6 weeks since I upgraded to an all metal heatbreak I did not experiece such issues but I guess it's too early to tell.

## Build an enclosure

One way to make your printer blend in your living room is by [building an enclosure](https://photos.app.goo.gl/pB1xUda8z3scRGzd9). This will also prevent draft from ruining your prints and protect the printer from dust. 

I built myself an adapted version of the [Original Prusa i3 MK3 ENCLOSURE - Ikea Lack table](https://www.thingiverse.com/thing:2864118) with modified top supports to which I **added 60mm** in height to match the height of the **Genius**. Of course the plexiglass panels are now **500mm** in height instead of the 440mm specified in the guide. The Lack tables are cheap but also hallow inside so I had to add some 3D printed L shaped brackets to all the legs for more stability. All of the modded files are can be [downloaded here](upgrades/Enclosure_mod.zip)

There is no need for extra cooling of the printer's electronics as the temperature inside does not go over 40C which is fine as most components start having issues only above 50C. But, just to be safe you can drill a hole in the bottom table where the printer's case fan is just to make sure it's got enough room to vent.

## Upgrade your firmware

As mentioned in the [3d printer overview](3d-printer-overview.html) there are 2 components (the mainboard and the TFT) that work independently and have separate firmwares and only communicate with each other via a serial port which is also shared with the external USB of the mainboard. **This shared serial port design unfortunately blocks the USB firmware upgrade process for the mainboard**. 

In order to update your mainboad's firmware you need to open the printer and disconnect your TFT from the mainboard by unpluging it's ribbon cable at one of the ends (whichever one has less glue on it). After that you connect your printer to a PC and use **Prusa Slicer** to upload the .hex firmware to the mainboard.

The TFT can be updated via a SD Card (16Gb or less), so it's a bit easier. 

**Do not upgrade your firmware until your machine is fully functional using the firmware it came with**. Upgrading the firmware will not magicaly solve your problems with the machine (if you have any) and won't make your prints any better (whith some exceptions like Linear Advance).

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

___ 
[3D-Nexus (3DN) Printer firmware for Sidewinder X1 and Genius](https://3d-nexus.com/resources/file-archives/category/5-printer-firmware)
- Marlin 1.1.9
- Save to EEPROM
- Linear advance
- Babystepping
- Mesh Bed Leveling

___
[3dprintbeginner Artillery Sidewinder Firmware](https://3dprintbeginner.com/sidewinder-x1-firmware/)  
[3dprintbeginner Artillery Genius Firmware](https://3dprintbeginner.com/artillery-genius-firmware/)  
- Marin 2.0.5.3
- Save to EEPROM
- Linear advance
- Babystepping
- S-Curve Acceleration, Adaptive Step Smoothing and Quick Home

___
[Waggster Firmware for Artillery Sidewinder](https://pretendprusa.co.uk/index.php?topic=30.0)  
[Waggster Firmware for Artillery Genius](https://pretendprusa.co.uk/index.php?action=downloads;cat=8)  
- Marlin 2.0.2
- Save to EEPROM
- Linear advance
- Babystepping
- Bilinear Auto Bed Level for BLTouch (or compatible) probes

___
[G2Barbour's M600 Enabled Firmware](https://www.thingiverse.com/thing:4251390) for both Sidewinder X1 and Genius
- Marlin 2.0.5.3
- Manual feature set that you can customize
- Requires building your own mainboard firmware
- TFT build (BTT clone) with support for filament change (M600) and other improvements

___
[Firmware that I use for my Artillery Genius](https://github.com/kind3r/genius-firmware/releases) (more or less same as Waggster but on Marlin 1.x and with my own personal tweaks)
- Marlin 1.1.9 (from Artillery)
- Save to EEPROM
- Linear advance
- Babystepping
- Bilinear Auto Bed Level for BLTouch (or compatible) probes
- Lower max speeds, acceleration and jerk
- Lower default acceleration
- You can use the TFT firmware from Waggster's version

___
[Original Artillery Sidewinder Firmware](https://github.com/artillery3d/sidewinder-x1-firmware) (source code only)

[Original Artillery Genius Firmware](https://github.com/artillery3d/genius-firmware) (source code only)
- The default firmware of the printer

___

## A flexible bed sheet

Many people online will recommend geting a flexible spring steel sheet covered in a layer of [PEI](https://en.wikipedia.org/wiki/Polyetherimide). Well, I got one just about as soon as I got my printer. But the **Ultrabase clone** of the bed was working fine for me most of the times, you just have to **clean it often and give it a scrub from time to time**, I did not wish to disable it by placing the magnet sheet on top. I though I can put some mangets under the bed to keep the spring steel on top of the Ultrabase and test it like that (just like it works on Prusa printers). Unfortunately just placing magnets on the sides is not enough to keep the spring steel sheet flat as the middle tends to deform while heating.

My only complain so far with the default Ultrabase-like bed surface was the fact that you have to **wait a lot for it to cool down** so it can release the prints, and even at room temperature (24C) I had a hard time removing my PLA ones. And the isolation underneath the bed heating silicone element is not helping with cooling (but can't argue with it's pro's during printing).

So, after about 10 weeks of staring at that PEI sheet every day thinking of alternative ways to attach it to the bed I decided it's time to experiment so I went ahead and **installed the magnetic sticker that on the bed**. **And now I'm glad I did and a bit sorry it took me so long to do it**.

I will list a few of the things noticed during my first weeks of using the felxible PEI sheet:
- **Setting the magnetic sticker on the bed is very easy**, just watch some videos on how to install it.
- I was worried a bit because the sprint steel sheet is shaped a bit like an ark (so not perfecly flat in it's initial shape) but **the magnetic sticker is very powerful** and keeps it in place.
- **PETG sticks much easier** and it does not need such precise bed leveling anymore (I use a BLTouch but still you have to adjust the Z-offset for it).
- **PLA no longer needs a hammer to get it off the bed**, just bend the steel sheet and off it goes. Think layers like the bed leveling squares still require a bit of effort to peal because they are flexible so they don't snap.
- The surface gives a **mirror like finish** to the base of the print. Not really a big fan of that as you can't get the same finish on the top of your print, but it's just personal preference. I guess by scrubbing it a bit you could create a texture, but I'm not going to do that yet.
- I **did not have to increase the bed temperature**, I actually had to decrease from 65C to 60C I was using for some of my PLAs which were a bit stubborn on the Ultrabase. So thermal transfer through the magnetig sticker seems very good (or the PEI sheet does not require such a high temperature).
- **It does not require fequent cleaning**, unlike the Ultrabase.
- It will require **replacement of the thin PEI surface** at some point as it will wear out, but those are relatively cheap. However I am woried that I will not be able to install it as bubble free as the factory preinstalled one.
- **Do not go above 80C when using a spring steel PEI sheet**. It will cause your prints to stick too hard, melt the adhesive that keeps the PEI foil on the steel sheet and as a result the PEI might start to peal off.

You can get this kind of **spring steel PEI sheet** from Amazon, Aliexpress, Banggood, your local retailers etc. They are basically everywhere. Mine is **Eryone Magnetic Flexible Printing Surface** and I got it from Amazon. I can't really recommend it since I cannot compare with others but so far it's been really good to me. But whichever you get, measure your bed to see the minimum size you need. For the Genius that would be the **235x235mm**. You can also get them textured if you want and even **double sided** (one side flat and the other textured).

I have now ordered a **BuildTak** foil to place on the other side of the spring steel sheet and make it double sided.

## Labels for your cables

If your a bit OCD like me and like to keep things organized, you can print yourself some lables that can be atached to the cables inside your 3D printer to make them more easy to recognize so you don't mix them up. Here are some of the options:

> [Stepper Motor Cable Mark](https://www.thingiverse.com/thing:3627558) by xDOOTx

> [Cable Clips](https://www.thingiverse.com/thing:2070838) by pcsentinel

> [Multimaterial Cable Clips](https://www.thingiverse.com/thing:3350640) by JuanPuchol

## A 32bit board and better stepper drivers

If you feel adventurous or have nothing better to do, you can try to upgrade the mainboard to a 32bit version. The most popular boards are the **SKR series from BigTreeTech** (BTT) but other options exists such as the **MakerBase MKS SGEN L** which is a direct replacement for the MKS GEN L 8bit board the Genius and the Sidewinder are both equiped with. At the moment theese boards don't bring anything ground breaking to the table but as Marlin 1.x firmware is no longer developed this is more of a future proof upgrade. There are no new features in Marlin 2.x just yet, but probably there will be in the future as more 32bit only content evolves.

When it comes to stepper drivers, best available right now is the **TMC2209**. It features **StealthChop2** which makes your printer even quieter belive it or not, and makes you wanna replace your extruder fans with something silent cause that's all you will be hearing from now on. Another feature is **StallGuard4** which does load measurement so it can detect when the motor is not moving or has dificulties in moving. This is useful for providing sensorless endstops. If that's not a thing for you, the **TMC2208** is also a good choice. One other thing those drivers have in common is that they can comunicate with the board via UART (serial) so their parameters can be configured from the firmware and you don't have to go around setting jumpers or adjusting v-ref trimmers. They also give a lot of feedback to the firmware so it can also adjust various things on the fly.

Here is a list of all [Trinamic motor drivers](https://www.trinamic.com/products/integrated-circuits/) and the explanation of the [various technologies used](https://www.trinamic.com/technology/adv-technologies/) for each of them.

Whichever board you choose remember it's best to pick the steppers from the same manufacturer for compatibilities reasons.

> [SKR 1.3 Upgrade for Sidewinder X1](https://3dprintbeginner.com/skr-1-3-upgrade-sidewinder-x1/) covered by **3dprintbeginner** is a detailed guide on how to install the BTT SKR board.

> I have also made a quick [Upgrade Artillery Genius or Sidewinder to a MKS SGEN L 32bit board](/2020/05/14/MKS-SGEN-L-32bit-board.html) overview guide.

## Other resources

> A list of upgrades and replacement parts can be found on 3D Nexus' article [Artillery 3D Printers, Parts, Upgrades And Mods](https://3d-nexus.com/newsroom/fdm-printing/artillery-3d-printers-parts-upgrades-and-mods?fbclid=IwAR15y_IgitSDFj-ReUOPp1ZuJ7GZBjObifABdUXcDEhpicH2ia6ILlEDWO8)

> 3dprintbeginner's pick at his favourite upgrades [Sidewinder X1 Upgrades – Paid and Free](https://3dprintbeginner.com/sidewinder-x1-upgrades/)

**Next step**: [Troubleshooting common issues and how to fix them](troubleshooting.html)

