var premiereSection = document.querySelector("#premiereSection")
	var fond = document.querySelector("#fond")
	var carreBlanc = document.querySelector("#carreBlanc")
	var premiereSectionDroite = document.querySelectorAll('.premiereSectionDroite')
	var animeOpac = document.querySelectorAll(".animeOpac")
	var titreChargement = document.querySelector(".titreChargement")
	var nav = document.querySelector(".navPc")
	var animeOpacBas = document.querySelectorAll(".animeOpacBas")
	
	titreChargement.animate([
		// keyframes
			{opacity:1,transform: 'translateY(0%)'},
			{opacity:0,transform: 'translateY(-125%)'}
			
		],{
			// timing options
			delay:1000,
			duration:1000,
			fill: "forwards"
		});

	premiereSection.animate([
		// keyframes
			
			{ opacity: 1},
			{ opacity: 0}
			
		],{
			// timing options
			delay:1000,
			duration:1000,
			easing: "ease-in-out",
			fill: "forwards"
		});

  	fond.animate([
		// keyframes
		{backgroundSize:"150% 170%"},
		{backgroundSize:"110% 130%"}
			
		],{
		// timing options
		duration:800,
		delay:1000,
		easing: "ease-in-out",
		fill: "forwards"
	});
	
	carreBlanc.animate([
			// keyframes
		{width: "115vmin"},
		{width: "0%"}
		],{
			duration:800,
			delay:1900,
			easing: "ease-in-out",
			fill: "forwards"
		});

	premiereSectionDroite.forEach(element => {
		element.animate([
			// keyframes
			{ transform: 'translateX(100%)'},
			{ transform: 'translateX(0)'}
			],{
				// timing options
				duration:800,
				delay:2610,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});

	var prums = document.querySelector(".prums")
	prums.animate([
		// keyframes
		{ opacity: '1'},
		{ opacity: '0'}
		],{
		// timing options
		duration:1000,
		delay:3200,
		easing: "ease-in-out",
		fill:"forwards"
	});

		
	var seconds = document.querySelector(".seconds")
				
	seconds.animate([
		// keyframes
		{ opacity: '0'},
		{ opacity: '1'}
		],{
		// timing options
		duration:1000,
		delay:3200,
		easing: "ease-in-out",
		fill:"forwards"
	});

	/* APPARITION DIAGONALE */

	animeOpac.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '0',transform: 'translate(5%, -5%)'},
			{ opacity: '1',transform: 'translate(0 , 0)'}
			],{
				// timing options
				duration:700,
				delay:4000,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});
		
	nav.animate([
	// keyframes
		{ opacity: '0',transform: 'translate(-5%, -5%)'},
		{ opacity: '1',transform: 'translate(0 , 0)'}
	],{
		// timing options
		duration:700,
		delay:4000,
		easing: "ease-in-out",
		fill:"forwards"
	});

	animeOpacBas.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '0',transform: 'translateY(20%)'},
			{ opacity: '1',transform: 'translateY(0)'}
			],{
				// timing options
				duration:700,
				delay:4000,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});
		
	setTimeout(() => {
		premiereSection.className="d-none"
	}, 4200);


	let page = 0;
      let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
      let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      let done = Math.round(limit/vh)-1;
      
    let clock = 0;
    window.onwheel = function () {
        //console.log(clock);
        if(clock == 0){
        clock = 1;
        
        let pos = event.deltaY;
        let scroll=0;  
        //console.log(event.deltaY);
        //console.log(scroll);
            let go = (event.deltaY < 0 ) ? -1 : +1;
            page = page + go;
            if(page < 0 )page = 0;
            if(page > done) page = done;
            //console.log(page);
                    
      $('html').animate({
        scrollTop: vh*page
      },{duration:700},'linear');
        setTimeout(function(){clock = 0}, 800);
       
    }
    }