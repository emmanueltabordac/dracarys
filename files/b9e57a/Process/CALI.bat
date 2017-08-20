#!/bin/tcsh
gmt gmtset PS_MEDIA Custom_250x280
gmt psxy elevRings_CALI_20120307-160000_20120307-235945.dat -R-1.6/1.6/-1.6/1.6 -JX7.0  -W1.0p -G0/0/0 -G230 -V  -K -P -X0.75 -Y1.0 > CALI.ps
gmt psxy cutoffRing_CALI_20120307-160000_20120307-235945.dat -R -JX  -W0.2t4_8:0p  -G255 -V  -O -K -P >> CALI.ps
gmt psxy elevRings_CALI_20120307-160000_20120307-235945.dat -R -JX -W1.0p -G/0/0/0  -V  -O -K -P >> CALI.ps
gmt psxy elevRings_CALI_20120307-160000_20120307-235945.dat -R -JX -W0.5p -G/255/255/255  -V  -O -K -P >> CALI.ps
gmt pstext title_CALI_20120307-160000_20120307-235945.txt -R -JX -N -V  -O -K -P >> CALI.ps
gmt psvelo mp_CALI_20120307-160000_20120307-235945.xy -R -JX  -L -W0.5p -G175/175/175 -Se1/0.95/0 -A0.0/0.0/0.0 -N  -O -K -P -V >>  CALI.ps
gmt psxy 2CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 3CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 6CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 9CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 12CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 14CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 15CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 16CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 18CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 19CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 20CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 21CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 22CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 24CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 25CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 27CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 29CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 30CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 31CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy 32CALI_20120307-160000_20120307-235945.sat.xy -R -JX -W0.15p -V -P  -O -K >> CALI.ps
gmt psxy hr_CALI_20120307-160000_20120307-235945.xy -R -JX -V  -Sc0.03 -Gred -O -K -P >> CALI.ps
gmt pstext hr_CALI_20120307-160000_20120307-235945.txt -R -JX -V -O -K -P >> CALI.ps
gmt psxy cross_CALI_20120307-160000_20120307-235945.txt -R -JX -V  -W0.15p -O -K -P -G0 >> CALI.ps
gmt pstext nesw_CALI_20120307-160000_20120307-235945.txt  -R  -JX -O -K  -N   >> CALI.ps
gmt psvelo arrows_CALI_20120307-160000_20120307-235945.xy -R -JX  -L  -W1.0p -Gred -Se1/0.95/7 -A0.0020/0.035/0.025 -N -O -K -P -V >> CALI.ps
gmt pstext ring_CALI_20120307-160000_20120307-235945.txt -R  -JX -O -N -W1.0p>> CALI.ps
echo ------------------------------ 
echo ------------------------------ 
echo View or print CALI.ps
