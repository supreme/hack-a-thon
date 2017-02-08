let kbTest = $('#kb-test');
let kbApi = $('#kb-api');
for (var i = 0; i < 90; i++) {
  kbTest.append('<div class="bar" data-toggle="tooltip" title="February 7th, 2017"></div>');

  if (i % 10) {
    kbApi.append('<div class="bar" data-toggle="tooltip" title="February 7th, 2017"></div>');
  } else {
    kbApi.append('<div class="bar yellow" data-toggle="tooltip" title="February 7th, 2017"></div>');
  }
}

$("[data-toggle=tooltip]").tooltip();
