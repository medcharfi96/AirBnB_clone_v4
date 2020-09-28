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

const tabzebi = 'http://0.0.0.0:5001/api/v1/status/';
$.get(tabzebi, function (rpe) {
  if (rpe.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});

$.ajax({
  type: 'POST',
  contentType: 'application/json',
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  data: '{}',
  dataType: 'json',
  success: function (blasahamemet) {
    for (const place of blasahamemet) {
      $('SECTION.places').append(
`<article>
<div class="title_box">
<h2>${place.name}</h2>
<div class="price_by_night">
${place.price_by_night}
</div>
</div>
<div class="information">
<div class="max_guest">
${place.max_guest} Guest${(place.max_guest !== 1 ? 's' : '')}
</div>
<div class="number_rooms">
${place.number_rooms} Bedroom${(place.number_rooms !== 1 ? 's' : '')}
</div>
<div class="number_bathrooms">
${place.number_bathrooms} Bathroom${(place.number_bathrooms !== 1 ? 's' : '')}
</div>
<div class="description">
${place.description}
</div>
</div>
</article>`);
    }
  }
});
