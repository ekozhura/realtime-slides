function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/haml" instead of "highlight.js/lib/languages/haml.js"'
      );
    }
  }
  emitWarning();
    import lang from './haml.js';
    export default lang;