dir.create("data", showWarnings = FALSE, recursive = TRUE)
dir.create("images", showWarnings = FALSE, recursive = TRUE)
dir.create("snippets", showWarnings = FALSE, recursive = TRUE)

utils::write.csv(iris, "data/iris.csv", row.names = FALSE)
utils::write.csv(mtcars, "data/mtcars.csv", row.names = TRUE)
utils::write.csv(airquality, "data/airquality.csv", row.names = FALSE)

snippet <- function(name, code) {
    writeLines(
        c("```r", code, "```"),
        file.path("snippets", paste0(name, ".md"))
    )
}

snippet(
    "scatter-ggplot2",
    c(
        "library(ggplot2)",
        "ggplot(iris, aes(Sepal.Length, Sepal.Width, color = Species)) +",
        "  geom_point(alpha = 0.8, size = 2) +",
        "  labs(x = \"萼片长度\", y = \"萼片宽度\", color = \"物种\") +",
        "  theme_minimal()"
    )
)
snippet(
    "scatter-tidyplots",
    c(
        "library(tidyplots)",
        "iris |>",
        "  tidyplot(x = Sepal.Length, y = Sepal.Width, color = Species) |>",
        "  add_data_points()"
    )
)

snippet(
    "distribution-ggplot2",
    c(
        "library(ggplot2)",
        "ggplot(iris, aes(Species, Sepal.Length, fill = Species)) +",
        "  geom_violin(trim = FALSE, alpha = 0.55) +",
        "  geom_boxplot(width = 0.16, outlier.shape = NA) +",
        "  labs(x = \"物种\", y = \"萼片长度\") +",
        "  theme_minimal() +",
        "  theme(legend.position = \"none\")"
    )
)
snippet(
    "distribution-tidyplots",
    c(
        "library(tidyplots)",
        "iris |>",
        "  tidyplot(x = Species, y = Sepal.Length, color = Species) |>",
        "  add_violin() |>",
        "  add_boxplot()"
    )
)

snippet(
    "bar-ggplot2",
    c(
        "library(ggplot2)",
        "cyl_count <- aggregate(rep(1, nrow(mtcars)), list(cyl = mtcars$cyl), sum)",
        "names(cyl_count)[2] <- \"count\"",
        "ggplot(cyl_count, aes(factor(cyl), count)) +",
        "  geom_col() +",
        "  labs(x = \"汽缸数\", y = \"记录数\") +",
        "  theme_minimal()"
    )
)
snippet(
    "bar-tidyplots",
    c(
        "library(tidyplots)",
        "cyl_count <- aggregate(rep(1, nrow(mtcars)), list(cyl = mtcars$cyl), sum)",
        "names(cyl_count)[2] <- \"count\"",
        "cyl_count |>",
        "  tidyplot(x = cyl, y = count) |>",
        "  add_mean_bar()"
    )
)

snippet(
    "line-ggplot2",
    c(
        "library(ggplot2)",
        "monthly_temp <- aggregate(Temp ~ Month, airquality, mean)",
        "ggplot(monthly_temp, aes(Month, Temp)) +",
        "  geom_line(linewidth = 1) +",
        "  geom_point(size = 2) +",
        "  scale_x_continuous(breaks = 5:9) +",
        "  labs(x = \"月份\", y = \"平均气温 (°F)\") +",
        "  theme_minimal()"
    )
)
snippet(
    "line-tidyplots",
    c(
        "library(tidyplots)",
        "monthly_temp <- aggregate(Temp ~ Month, airquality, mean)",
        "monthly_temp |>",
        "  tidyplot(x = Month, y = Temp) |>",
        "  add_line() |>",
        "  add_data_points()"
    )
)

snippet(
    "heatmap-ggplot2",
    c(
        "library(ggplot2)",
        "cor_mat <- cor(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\")])",
        "cor_long <- as.data.frame(as.table(cor_mat))",
        "names(cor_long) <- c(\"column\", \"row\", \"correlation\")",
        "ggplot(cor_long, aes(column, row, fill = correlation)) +",
        "  geom_tile() +",
        "  scale_fill_gradient2(limits = c(-1, 1)) +",
        "  labs(x = NULL, y = NULL, fill = \"相關\") +",
        "  theme_minimal()"
    )
)
snippet(
    "heatmap-tidyplots",
    c(
        "library(tidyplots)",
        "cor_mat <- cor(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\")])",
        "cor_long <- as.data.frame(as.table(cor_mat))",
        "names(cor_long) <- c(\"column\", \"row\", \"correlation\")",
        "cor_long |>",
        "  tidyplot(x = column, y = row, color = correlation) |>",
        "  add_heatmap()"
    )
)

