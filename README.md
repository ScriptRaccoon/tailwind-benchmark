# Tailwind Benchmark No. 1

## What this is about

This benchmark evaluates the marketing claim that Tailwind produces smaller builds.

To test this, a basic landing page was built twice: once with Vanilla CSS (actually, Sass, just to use its nesting syntax) and once with Tailwind. You can find them in the subfolders `Sass` and `Tailwind`.

The two pages do not look completely identical (it was not possible to achieve pixel-perfectness easily), but very similar. The pages present a fictional product, the text content was generated with ChatGPT.

The pages are deployed here:

-   https://pixelpro-css.netlify.app/
-   https://pixelpro-tailwind.netlify.app/

## Results

In both cases, the CSS was minified. Here are the results:

### Vanilla CSS (Winner)

-   `index.html`: 6.286 bytes
-   `style.css`: 2.164 bytes
-   total: 8.450 bytes
-   build time (Sass): ~ 1.7s

### Tailwind

-   `index.html`: 8.676 bytes
-   `style.css`: 6.105 bytes
-   total: 14.781 bytes
-   build time: ~ 4s

## Conclusion

At least for basic landing pages\*, Tailwind's marketing claim seems to be incorrect. The total bundle size is **75%** larger compared to Vanilla CSS.

That the HTML is bigger is not a surprise since it contains utility classes.

Also, the same utility classes are repeated for reoccurring elements such as sections and cards. (This repetition is prevented when using CSS classes.) For example, the Tailwind HTML contains the class string

`bg-white p-4 rounded-md shadow-lg`

six times, since there are six cards on the page. If we used a component framework (which seems to be overkill for such a basic page, but just for the sake of argument) and transformed the sections, cards etc. to components, the code repetition will not be in the code itself, but it will be in the rendered HTML which is served to the user. So as for the benchmark, this does not make any difference.

## Results without preflight

One reason for the bigger CSS output of Tailwind is its built-in reset, which is quite big. How do the results change when we replace this with the same small reset used for the Vanilla CSS version? This is done in the branch `without-preflight`.

Tailwind's results:

-   `index.html`: 8.870 bytes
-   `style.css`: 3.191 bytes
-   total: 12.061 bytes
-   build time: ~ 4.5s

The total bundle is still **42%** larger.

## Next benchmark

https://github.com/ScriptRaccoon/tailwind-benchmark-2

\*See [this benchmark](https://github.com/TGlide/tailwind-benchmark) by Thomas G. Lopes with more data, where Tailwind's bundle size is indeed smaller.
