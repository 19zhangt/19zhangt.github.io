```r
library(ggplot2)
monthly_temp <- aggregate(Temp ~ Month, airquality, mean)
ggplot(monthly_temp, aes(Month, Temp)) +
  geom_line(linewidth = 1) +
  geom_point(size = 2) +
  scale_x_continuous(breaks = 5:9) +
  labs(x = "月份", y = "平均气温 (°F)") +
  theme_minimal()
```
