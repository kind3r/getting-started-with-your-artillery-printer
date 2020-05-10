---
title: Tips and tricks for 3D printing
updated: 10-05-2020
---
# Tips and tricks

## Proper setup and calibration

If you haven't already, go through the [setup and calibration](setup) section which explains most of the things you need to do before starting your first print. You should check the mechanical elements of your printer (screws, belts tension, eccentric nuts, couplers etc.) from time to time as the vibrations from the printer's movements can loosen things up and you will start having problems. Also make sure your printer is clean and as dust free as possible as dust might add to the wear of your moving parts.

One of the most important and easily ignored aspects of the setup and calibration is making sure your [nozzle is properly tightened](setup#the-extruder-block) inside the heatblock. If it is not, molten filament will find it's way out of the assembly and will end up covering the whole heatblock including the wires leading to the thermistor and heating element, and you don't want to be cleaning that mess anytime soon.

[Print yourself strain reliefs](setup#your-first-useful-prints) for the bed cable and the extruder ribbon as they are sensitive and will wear over time if not properly protected.

## Get a better nozzle

The quality of the default nozzle leaves a bit to be desired. Mine was even pre-clogged and I had a lot of trouble setting up my printer in the begining until I finally decided to swap it with the spare which worked fine until my new nozzles arrived. Some might argue with this but I recommend getting a high quality nozzle from [E3D](https://e3d-online.com/nozzles-for-3d-printer/volcano-nozzles) like the **plated copper** or the **Nozzle X**. Veterans are usualy agains buying an expensive one because they print 24/7 so they have to replace their nozzles often because of the wear so they preffer getting cheaper nozzles in bulk. If one nozzle is bad they can afford to throw it away and still save money compared to the more expensive alternatives. But you are not running a print farm and because your usage as a hobyist is much lower your nozzle won't wear out that often, and you don't change sizes all the time, so a good quality nozzle will keep you running for years.

Also, make sure your **nozzle is clean** in between prints. Leftover filament on the nozzle will burn out due to the prolongued exposure to heat and tends to atract the filament that is being extruded. As more material is sticking to your nozzle it will find it's way up towards the heatblock creating a mess, it will also drop bits and pieces everywhere on your print and can even drag your print off the bed.

## Bed care

**Clean your bed** with [IPA (Isopropyl alcohol)](https://en.wikipedia.org/wiki/Isopropyl_alcohol) or pure [Acetone](https://en.wikipedia.org/wiki/Acetone) before every print (or after if you plan not to use your printer for a longer period of time). A clean bed makes for a better first layer adhesion and will save you a lot of troubleshooting time.

Even tho you clean your bed regularly, leftover material will still build up on the pores, so from time to time it will be necessary to do a **full scrub**. Using some 000 or 0000 [steel wool](https://en.wikipedia.org/wiki/Steel_wool) and IPA or acetone give your bed a scrub so that all traces of your previous prints are removed. Use a paper towel to remove the debree left by the scrubbing and then use another fresh towel with IPA to make sure everything is clean.

If your **bed is not straight**, loosening all the leveling knobs and then heating the bed up to 80C for 5 min then letting it cool down to room temp and repeating this 2-3 times might get it back to a flat shape.

Make sure you [level your bed](setup#bed-leveling) by printing those calibration squares I mentioned in the setup and calibration section. It's a very efficient method for getting a very precise bed level that suits each filament. **You should repeat this leveling every time you change temperatures and filament**. 

## Firmware updates

**Do not rush into a firmware update**. Artillery only provides the default firmware your printer shipped with and will not provide additional updates. All other firmwares are built by 3rd parties and while they do bring some extra features they are not required for properly operating the printer. A firmware update **will not fix** the problems that you are having with the default setup but can add new issues if you don't know what you are doing. Just **use your printer as it and make sure everything runs fine** before starting hacking and slashing at it. See the [upgrades section](upgrades#firmware-options) for more information about firmware upgrades.

## Small is the new big

Don't go for that 12h quadcopter frame that you bought this printer for, instead start printing small test objects preferably on different areas of the bed until you tune your settings (like bed and nozzle temperatures, speed, flow rate etc.) to your specific filament. You don't want that print to fail after 10h and start over again. While this might still happen, running some smaller test will help you forsee if there could be a problem and try to fix it before things get out of hand. 

One of the common issues is that **the bed does not heat evenly**. This is because the heating element starts heating from the center of the bed, so the extremities are usually colder at first, even if the thermistor (also located near the center of the bed) reports that it has reached the desired temperature. This is why it's a good practice to **let the bed heat up** for a few more minutes (5 or so) if you want to print something large, so that the heat reaches all four corners of the surface. But even with this delay, the margins of the bed will still be colder than the middle, so you might also want to raise the temperature by 5 degrees to make sure the parts printed closer to the bed's edge stick well enough. If that's not enough, you can always try to use **masking tape, glue or hairspray**.

## Keep your filament dry

As explained in the [materials section](materials) wet filament is very bad. Some materials absorb moisture from the air faster than others, whith nylon being the champion of [hygroscopicity](https://en.wikipedia.org/wiki/Hygroscopy) (if that's even a word), but in the end they all do sooner or later. It's a good practice to keep your materials in ziplock bags (like the one you can find at Ikea), togheter with some [silica gel](https://en.wikipedia.org/wiki/Silica_gel) packs. I also recomend you get yourself a cheap [food dehydrator and transform it into a filament dryer](materials#water-is-bad) as it's worth every penny. An alternative solution would be to dry your spools in the oven, but I don't really advice doing that since most ovens are not really that precise with the temperature plus the plastic fumes can be harmful for your health in the long run.

## Knowledge is power

With 3D printing you learn something new every day. Here are some interesting YouTube channels to follow and some websites to read to find out more about 3D printing in general, materials, hardware upgrades and interesting stuff you can 3D print:

**Youtube channels**:
> [Maker's Muse](https://www.youtube.com/channel/UCxQbYGpbdrh-b2ND-AfIybg)

> [Thomas Sanladerer](https://www.youtube.com/channel/UCb8Rde3uRL1ohROUVg46h1A)

> [CNC Kitchen](https://www.youtube.com/channel/UCiczXOhGpvoQGhOL16EZiTg)

> [Hobby Hoarder](https://www.youtube.com/channel/UCJzj8WPo-qOnIK1UHEiLRKQ)

> [Chris's Basement](https://www.youtube.com/channel/UCqRiv7rQuxge63bqJ2hVNUQ)

**Websites**:
> [3dprintbeginner](https://3dprintbeginner.com/)

> [All3DP](https://all3dp.com/)

> [Simplify 3D - Print Quality Troubleshooting Guide](https://www.simplify3d.com/support/print-quality-troubleshooting/)

> [3D Beginners](https://www.3dbeginners.com/)

> [Let's Print 3D](https://letsprint3d.net/)


**Next step**: [Upgrades for your Artillery printer](upgrades)

All topics:
{% include_relative _toc.md %}