<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Kumaraswamy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Kumaraswamy's double bounded distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-kumaraswamy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var kumaraswamy = require( '@stdlib/stats-base-dists-kumaraswamy' );
```

#### kumaraswamy

Kumaraswamy's double bounded distribution.

```javascript
var dist = kumaraswamy;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b )`][@stdlib/stats/base/dists/kumaraswamy/cdf]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b )`][@stdlib/stats/base/dists/kumaraswamy/logcdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the cumulative distribution function for a Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`logpdf( x, a, b )`][@stdlib/stats/base/dists/kumaraswamy/logpdf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability density function for a Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`pdf( x, a, b )`][@stdlib/stats/base/dists/kumaraswamy/pdf]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution probability density function.</span>
-   <span class="signature">[`quantile( p, a, b )`][@stdlib/stats/base/dists/kumaraswamy/quantile]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`kurtosis( a, b )`][@stdlib/stats/base/dists/kumaraswamy/kurtosis]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b )`][@stdlib/stats/base/dists/kumaraswamy/mean]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution expected value.</span>
-   <span class="signature">[`median( a, b )`][@stdlib/stats/base/dists/kumaraswamy/median]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution median.</span>
-   <span class="signature">[`mode( a, b )`][@stdlib/stats/base/dists/kumaraswamy/mode]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution mode.</span>
-   <span class="signature">[`skewness( a, b )`][@stdlib/stats/base/dists/kumaraswamy/skewness]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution skewness.</span>
-   <span class="signature">[`stdev( a, b )`][@stdlib/stats/base/dists/kumaraswamy/stdev]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b )`][@stdlib/stats/base/dists/kumaraswamy/variance]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Kumaraswamy( [a, b] )`][@stdlib/stats/base/dists/kumaraswamy/ctor]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Kumaraswamy = require( '@stdlib/stats-base-dists-kumaraswamy' ).Kumaraswamy;

var dist = new Kumaraswamy( 2.0, 4.0 );

var y = dist.logpdf( 0.8 );
// returns ~-1.209
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var kumaraswamy = require( '@stdlib/stats-base-dists-kumaraswamy' );

console.log( objectKeys( kumaraswamy ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-kumaraswamy.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-kumaraswamy

[test-image]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-kumaraswamy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-kumaraswamy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-kumaraswamy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-kumaraswamy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-kumaraswamy/main/LICENSE

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/kumaraswamy/ctor]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-ctor

[@stdlib/stats/base/dists/kumaraswamy/kurtosis]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-kurtosis

[@stdlib/stats/base/dists/kumaraswamy/mean]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-mean

[@stdlib/stats/base/dists/kumaraswamy/median]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-median

[@stdlib/stats/base/dists/kumaraswamy/mode]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-mode

[@stdlib/stats/base/dists/kumaraswamy/skewness]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-skewness

[@stdlib/stats/base/dists/kumaraswamy/stdev]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-stdev

[@stdlib/stats/base/dists/kumaraswamy/variance]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-variance

[@stdlib/stats/base/dists/kumaraswamy/cdf]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-cdf

[@stdlib/stats/base/dists/kumaraswamy/logcdf]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logcdf

[@stdlib/stats/base/dists/kumaraswamy/logpdf]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf

[@stdlib/stats/base/dists/kumaraswamy/pdf]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-pdf

[@stdlib/stats/base/dists/kumaraswamy/quantile]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
