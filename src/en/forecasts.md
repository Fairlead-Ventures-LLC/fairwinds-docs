---
layout: base-en.html
typora-root-url: ..
title: Getting Started
---

# All about forecasts

<p class="lead">Short version: wind data is updated every 6 hours in FairWinds at 00:00, 06:00, 12:00, and 18:00 UTC (zulu time).

Currents are updated usually 1x or 2x a day depending on the resolution

---

## 1. Wind data

You can keep track of the active and upcoming forecasts on https://fairwinds.world/wind

FairWinds uses GFS 0p25 (0.25 degree) wind data, available from NOAA. GFS is a global, free weather data set. THe wind data is extracted from the 10-meter u and v vectors in the grib files. Grib files are a binary format file used to compress dense gridded data.

 What most people think of as a global continuious field of forecast data is actually not how the data is created and released. Instead, think of the forecast as a series of data photographs stacked on each other, taken every 3 hours. These photos are called 'steps' and for a single forecast, NOAA releases them one at a time as soon as they are ready. 

For example, take the 00:00 UTC forecast. NOAA starts crunching data at 00z, but it takes a while. They don't actually finish the first step until about 03:30. They then start uploading these steps to a public cloud. 

They look like this
gfs.t00z.pgrb2.0p25.f000                     27-Jan-2026 03:29  481M  
gfs.t00z.pgrb2.0p25.f001                     27-Jan-2026 03:29  509M  
gfs.t00z.pgrb2.0p25.f002                     27-Jan-2026 03:30  511M  
gfs.t00z.pgrb2.0p25.f003                     27-Jan-2026 03:30  511M  
gfs.t00z.pgrb2.0p25.f004                     27-Jan-2026 03:30  514M  
gfs.t00z.pgrb2.0p25.f005                     27-Jan-2026 03:31  514M  
gfs.t00z.pgrb2.0p25.f006                     27-Jan-2026 03:31  514M  
gfs.t00z.pgrb2.0p25.f007                     27-Jan-2026 03:31  513M  
gfs.t00z.pgrb2.0p25.f008                     27-Jan-2026 03:31  514M  
....

So what you are looking at above is the first 8 hours of data 'snapshots'. 



---

## 2. FairWinds forecast update schedule

Why are steps important?

FairWinds updates the wind data in the simulator and the race viewer every 6 hours using the previous cycle's forecast data. 

The scheudle looks like this

| GFS Forecast Cycle | FairWinds Active Time (UTC) | Forecast Steps | Coverage |
| :----------------- | :-------------------------- | :------------- | :------- |
| 00Z                | 06:00 - 11:59               | f006-f012      | 6 hours  |
| 06Z                | 12:00 - 17:59               | f006- f012     | 6 hours  |
| 12Z                | 18:00 - 23:59               | f006-f012      | 6 hours  |
| 18Z                | 00:00 - 05:59 (next day)    | f006-f012      | 6 hours  |



---

## 3. Understanding wind changes

Since the simulator loads new forecasts every 6 hours it means you need to stay on top of the new wind in order to keep your boat heading in the right direction. 

 Because FairWinds loads a new wind data set every six hours, that means the forecast WILL change. And the wind you see in 24 hours will likely be different. 

---



