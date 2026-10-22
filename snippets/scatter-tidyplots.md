```r
library(tidyplots)
iris |>
  tidyplot(x = Sepal.Length, y = Sepal.Width, color = Species) |>
  add_data_points()
```
