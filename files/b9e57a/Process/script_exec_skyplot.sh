#!/bin/bash
cd /var/www/html/tesisPPP/files/b9e57a/Process
./teqc +qc /var/www/html/tesisPPP/files/b9e57a/Rinex/CALI0670.12O
./azelplot /var/www/html/tesisPPP/files/b9e57a/Process/CALI.inp
sh CALI.bat
convert -density 300 CALI.ps -resize 1024x1024 /var/www/html/tesisPPP/files/b9e57a/Report/CALI_2.gif