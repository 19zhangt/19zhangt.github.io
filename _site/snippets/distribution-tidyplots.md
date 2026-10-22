```r
library(tidyplots)
iris |>
  tidyplot(x = Species, y = Sepal.Length, color = Species) |>
  add_violin() |>
  add_boxplot()
```