ggplot2::ggsave(
    "images/scatter-ggplot2.png",
    ggplot2::ggplot(
        iris,
        ggplot2::aes(Sepal.Length, Sepal.Width, color = Species)
    ) +
        ggplot2::geom_point(alpha = 0.8, size = 2) +
        ggplot2::labs(x = "萼片长度", y = "萼片宽度", color = "物种") +
        ggplot2::theme_minimal(),
    width = 7,
    height = 4.5,
    dpi = 150
)
ggplot2::ggsave(
    "images/distribution-ggplot2.png",
    ggplot2::ggplot(iris, ggplot2::aes(Species, Sepal.Length, fill = Species)) +
        ggplot2::geom_violin(trim = FALSE, alpha = 0.55) +
        ggplot2::geom_boxplot(width = 0.16, outlier.shape = NA) +
        ggplot2::labs(x = "物种", y = "萼片长度") +
        ggplot2::theme_minimal() +
        ggplot2::theme(legend.position = "none"),
    width = 7,
    height = 4.5,
    dpi = 150
)
cyl_count <- aggregate(rep(1, nrow(mtcars)), list(cyl = mtcars$cyl), sum)
names(cyl_count)[2] <- "count"
ggplot2::ggsave(
    "images/bar-ggplot2.png",
    ggplot2::ggplot(cyl_count, ggplot2::aes(factor(cyl), count)) +
        ggplot2::geom_col() +
        ggplot2::labs(x = "汽缸数", y = "记录数") +
        ggplot2::theme_minimal(),
    width = 7,
    height = 4.5,
    dpi = 150
)
monthly_temp <- aggregate(Temp ~ Month, airquality, mean)
ggplot2::ggsave(
    "images/line-ggplot2.png",
    ggplot2::ggplot(monthly_temp, ggplot2::aes(Month, Temp)) +
        ggplot2::geom_line(linewidth = 1) +
        ggplot2::geom_point(size = 2) +
        ggplot2::scale_x_continuous(breaks = 5:9) +
        ggplot2::labs(x = "月份", y = "平均气温 (°F)") +
        ggplot2::theme_minimal(),
    width = 7,
    height = 4.5,
    dpi = 150
)
cor_mat <- cor(mtcars[, c("mpg", "disp", "hp", "wt")])
cor_long <- as.data.frame(as.table(cor_mat))
names(cor_long) <- c("column", "row", "correlation")
ggplot2::ggsave(
    "images/heatmap-ggplot2.png",
    ggplot2::ggplot(cor_long, ggplot2::aes(column, row, fill = correlation)) +
        ggplot2::geom_tile() +
        ggplot2::scale_fill_gradient2(limits = c(-1, 1)) +
        ggplot2::labs(x = NULL, y = NULL, fill = "相關") +
        ggplot2::theme_minimal(),
    width = 6,
    height = 5,
    dpi = 150
)

if (requireNamespace("tidyplots", quietly = TRUE)) {
    plots <- list(
        scatter = iris |>
            tidyplots::tidyplot(
                x = Sepal.Length,
                y = Sepal.Width,
                color = Species
            ) |>
            tidyplots::add_data_points(),
        distribution = iris |>
            tidyplots::tidyplot(
                x = Species,
                y = Sepal.Length,
                color = Species
            ) |>
            tidyplots::add_violin() |>
            tidyplots::add_boxplot(),
        bar = cyl_count |>
            tidyplots::tidyplot(x = cyl, y = count) |>
            tidyplots::add_mean_bar(),
        line = monthly_temp |>
            tidyplots::tidyplot(x = Month, y = Temp) |>
            tidyplots::add_line() |>
            tidyplots::add_data_points(),
        heatmap = cor_long |>
            tidyplots::tidyplot(x = column, y = row, color = correlation) |>
            tidyplots::add_heatmap()
    )
    for (name in names(plots)) {
        ggplot2::ggsave(
            paste0("images/", name, "-tidyplots.png"),
            plots[[name]],
            width = 7,
            height = 4.5,
            dpi = 150
        )
    }
}
