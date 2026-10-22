```r
library(ggplot2)
cor_mat <- cor(mtcars[, c("mpg", "disp", "hp", "wt")])
cor_long <- as.data.frame(as.table(cor_mat))
names(cor_long) <- c("column", "row", "correlation")
ggplot(cor_long, aes(column, row, fill = correlation)) +
  geom_tile() +
  scale_fill_gradient2(limits = c(-1, 1)) +
  labs(x = NULL, y = NULL, fill = "相關") +
  theme_minimal()
```
