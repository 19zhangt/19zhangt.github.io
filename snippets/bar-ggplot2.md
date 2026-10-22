```r
library(ggplot2)
cyl_count <- aggregate(rep(1, nrow(mtcars)), list(cyl = mtcars$cyl), sum)
names(cyl_count)[2] <- "count"
ggplot(cyl_count, aes(factor(cyl), count)) +
  geom_col() +
  labs(x = "汽缸数", y = "记录数") +
  theme_minimal()
```
