M104 S150                             ; start heating the extruder a bit to save some time but not ooze
M140 S[first_layer_bed_temperature]   ; heatbed temperature
M190 S[first_layer_bed_temperature]   ; wait for the bed to heat up
M83                                   ; extruder relative mode
G28                                   ; home all axes
G29                                   ; Bed autolevel
G92 E0                                ; reset extruder

G1 X0 Y0 F5000                        ; move to 0/0/0
G1 Z0
M109 S[first_layer_temperature]       ; Heat up extruder

M42 P4 S0                             ; Turn off LED
M42 P5 S0
M42 P6 S0

G1 X20 Y5 Z0.3 F5000.0                ; move to start-line position
G1 Z0.3 F1000                         ; print height
G1 X200 Y5 F1500.0 E15                ; draw 1st line
G1 X200 Y5.3 Z0.3 F5000.0             ; move to side a little
G1 X5.3  Y5.3 Z0.3 F1500.0 E30        ; draw 2nd line

M82                                   ; extruder absolute mode