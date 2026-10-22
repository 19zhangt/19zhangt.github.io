```r
library(tidyplots)
cyl_count <- aggregate(rep(1, nrow(mtcars)), list(cyl = mtcars$cyl), sum)
names(cyl_count)[2] <- "count"
cyl_count |>
  tidyplot(x = cyl, y = count) |>
  add_mean_bar()
```
