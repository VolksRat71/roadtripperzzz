$(document).ready(function () {

    // hide page functions upon load
    $("#results-container").hide();
    $(".loadingScreen").hide();
    $("#playBtn").hide();
    $("#pauseBtn").hide();
    $("#authenticate").hide();
    $("#locationDump").show();

    // easter egg
    var audio = $("#intermission")[0];
    var checkBox = 0;

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
    
        //form authentication
        if(userFirstName, userLastName, userEmail, userCity, userState, userZipcode === ""){
        $('body').append('<style>input[type="text"]::-webkit-input-placeholder{color: red}</style>');
        $("#authenticate").show();
        }else{
        $(".loadingScreen").show();
        $(".container").hide();

        // Random location selector
        var randomResult= locations[Math.floor(Math.random()* locations.length)];
        $("#results-container").text(randomResult);
        for(var i=0; i< randomResult.length; i++){
        $("#results-container").append("<h2>" + randomResult.place + "</h2>")
        }
        
        // Checkbox value check
        // loading simulator
        if (checkBox%2 == 0){
        setInterval(function(){$(".loadingScreen").hide(); $("#results-container").show();}, 3000);
        }else{
            setInterval(function(){$(".loadingScreen").hide(); $("#results-container").show();$("#playBtn").show();
            $("#pauseBtn").show();}, 14600);
            audio.play();    
        };}
    });

    // list of locations
    var locations = [
        // Cam's locations
        {
            place: "Neahkahnie Mountain",
            coordinates: "45.7440° N, 123.9410° W",
            terrain: "Coastal Forest",
            description: "Neahkahnie Mountain is a mountain, or headland, on the Oregon Coast, north of Manzanita in Oswald West State Park overlooking U.S. Route 101. The peak is part of the Northern Oregon Coast Range, which is part of the Oregon Coast Range.[1] It is best known for stories of Spanish treasure said to be buried either at the foot of the mountain, or on its slopes."
        },
        {
            place: "Crack in the Ground",
            coordinates: "43.3336° N, 120.6723° W",
            terrain: "High Desert",
            description: "Crack in the Ground is a volcanic fissure about 2 miles (3.2 km) long  with depths measuring nearly 30 feet (9 m) below ground level in Central Oregon, United States. The eruptions from the Four Craters Lava Field were accompanied by a slight sinking of the older rock surface, forming a shallow, graben-like structure about 2 miles (3.2 km) wide and extending to the south into an old lake basin."
        },
        {
            place: "Metolius Balancing Rocks",
            coordinates: " N 44° 34.672 W 121° 25.315.",
            terrain: "Desert",
            description: "These unique sculptures are the result of three distinctly welded volcanic tuffs settled upon one another and weathered away at different rates."
        },
        {
            place: "Mount Hood",
            coordinates: "45.3736° N, 121.6960° W",
            terrain: "Forest",
            description: "It is located about 50 miles (80 km) east-southeast of Portland, on the border between Clackamas and Hood River counties. In addition to being Oregon's highest mountain, it is one of the loftiest mountains in the nation based on its prominence."
        },
        {
            place: "Crater Lake",
            coordinates: "42.9446° N, 122.1090° W",
            terrain: "Forest",
            description: "Crater Lake is a crater lake in south-central Oregon in the western United States. It is the main feature of Crater Lake National Park and is famous for its deep blue color and water clarity."
        },
        // Sam's locations
        {
            place: "Painted Hills",
            coordinates: "44.6615° N, 120.2730° W",
            terrain: "Desert",
            description: "is one of the three units of the John Day Fossil Beds National Monument, located in Wheeler County, Oregon.Painted Hills is named after the colorful layers of its hills corresponding to various geological eras, formed when the area was an ancient river floodplain."
        },
        {
            place: "Smith Rock",
            coordinates: "44.3682°N, 121.1406°W",
            terrain: "Desert",
            description: "is an American state park located in central Oregon's High Desert near the communities of Redmond and Terrebonne. Its sheer cliffs of tuff and basalt are ideal for rock climbing of all difficulty levels. Smith Rock is generally considered the birthplace of modern American sport climbing, and is host to cutting-edge climbing routes. It is popular for sport climbing, traditional climbing, multi-pitch climbing, and bouldering."
        },
        {
            place: "Ashland",
            coordinates: "42.1946°N, 122.7095°W,",
            terrain: "City",
            description: "is a city in Oregon with a poplulation estimated at 21,000, home to Southern Oregon University and the infamous Shakespeare festival.Enjoy the arts, food, and liverl culture of this awesome city!"
        },
        {
            place: "Cougar Resovoir Hot Springs",
            coordinates: "44.0830° N, 122.2384° W",
            terrain: "Forest",
            description: "Terwilliger Hot Springs, also known as Cougar Hot Springs, are geothermal pools in the Willamette National Forest in the U.S.state of Oregon, 53 miles(85 km) east of Eugene."
        },
        {
            place: "Portland",
            coordinates: "45.5155° N, 122.6793° W",
            terrain: "Large city",
            description: "is the largest city in the U.S. state of Oregon and has approximately 2.4 million people that live in the Portland metropolitan statistical.  Portland is home to the NBA Trail Blazers, a breadth of art and ServiceUIFrameContext, and plenty of outdoor advenrtures."
        },
        // Stesha's locations
        {
            place: "West Eagle Meadow Campground (Wallowa-Whitman National Forest)",
            coordinates: "45°20′00″N, 117°00′05″W",
            terrain: "Forest",
            description: "The Wallowa–Whitman National Forest is used for hiking, camping, fishing, hunting, and other recreational activities."
        },
        {
            place: "Dixie Campground (Malheur National Forest)",
            terrain: "44.534823 N, 118.5879 W",
            terrain: "Wooded (Ponderosa)",
            description: "This is a great destination for berry picking, it is also a wonderful base camp for anyone wanting to hike, hunt or just explore the Malheur National Forest."
        },
        {
            place: "Haystack Rock, Cannon Beach",
            coordinates: "43.0861°N, 124.4383°W",
            terrain: "Beach",
            description: "Visitors to Haystack Rock can view many species of marine wildlife in their natural habitat during low tide."
        },
        // Nate's Locations
        {
            name: "Devils Punch Bowl",
            coordinates: "44.7472°N, 122.0637°W",
            terrain: "Coast",
            description: "Along the beautiful Oregon Coast. It is centered on a large bowl naturally carved in a rock headland which is partially open to the Pacific Ocean."
        },
        {
            name: "Multnomah Falls",
            coordinates: "45.5762°N, 122.1158°W",
            terrain: "Forest",
            description: "Two consecutive waterfalls & beautiful hiking with a bridge along the Columbia Gorge. Visit the Multnomah Falls lodge built in 1925."
        },
        {
            name: "Oregon Badlands Wilderness",
            coordinates: "44.0112°N, 121.0009°W",
            terrain: "Desert",
            description: "The area is known for igneous castle-like rock formations, harsh terrain, ancient Juniper trees, sagebrush, and extensive arid land. A great place to hike and camp."
        }
    ]

    // proof of ending script without bugs
    console.log("end of script");

});