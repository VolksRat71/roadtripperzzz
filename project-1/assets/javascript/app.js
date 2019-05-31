
$(document).ready(function () {

    // hide page functions upon load
    $("#results-container").hide();
    $(".loadingScreen").hide();
    $("#playBtn").hide();
    $("#pauseBtn").hide();
    $("#authenticate").hide();
    $("#locationDump").show();
    // $("#map").hide();

    // easter egg
    var audio = $("#intermission")[0];
    var checkBox = 0;

    //Initial Values
    var firstName = "";
    var lastName = "";
    var email = "";
    var city = "";
    var state = "";
    var zip = 0;

    // audio controls
    $(document).on("click", "#playBtn", function () {
        event.preventDefault();
        audio.play();
        console.log("Play Audio");
    });

    $(document).on("click", "#pauseBtn", function () {
        event.preventDefault();
        audio.pause();
        console.log("Pause Audio");
    });

    $(document).on("click", "#checkBox", function (){
        checkBox += 1;
    })
    // form submit 
    $(document).on("click", "#loadButton", function () {
        event.preventDefault();

        // form value trims
        var userFirstName = $("#userFirstName").val().trim();
        var userLastName = $("#userLastName").val().trim();
        var userEmail = $("#userEmail").val().trim();
        var userCity = $("#userCity").val().trim();
        var userState = $("#userState").val().trim();
        var userZipcode = $("#userZipcode").val().trim();
        console.log(userFirstName);
        console.log(userLastName);
        console.log(userEmail);
        console.log(userCity);
        console.log(userState);
        console.log(userZipcode);
        
        var renderVacation= function(){
        randomResult= locations[Math.floor(Math.random()* locations.length)];
           console.log(randomResult);
           $("#results-title").text("HERE ARE YOUR RANDOM ROADTRIP RESULTS!");
           $("#placeContent").text("Your Roadtrip Destination:" + " " + randomResult.place);
           $("#coordinatesContent").text("Coordinates:" + " " + randomResult.coordinates)
           $("#terrainContent").text("The Terrain:" + " " + randomResult.terrain);
           $("#descriptionContent").text("A Brief Description:" + " " + randomResult.description);
           $("#weatherContent").html("The Forecast:" + " " + randomResult.weather);

        // adding the map to the on click function
            $('#results-container').empty();
           $('#results-container').append("<iframe id='map_frame' width='600' height='450' frameborder='0' style='border:0'</iframe>");
           $("#map_frame").attr("src","https://www.google.com/maps/embed/v1/directions?key=AIzaSyD-_N_JbKdFWR_zfJ_3RlDbIKs2pIY0-Nw&origin="+userCity+","+userState+"&destination="+randomResult.place+",Oregon");
       
        }
           renderVacation();
           

        // addLocation();
        //form authentication
        // if(userFirstName, userLastName, userEmail, userCity, userState, userZipcode === ""){
        // $('body').append('<style>input[type="text"]::-webkit-input-placeholder{color: red}</style>');
        // $("#authenticate").show();
        // }else{
        // $(".loadingScreen").show();
        // $(".container").hide();

        var renderVacation= function(){
            randomResult= locations[Math.floor(Math.random()* locations.length)];
               console.log(randomResult);
               $("#results-title").text("HERE ARE YOUR RANDOM ROADTRIP RESULTS!");
               $("#placeContent").text("Your Roadtrip Destination:" + " " + randomResult.place);
               $("#coordinatesContent").text("Coordinates:" + " " + randomResult.coordinates)
               $("#terrainContent").text("The Terrain:" + " " + randomResult.terrain);
               $("#descriptionContent").text("A Brief Description:" + " " + randomResult.description);
               $("#weatherContent").html("The Forecast:" + " " + randomResult.weather);
              
        }

        renderVacation();

        // Random location selector
        // var randomResult= locations[Math.floor(Math.random()* locations.length)];
        // $("#results-container").text(randomResult);
        // for(var i=0; i< randomResult.length; i++){
        // $("#results-container").append("<h2>" + randomResult.place + "</h2>")
        // }
        
        // Checkbox value check
        // loading simulator...
        if (checkBox%2 == 0){
        setInterval(function(){$(".loadingScreen").hide(); imageRender();}, 3000); clearInterval();
        }else{
            setInterval(function(){$(".loadingScreen").hide(); imageRender(); $("#playBtn").show();
            $("#pauseBtn").show();}, 14600); clearInterval();
            audio.play(); 
        };
    });

    function imageRender() {
        // console.log(locations[i].image);
        $("#locationDump").append(locations[0].image);
        $("#locationDump").append(`<div class="locationName"> ${locations[0].place}</div>`);
        $("#locationDump").append(`<div class="locationDescription"> ${locations[0].description}</div>`);
    }


    // list of locations
    var locations = [
        // Cam's locations
        {
            place: "Neahkahnie Mountain",
            coordinates: "45.7440° N, 123.9410° W",
            terrain: "Coastal Forest",
            description: "Neahkahnie Mountain is a mountain, or headland, on the Oregon Coast, north of Manzanita in Oswald West State Park overlooking U.S. Route 101. The peak is part of the Northern Oregon Coast Range, which is part of the Oregon Coast Range. It is best known for stories of Spanish treasure said to be buried either at the foot of the mountain, or on its slopes.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.7469,-123.9519/us12/en.js?width=100%&height=350&title=Neahkahnie Mountain&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Neahkahnie Mountain.jpg'>"
        },
        {
            place: "Crack in the Ground",
            coordinates: "43.3336° N, 120.6723° W",
            terrain: "High Desert",
            description: "Crack in the Ground is a volcanic fissure about 2 miles (3.2 km) long  with depths measuring nearly 30 feet (9 m) below ground level in Central Oregon, United States. The eruptions from the Four Craters Lava Field were accompanied by a slight sinking of the older rock surface, forming a shallow, graben-like structure about 2 miles (3.2 km) wide and extending to the south into an old lake basin.",
            weather:  "<script type='text/javascript' src='https://darksky.net/widget/default/43.3327,-120.6712/us12/en.js?width=100%&height=350&title=Crack in the Ground&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Crack in the Ground.jpg'>"
        },
        {
            place: "Metolius Balancing Rocks",
            coordinates: " N 44° 34.672 W 121° 25.315.",
            terrain: "Desert",
            description: "These unique sculptures are the result of three distinctly welded volcanic tuffs settled upon one another and weathered away at different rates.",
            weather:"<script type='text/javascript' src='https://darksky.net/widget/default/44.5779,-121.4218/us12/en.js?width=100%&height=350&title=Metolius Balancing Rocks&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Metolius Balancing Rocks.jpg'>"

        },
        {
            place: "Mount Hood",
            coordinates: "45.3736° N, 121.6960° W",
            terrain: "Forest",
            description: "It is located about 50 miles (80 km) east-southeast of Portland, on the border between Clackamas and Hood River counties. In addition to being Oregon's highest mountain, it is one of the loftiest mountains in the nation based on its prominence.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.3735,-121.6959/us12/en.js?width=100%&height=350&title=Mount Hood&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Mount Hood.jpg'>"

        },
        {
            place: "Crater Lake",
            coordinates: "42.9446° N, 122.1090° W",
            terrain: "Forest",
            description: "Crater Lake is a crater lake in south-central Oregon in the western United States. It is the main feature of Crater Lake National Park and is famous for its deep blue color and water clarity. ",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/42.9415,-122.0988/us12/en.js?width=100%&height=350&title=Crater Lake&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Crater Lake.jpg'>"

        },
        // Sam's locations
        {
            place: "Painted Hills",
            coordinates: "44.6615° N, 120.2730° W",
            terrain: "Desert",
            description: "is one of the three units of the John Day Fossil Beds National Monument, located in Wheeler County, Oregon.Painted Hills is named after the colorful layers of its hills corresponding to various geological eras, formed when the area was an ancient river floodplain.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/44.6476,-120.2607/us12/en.js?width=100%&height=350&title=Painted Hills&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Painted Hills.jpg'>"
        },
        {
            place: "Smith Rock",
            coordinates: "44.3682°N, 121.1406°W",
            terrain: "Desert",
            description: "is an American state park located in central Oregon's High Desert near the communities of Redmond and Terrebonne. Its sheer cliffs of tuff and basalt are ideal for rock climbing of all difficulty levels. Smith Rock is generally considered the birthplace of modern American sport climbing, and is host to cutting-edge climbing routes. It is popular for sport climbing, traditional climbing, multi-pitch climbing, and bouldering.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/44.3638,-121.1466/us12/en.js?width=100%&height=350&title= smith rock, oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Smith Rock.jpg>"

        },
        {
            place: "Ashland",
            coordinates: "42.1946°N, 122.7095°W,",
            terrain: "City",
            description: "is a city in Oregon with a poplulation estimated at 21,000, home to Southern Oregon University and the infamous Shakespeare festival.Enjoy the arts, food, and liverl culture of this awesome city!",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/42.1972,-122.7154/us12/en.js?width=100%&height=350&title=Ashland, or&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Ashland.jpg>"

        },
        {
            place: "Cougar Resovoir Hot Springs",
            coordinates: "44.0830° N, 122.2384° W",
            terrain: "Forest",
            description: "Terwilliger Hot Springs, also known as Cougar Hot Springs, are geothermal pools in the Willamette National Forest in the U.S.state of Oregon, 53 miles(85 km) east of Eugene.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.3012,-122.947/us12/en.js?width=100%&height=350&title=Cougar Resovoir Hot Springs, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Cougar Resovoir Hot Springs.jpg>"

        },
        {
            place: "Portland",
            coordinates: "45.5155° N, 122.6793° W",
            terrain: "Large city",
            description: "is the largest city in the U.S. state of Oregon and has approximately 2.4 million people that live in the Portland metropolitan statistical.  Portland is home to the NBA Trail Blazers, a breadth of art and ServiceUIFrameContext, and plenty of outdoor advenrtures.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.5202,-122.6742/us12/en.js?width=100%&height=350&title=Portland, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Portland.jpg>"

        },
        // Stesha's locations
        {
            place: "West Eagle Meadow Campground (Wallowa-Whitman National Forest)",
            coordinates: "45°20′00″N, 117°00′05″W",
            terrain: "Forest",
            description: "The Wallowa–Whitman National Forest is used for hiking, camping, fishing, hunting, and other recreational activities.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.4224,-117.6177/us12/en.js?width=100%&height=350&title=Wallowa-Whitman National Forest, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/West Eagle Meadow Campground.jpg>"

        },
        {
            place: "Dixie Campground (Malheur National Forest)",
            terrain: "44.534823 N, 118.5879 W",
            terrain: "Wooded (Ponderosa)",
            description: "This is a great destination for berry picking, it is also a wonderful base camp for anyone wanting to hike, hunt or just explore the Malheur National Forest.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/44.2049,-119.327/us12/en.js?width=100%&height=350&title=Malheur National Forest, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Dixie Campground.jpg>"

        },
        {
            place: "Haystack Rock, Cannon Beach",
            coordinates: "43.0861°N, 124.4383°W",
            terrain: "Beach",
            description: "Visitors to Haystack Rock can view many species of marine wildlife in their natural habitat during low tide.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.8844,-123.9684/us12/en.js?width=100%&height=350&title=Haystack Rock, Cannon Beach, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Haystack Rock.jpg>"

        },
        // Nate's Locations
        {
            name: "Devils Punch Bowl",
            coordinates: "44.7472°N, 122.0637°W",
            terrain: "Coast",
            description: "Along the beautiful Oregon Coast. It is centered on a large bowl naturally carved in a rock headland which is partially open to the Pacific Ocean.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/43.7474,-118.0841/us12/en.js?width=100%&height=350&title=Devils Punch Bowl, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Devils Punch Bowl.jpg>"

        },
        {
            name: "Multnomah Falls",
            coordinates: "45.5762°N, 122.1158°W",
            terrain: "Forest",
            description: "Two consecutive waterfalls & beautiful hiking with a bridge along the Columbia Gorge. Visit the Multnomah Falls lodge built in 1925.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/45.5759,-122.1155/us12/en.js?width=100%&height=350&title=Multnomah Falls, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Multnomah Falls.jpg>"

        },
        {
            name: "Oregon Badlands Wilderness",
            coordinates: "44.0112°N, 121.0009°W",
            terrain: "Desert",
            description: "The area is known for igneous castle-like rock formations, harsh terrain, ancient Juniper trees, sagebrush, and extensive arid land. A great place to hike and camp.",
            weather: "<script type='text/javascript' src='https://darksky.net/widget/default/44.0033,-121.0231/us12/en.js?width=100%&height=350&title=Oregon Badlands Wilderness, Oregon&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>",
            image: "<img class='locationImage' src='./assets/images/locationImages/Oregon Badlands Wilderness.jpg>"

        }
    ]

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
            userEmail: email,
            userCity: city,
            userState: state,
            userZipcode: zip
        })
    });


    // proof of ending script without bugs
    console.log("end of script");



