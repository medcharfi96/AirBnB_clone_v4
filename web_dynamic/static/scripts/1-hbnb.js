const $ = window.$;
$(document).ready(function () {
  const zbib = {};
  $('INPUT:checkbox').click(function () {
    if ($(this).this.props('checked') === false) {
      delete zbib[$(this).data('id')];
    } else {
      zbib[$(this).data('id')] = $(this).data('name');
    }
    const val = Object.values(zbib);
    if (val.length >= 1) {
      $('body > div > section.filters > div.amenities > h4').text(val.join(', '));
    }
  });
});

