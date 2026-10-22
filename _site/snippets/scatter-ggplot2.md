```r
library(ggplot2)
ggplot(iris, aes(Sepal.Length, Sepal.Width, color = Species)) +
  geom_point(alpha = 0.8, size = 2) +
  labs(x = "萼片长度", y = "萼片宽度", color = "物种") +
  theme_minimal()
```
