
$(document).ready(function () {

    // hide page functions upon load
    
    $("#results-container").hide();
    $(".loadingScreen").hide();
    $("#playBtn").hide();
    $("#pauseBtn").hide();
    $("#authenticate").hide();
    $("#locationDump").show();
    $("#finalPage").hide();

    // easter egg
    var audio = $("#intermission")[0];
    var checkBox = 0;

    //Initial Values
    var firstName = "";
    var lastName = "";
    var email = "";
    var city = "";
    var state = "";

    // audio controls
    $(document).on("click", "#playBtn", function () {
        event.preventDefault();
        audio.play();
        // console.log("Play Audio");
    });

    $(document).on("click", "#pauseBtn", function () {
        event.preventDefault();
        audio.pause();
        // console.log("Pause Audio");
    });

    $(document).on("click", "#checkBox", function (){
        checkBox += 1;
    })
    // form submit 
    $(document).on("click", "#loadButton", function () {
        event.preventDefault();
       
        // form value trims
        firstName = $("#userFirstName").val().trim();
        lastName = $("#userLastName").val().trim();
        city = $("#userCity").val().trim();
        state = $("#userState").val().trim();
        
        
        // form authentication
        if(firstName, lastName, city, state === ""){
            $('body').append('<style>input[type="text"]::-webkit-input-placeholder{color: red}</style>');
            $("#authenticate").show();
        } else {
            $(".loadingScreen").show();
            $(".formCard").hide();

            // Checkbox value check
            // loading simulator...
            if (checkBox%2 == 0){
            setInterval(function(){$(".loadingScreen").hide(); clearInterval();  $("#finalPage").show();}, 3000); 
        }else{
            audio.play(); 
            setInterval(function(){$(".loadingScreen").hide(); $("#pauseBtn").show(); $("#playBtn").show(); clearInterval(); $("#finalPage").show();}, 14600);
        };

        // weather API stuff DO NOT DELERTE ///
        var location= locations[Math.floor(Math.random()* locations.length)];
        var lati= location.lati;
        var longi= location.longi;
        // console.log(location, lati, longi);
        function weatherReport() {
            var apiKey       = '998f56179b95a092c3fac99f4273aaab',
            url          = 'https://api.darksky.net/forecast/'
            queryURL     = "https://cors-anywhere.herokuapp.com/" + url + apiKey + "/" + lati + "," + longi;
            // console.log(queryURL);
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response){
                console.log(response);
                console.log(response.daily.data);
                $("#text-results-container").append("<h4>" + response.daily.summary + "</h4>") 
            })
        }

        weatherReport()

// this generates a random location //
        var renderVacation= function(){
            randomResult= locations[Math.floor(Math.random()* locations.length)];
            // console.log(randomResult);
            $("#results-title").text("HERE ARE YOUR RANDOM ROADTRIP RESULTS!");
            $("#placeContent").text("Your Roadtrip Destination:" + " " + randomResult.place);
            $("#terrainContent").text("The Terrain:" + " " + randomResult.terrain);
            $("#descriptionContent").text("A Brief Description:" + " " + randomResult.description);
            $("#weatherContent").html("The Forecast:" + " " + randomResult.weather);
            $('#image').attr("src",randomResult.image)
            
            var mapUrl = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyD-_N_JbKdFWR_zfJ_3RlDbIKs2pIY0-Nw&origin="+userCity+userState+"&destination="+randomResult.place


            $('#results-container').show();
            $('#map_frame').attr("src",mapUrl);
            // console.log(mapUrl);
        }
        renderVacation();
        $('#form').hide();
    $('#parnetMapContainer').show();
    
    
        
        //FIREBASE
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDxMo9zE0YGmDVzh6O0BHDPA9ClufzCQ0E",
            authDomain: "project-1-e9716.firebaseapp.com",
            databaseURL: "https://project-1-e9716.firebaseio.com",
            projectId: "project-1-e9716",
            storageBucket: "project-1-e9716.appspot.com",
            messagingSenderId: "359911792247",
            appId: "1:359911792247:web:35b92d2cc78970ac"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        var database = firebase.database();

        //push values to
        database.ref().push({
            userFirstName: firstName,
            userLastName: lastName,
            userCity: city,
            userState: state
        })
        };

        //MODAL
        $("#emailButton").on("click", function (event) {

            //get values from form
            email = $("#userEmail").val().trim();
            console.log(email);
            function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
              }
              if (isEmail(email)){
                  console.log("email is valid");
                  //push values to
      
                  database.ref().push({
                  userEmail: email
                  })
              }
        });

        //Send user name to Modal
        database.ref().limitToLast(1).on("child_added", function(snapshot){ 
            var data = snapshot.val();

            var newUser = data.userFirstName;

            $(".userID_place").text(newUser);
        })
    });


    // list of locations
    var locations = [
        // Cam's locations
        {
            place: "Neahkahnie Mountain",
            lati: "45.7440",
            longi: "-123.9410",
            terrain: "Coastal Forest",
            description: "Neahkahnie Mountain is a mountain, or headland, on the Oregon Coast, north of Manzanita in Oswald West State Park overlooking U.S. Route 101. The peak is part of the Northern Oregon Coast Range, which is part of the Oregon Coast Range. It is best known for stories of Spanish treasure said to be buried either at the foot of the mountain, or on its slopes.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.7469,-123.9519/us12/en.js?width=100%&height=350&title=Neahkahnie Mountain&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Neahkahnie Mountain.jpg'
        },
        {
            place: "Crack in the Ground",
            lati: "43.3336", 
            longi: "-120.6723",
            terrain: "High Desert",
            description: "Crack in the Ground is a volcanic fissure about 2 miles (3.2 km) long  with depths measuring nearly 30 feet (9 m) below ground level in Central Oregon, United States. The eruptions from the Four Craters Lava Field were accompanied by a slight sinking of the older rock surface, forming a shallow, graben-like structure about 2 miles (3.2 km) wide and extending to the south into an old lake basin.",
            weather:  "<script type='text/javascript' src='https://darksky.net/widget/default/43.3327,-120.6712/us12/en.js?width=100%&height=350&title=Crack in the Ground&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Crack in the Ground.jpg'
        },
        {
            place: "Metolius Balancing Rocks",
            lati: "44.34.672",
            longi: "-121.25315",
            terrain: "Desert",
            description: "These unique sculptures are the result of three distinctly welded volcanic tuffs settled upon one another and weathered away at different rates.",
            weather:"<script type='text/javascript' src='https://darksky.net/widget/default/44.5779,-121.4218/us12/en.js?width=100%&height=350&title=Metolius Balancing Rocks&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Metolius Balancing Rocks.jpg'

        },
        {
            place: "Mount Hood",
            lati: "45.3736", 
            longi: "-121.6960",
            terrain: "Forest",
            description: "It is located about 50 miles (80 km) east-southeast of Portland, on the border between Clackamas and Hood River counties. In addition to being Oregon's highest mountain, it is one of the loftiest mountains in the nation based on its prominence.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.3735,-121.6959/us12/en.js?width=100%&height=350&title=Mount Hood&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Mount Hood.jpg'

        },
        {
            place: "Crater Lake",
            lati: "42.9446", 
            longi: "-122.1090",
            terrain: "Forest",
            description: "Crater Lake is a crater lake in south-central Oregon in the western United States. It is the main feature of Crater Lake National Park and is famous for its deep blue color and water clarity. ",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/42.9415,-122.0988/us12/en.js?width=100%&height=350&title=Crater Lake&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Crater Lake.jpg'

        },
        // Sam's locations
        {
            place: "Painted Hills",
            lati: "44.6615",
            longi:"-120.2731",
            terrain: "Desert",
            description: "is one of the three units of the John Day Fossil Beds National Monument, located in Wheeler County, Oregon.Painted Hills is named after the colorful layers of its hills corresponding to various geological eras, formed when the area was an ancient river floodplain.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/44.6476,-120.2607/us12/en.js?width=100%&height=350&title=Painted Hills&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Painted Hills.jpg'
        },
        {
            place: "Smith Rock",
            lati: "44.3682",
            longi: "-121.1406",
            terrain: "Desert",
            description: "is an American state park located in central Oregon's High Desert near the communities of Redmond and Terrebonne. Its sheer cliffs of tuff and basalt are ideal for rock climbing of all difficulty levels. Smith Rock is generally considered the birthplace of modern American sport climbing, and is host to cutting-edge climbing routes. It is popular for sport climbing, traditional climbing, multi-pitch climbing, and bouldering.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/44.3638,-121.1466/us12/en.js?width=100%&height=350&title= smith rock, oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Smith Rock.jpg'

        },
        {
            place: "Ashland",
            lati: "42.1946",
            longi: "-122.7095",
            terrain: "City",
            description: "is a city in Oregon with a poplulation estimated at 21,000, home to Southern Oregon University and the infamous Shakespeare festival.Enjoy the arts, food, and liverl culture of this awesome city!",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/42.1972,-122.7154/us12/en.js?width=100%&height=350&title=Ashland, or&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Ashland.jpg'

        },
        {
            place: "Cougar Resovoir Hot Springs",
            lati: "44.0830",
            longi: "-122.2384",
            terrain: "Forest",
            description: "Terwilliger Hot Springs, also known as Cougar Hot Springs, are geothermal pools in the Willamette National Forest in the U.S.state of Oregon, 53 miles(85 km) east of Eugene.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.3012,-122.947/us12/en.js?width=100%&height=350&title=Cougar Resovoir Hot Springs, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Cougar Resovoir Hot Springs.jpg'

        },
        {
            place: "Portland",
            lati: "45.5155",
            longi: "-122.6793",
            terrain: "Large city",
            description: "is the largest city in the U.S. state of Oregon and has approximately 2.4 million people that live in the Portland metropolitan statistical.  Portland is home to the NBA Trail Blazers, a breadth of art and ServiceUIFrameContext, and plenty of outdoor advenrtures.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.5202,-122.6742/us12/en.js?width=100%&height=350&title=Portland, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Portland.jpg'

        },
        // Stesha's locations
        {
            place: "West Eagle Meadow Campground (Wallowa-Whitman National Forest)",
            lati: "45.20′00",
            longi: "-117.00′05",
            terrain: "Forest",
            description: "The Wallowa–Whitman National Forest is used for hiking, camping, fishing, hunting, and other recreational activities.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.4224,-117.6177/us12/en.js?width=100%&height=350&title=Wallowa-Whitman National Forest, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/West Eagle Meadow Campground.jpg'

        },
        
        {
            place: "Haystack Rock, Cannon Beach",
            lati: "43.0861",
            longi: "",
            terrain: "Beach",
            description: "Visitors to Haystack Rock can view many species of marine wildlife in their natural habitat during low tide.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.8844,-123.9684/us12/en.js?width=100%&height=350&title=Haystack Rock, Cannon Beach, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Haystack Rock.jpg'

        },
        // Nate's Locations
        {
            place: "Devils Punch Bowl",
            lati: "44.7472",
            longi: "-122.0637",
            terrain: "Coast",
            description: "Along the beautiful Oregon Coast. It is centered on a large bowl naturally carved in a rock headland which is partially open to the Pacific Ocean.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/43.7474,-118.0841/us12/en.js?width=100%&height=350&title=Devils Punch Bowl, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Devils Punch Bowl.jpg'

        },
        {
            place: "Multnomah Falls",
            lati: "45.5762",
            longi: "-122.1158",
            terrain: "Forest",
            description: "Two consecutive waterfalls & beautiful hiking with a bridge along the Columbia Gorge. Visit the Multnomah Falls lodge built in 1925.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.5759,-122.1155/us12/en.js?width=100%&height=350&title=Multnomah Falls, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: './assets/images/locationImages/Multnomah Falls.jpg'

        },
        
    ]

    // proof of ending script without bugs
    console.log("end of script");
    
});