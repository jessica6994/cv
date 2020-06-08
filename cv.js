AOS.init();

$(document).ready(function () {
    $(window).scroll(function () {
        //if scrolled 300px then add class...
        if ($(this).scrollTop() > 200) {
            $(".navbar-brand").removeClass("d-none");
            $(".navbar").removeClass('bg-transparent');
            $(".navbar").addClass('nav-bg');
        } else {
            $(".navar-brand").addClass("d-none");
            $(".navbar").removeClass("nav-bg");
            $(".navbar").addClass('bg-transparent');
        }
    });   
});


var Projects = {
    weather: {
        name: "ExpressWeather",
        tech: "Node.js, NPM, EJS, Express, API, HTML, CSS, Bootstrap 4",
        desc: "This was my first Node/Express project. You can search by city to see the weather in that area. Although very simple it examples my introductory knowledge to back-end JavaScript. I completed this project one Saturday after using this API in one of my bootcamp lessons. So far I have enjoyed learning node but am still very new to it. I haven't been able to deploy this anywhere yet, using my go-daddy hosting account or using the github hosting feature, so I have included a link to the github repository.",
        improvements: "I wasn't focussing on the front-end aspects of this project so need to ensure responsiveness is refined for all devices.It would be great if, similar to the apple weather app, depending on the weather, the background image changed, this is something I think I could implement. I would like to gain a further understanding of using APIs as this would allow me to practice making more complex applications in the future.",
        url: "https://github.com/jessica6994/ExpressWeather"
    },
    films: {
        name: "Film Search Express",
        tech: "Node.js, NPM, EJS, Express, API, HTML, CSS, Bootstrap 4",
        desc: "I made this app using again using an API I had previously used during a bootcamp lesson. I originally used it during a code along but thought I would make my own film search app to explore what I had learnt with the instructor. You can search using any word and the API provided by OMDB (independent of IMDB) will give 10 search results. This project combined requesting from an API and using a for each loop to print the results.",
        improvements: "I would like to learn how to deploy my Node projects. Obvious design and front-end weakness in this project, but just like my ExpressWeather app, I did not focus on the front-end aspects as much as the back-end. I really enjoy using EJS and would love to gain more confidence with JavaScript to help me make more complex projects.",
        url: "https://github.com/jessica6994/Film-Search-Express"
    },
    oscars: {
        name: "Oscar's Inn",
        tech: "HTML, CSS, Bootstrap 4, Javascript/jQuery",
        desc: "I made this project using inspiration from my parent's local pub whose website was in need of some help. I enjoyed making this and used this, particularly the 3 in 1 contact form which at the time was the most complex Javascript I had managed to incorporate into a project. My partner then help me refactor the code, as I was more focussed on the UX rather than DRY principles. This was also the first project I was able to intergrate Google Maps.",
        improvements: "This project loads quite slowly on some pages and I believe this is because of the images. In general I would like to learn more about page speed optimisation. For a simple static site, I feel this would be suitable for a small busisness to utilise, however in order to help the business get the most out of their site, I would be interested to learn more about how to implement SEO, using google analytics and other tools such as 'Screaming Frog'.",
        url: "http://oscarsinn.pixelstitch.net/"
    },
    rgb: {
        name: "RGB Colour Game",
        tech: "HTML, CSS, Javascript",
        desc: "I made this project as part of a code-along exercise on my bootcamp course. This was the first project that allowed me to practice interacting with the DOM.",
        improvements: "I would like to use this project with what I know now as a template to maybe make a 'snap' type card game. It would also be a good opportunity to refactor the code and utilise what I now know about for loops as the code does not follow DRY principles.",
        url: "http://rgb-game.pixelstitch.net/"
    },
    weirdos: {
        name: "Weirddough's Pizza Emporium",
        tech: "HTML, CSS, Bootstrap 4, Javascript/jQuery",
        desc: "I made this homepage as a concept piece for this small, brand-new local business. I offered them a freelance site for for free as they are donating all their profits to the NHS during the coronavirus pandemic as well as donating pizzas to NHS staff, including the emergency assessment unit I used to work on.",
        improvements: "I think this would suite the brand better if the site were more interactive. This is only a concept piece for the Weirddough's team but again I also think the design could be improved on.",
        url: "http://weirddoughlincoln.pixelstitch.net/"
    },
    nessies: {
        name: "Nessie's Dresses",
        tech: "HTML, CSS, Bootstrap 4, Javascript/jQuery",
        desc: "This project was made soon after the Oscar's project - although you can tell I spent less time on this one. I reached out to a local dress stockist near me and made this simple static site with the client in mind. This is hopefully going to be her main site as soon as her current contact runs out.",
        improvements: "Design definitely isn't my strong suit and I think this project could look more professional. Although it is an improvement on what is already being used (I don't think she was able to use the provided CMS properly), it could still use more exciting design ideas to make it look a bit less flat. Making these sites keeps me motivated to learn front-end frameworks such as React.",
        url: "http://nessiesdresses.pixelstitch.net/"
    }
    
}

function showDetails(key) {
    if ($(window).width() < 768){
    location.href = Projects[key].url;
    }else{
        $(".projP").addClass("d-none");
    $(".content").removeClass("d-none").fadeIn();
    $("#projectName").html(Projects[key].name).fadeIn();
    $("#projectTech").html(Projects[key].tech).fadeIn();
    $("#projectDesc").html(Projects[key].desc).fadeIn();
    $("#projectImp").html(Projects[key].improvements).fadeIn();
    $("#projectLink").attr("href", Projects[key].url).fadeIn();
    }
}

var isPink = false;
setInterval(function(){
    if(isPink){
        $(".content h5").css("color","#d2295a");
    }else{
        $(".content h5").css("color","black");
    }
    isPink = !isPink;
}, 1000);
