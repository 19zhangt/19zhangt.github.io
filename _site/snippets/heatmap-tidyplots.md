```r
library(tidyplots)
cor_mat <- cor(mtcars[, c("mpg", "disp", "hp", "wt")])
cor_long <- as.data.frame(as.table(cor_mat))
names(cor_long) <- c("column", "row", "correlation")
cor_long |>
  tidyplot(x = column, y = row, color = correlation) |>
  add_heatmap()
```
