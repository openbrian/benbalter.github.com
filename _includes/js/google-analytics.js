!function(){jQuery(document).ready(function(a){return a('a[href^="mailto:"]').click(function(){return _gaq.push(["_trackEvent","Email","Click",a(this).attr("href")])}),a('a[href$="zip"],a[href$="pdf"],a[href$="doc"],a[href$="docx"],a[href$="xls"],a[href$="xlsx"],a[href$="ppt"],a[href$="pptx"],a[href$="txt"],a[href$="csv"]').click(function(){var b;return b=a(this).attr("href"),_gaq.push(["_trackEvent","Download",b.match(/[^.]+$/),b])}),a('a[href^="http"]').click(function(){return this.hostname!==location.hostname?_gaq.push(["_trackEvent","External Link","Click",a(this).attr("href")]):void 0})})}.call(this);