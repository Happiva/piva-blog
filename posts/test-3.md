---
title: Random post
createdAt: '2021-01-31'
category: 'Javascript'
draft: false
thumbnail: '/images/dummy_thumbnail.jpeg' 
---

# Introduction

Parsing and display of math equations is included in this blog template. Parsing of math is enabled by `remark-math` and `rehype-katex`.
KaTeX and its associated font is included in `_document.js` so feel free to use it on any page.
[^footnote]

[^footnote]: For the full list of supported TeX functions, check out the [KaTeX documentation](https://katex.org/docs/supported.html)

Inline math symbols can be included by enclosing the term between the `$` symbol.

Math code blocks are denoted by `$$`.

If you intend to use the `$` sign instead of math, you can escape it (`\$`), or specify the HTML entity (`&dollar;`) [^2]

Inline or manually enumerated footnotes are also supported. Click on the links above to see them in action.

[^2]: \$10 and &dollar;20.

# Deriving the OLS Estimator

Using matrix notation, let $n$ denote the number of observations and $k$ denote the number of regressors.

The vector of outcome variables $\mathbf{Y}$ is a $n \times 1$ matrix,

```tex
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
```

$$