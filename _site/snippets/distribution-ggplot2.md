```r
library(ggplot2)
ggplot(iris, aes(Species, Sepal.Length, fill = Species)) +
  geom_violin(trim = FALSE, alpha = 0.55) +
  geom_boxplot(width = 0.16, outlier.shape = NA) +
  labs(x = "物种", y = "萼片长度") +
  theme_minimal() +
  theme(legend.position = "none")
```
