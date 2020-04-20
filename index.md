# Getting started with your Artillery 3D printer

This guide is aimed at new people looking to get into 3D printing and is a collection of articles and videos that helped me getting starting. It is mostly aimed at setting up your new Artillery 3D printer, be it the Genius or Sidewinder X1 but the same principles apply to most cartesian 3D printers. Inspiration came from the repeating questions in the [Artillery Genius facebook group](https://www.facebook.com/groups/artillerygenius/), people seem to have the same issues and ask the same questions mostly due to the fact that they don't understand the process of 3D printing in general, have not read the basics, or did not check/calibrate their printers.

Fist things first. **A 3D printer is nothing like regular printer. You can't just plug it in and click 'print'**. If you bought one and expect it to 'just work' prepare to be dissapointed. Unless you spend at least 800 EUR on a Prusa i3 MK3S (and not even that will guarantee a perfect print each time) your cheap Chinese 3D printer won't perform like in the reviews you read or watched. The reviewers have a lot of experience, understand how everything works and know how to tune those devices to perform best. Quality control of various devices coming from China is getting better but it's far form perfect so issues like a loose screw, unplugged cable, broken components etc. are common things. If you don't take time to understand how it all works, finding the culprit causing your issue can take a lot of time and frustration. So be prepared to spend a few days learning a bit about mechanics, electronics and software development.

So, now that we got that out of the way, let's get started !

## Understanding 3D printing

First and most important step to succesful 3D printing is to understand how 3D printing works in general and how this applies to your 3D printer. Once you understand what your 3D printer actually does while printing and how external factors can influence printing you can troubleshoot your problems with ease. 

There are multiple types of 3D printing techniques, but we are focusing on the most popular and afordable one: [fused filament fabrication (FFF) or fused deposition modeling (FDM)](https://en.wikipedia.org/wiki/Fused_filament_fabrication).

> A 3D printer essentially works by extruding molten plastic through a tiny nozzle that it moves around precisely under computer control. It prints one layer, waits for it to dry, and then prints the next layer on top.  
> *Full article: [3D printers](https://www.explainthatstuff.com/how-3d-printers-work.html)*

Sounds easy, right ? Except it's not, as we don't live in an ideal world. There are a lot of factors that influence 3D printing starting from the quality and precision of the 3D printer itself, type and brand of material you're printing, bed surface, room temperature and humidity, slicer settings etc. But don't worry, advances over the past years have improved material printability and also printer parts got cheaper and so did the printers themselfs.

The 3 main components of a 3D printing environment are:
- The 3D printer
- Slicer PC software
- Filament or material used to print

### The 3D printer

At it's core level, a 3D printer is basicaly a molten plastic spiting contraption (extruder block or tool) that can move in 3D space to create your model. For a better comparison, think of a motorized hot glue gun. 

In order to be able to achive the 3D spatial movement, the [cartesian](https://en.wikipedia.org/wiki/Cartesian_coordinate_robot) printer has 3 axis (X, Y and Z) independently controlled by 3 or more stepper motors which ensure precise movement of the extruder block so that the molten plastic is dropped where it needs to be. X and Y axis are both on the horizontal plane leaving the Z axis for vertical movement. 

A great article explaining all the movements of the axis can be found here: [3D Printer Axis: The Basics](https://all3dp.com/2/3d-printer-axis-all-you-need-to-know/). 

For more details about the stepper motors you can watch this video: [How does a Stepper Motor work ?](https://www.youtube.com/watch?v=eyqwLiowZiU). 

Now that you have an ideea about the movement of the motors, let's investigate the role of the motor driver. The driver handles routing the power to the 2 stepper motor coil pairs while providing an easy control interface. The printer's CPU tells the driver to move a specified number of steps in some direction with a specified speed and the driver translates this into alternating current for the 2 coil pairs in order to perform the specified move. Drivers can perform silent moves by using babystepping technology, they can also detect if a motor moved or not thus providing virtual endstops. 

A stepper motor (and driver) has no way of knowing it's current position, let alone the position of the axis it's moving. What it can do, is mark it's current position as an initial refference and record future positions relative to that initial refference. So in order to have the actual position relative to the print surface, printers use endstops as a reference position of one axis (normaly the 0 coordinate). That is what **homing** is for. The printer moves the specified axis motor slowly in the direction of the endstop until that endstop triggers and then records that position as being 0 for that axis. All further moves will now have a reference point so the CPU can address coordinates directly.

#### X and Y axis

X and Y axis work in similar ways, they are both usually controlled by a single stepper motor each and a belt that moves the extruder block left and right for the X axis and the bed (back and front) for Y axis. 

Common issues with X and Y axis derive from the tightness of the belts. If the belts for those axis are too lose, when the motor is turning the belt might not so the desired movement is not transmited to the extruder block or the bed, resulting in shifting layers. On the other hand, if the belt is too tight it will put too much pressure on the axle of the motor and the motor itself won't be able to move, also resluting in shifting layers.

#### Z axis

Z axis is a bit different. The motor is connected to a threaded rod via a coupler. This works like a nut on a screw: you turn the screw and the nut goes up or down. Of course, the screw (rod) being so long, issues can apear if it's not perfectly straight. This is why the coupler has a flexible part designed to compensate for the rod not being perfectly straight. The Genius on the other hand uses a different mechanism in the form of a Z-coupler mounted on the X caridge that alows some play to compensate for a not so straight rod. Is this better than a flexible coupler ? Time will tell.
![Z-coupler](img/z_coupler.png)


#### The extruder block




### Slicer PC sofware

The slicer is a software that transforms a 3D model into 3D printer instructions known as G-code. Once again, this is no easy feat as the G-code has to describe every single move your printer has to perform, this includes moving the print head on X, Y and sometimes Z while also extruding or retracting filament and/or accelerating to some desired speed, increasing part cooling fan flow, changing bed and extruder temperature etc. All of this happens in the G-code exported by the slicer.

