function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/tap" instead of "highlight.js/lib/languages/tap.js"'
      );
    }
  }
  emitWarning();
    import lang from './tap.js';
    export default lang;