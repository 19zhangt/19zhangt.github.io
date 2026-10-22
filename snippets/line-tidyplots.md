```r
library(tidyplots)
monthly_temp <- aggregate(Temp ~ Month, airquality, mean)
monthly_temp |>
  tidyplot(x = Month, y = Temp) |>
  add_line() |>
  add_data_points()
```
