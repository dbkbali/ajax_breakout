$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  // 
  // alert('Hello World')

  // Apis lets use one - good source here 
  // 
  // Celebinfo  -------
  // 
  // https://market.mashape.com/daxeel/celebinfo#
  // 
  // END Points Birthdays https://daxeel-celebinfo-v1.p.mashape.com/date/{date}/{month}
  //  GET https://daxeel-celebinfo-v1.p.mashape.com/custom/{search_type} - today tommorrow yesterday
  //   X-mashup-key    eeh0PJsgSwmshRhoXCukn2DX8veUp1eyGcejsnX6KKF5R6gKOy
  //  RETURNS  JSON       {
        //     "age": 33,
        //     "birth_place": "Utah",
        //     "birth_sign": "Virgo",
        //     "birth_year": "1983",
        //     "birthday": "August 23",
        //     "name": "Stacy Hinojosa",
        //     "occupation": "YouTube Star",
        //     "photo_url": "http://www.famousbirthdays.com/thumbnails/hinojosa-stacy-large.jpg"
        // },
  // 
  var root_url = 'https://daxeel-celebinfo-v1.p.mashape.com/custom/'  // custom/{search_type}

  // $.getJson

  // var data = "tommorrow"

  // $.getJSON(root_url, data, function (response) {
  //   console.log(response)
  // })
  // 
  // $.ajax 
  // $.ajax({
  //     beforeSend: function(xhr) {
  //        xhr.setRequestHeader("X-Mashape-Key", "eeh0PJsgSwmshRhoXCukn2DX8veUp1eyGcejsnX6KKF5R6gKOy"); // Enter here your Mashape key
  //        },
  //     url: root_url + 'today',
  //     method: 'GET',
  //     dataType: 'json',
  //     success: function(response) { 
  //             console.log(response);
  //         },
  //     error: function() { alert('boo!'); }
       
  //   });

});
