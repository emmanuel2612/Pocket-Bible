window.onload = () => {


    /* HTML ELEMENTS */

    var pageBody = document.getElementById("main");

    var arrow = document.getElementById("arrow");

    var welcomeButton = document.getElementById("welcome-button");
    var welcomeBox = document.getElementById("welcome-box");

    var introQuestion = document.getElementById("intro-question");

    var angryButton = document.getElementById("angry");
    var anxiousButton = document.getElementById("anxious");
    var lowButton = document.getElementById("low");
    var lonelyButton = document.getElementById("lonely");

    const nextVerseButton = document.querySelector(".box-button");

    const bibleBox = document.querySelector(".happy-bible-box");

    var pageTitle = document.getElementById("title");
    var pageVerse = document.getElementById("verse");

    /* END OF HTML ELEMENTS*/




    welcomeButton.onclick = () => {
        welcomeBox.style.display = "none";
        introQuestion.style.display = "flex";
    }

    arrow.onclick = () => {
        arrow.style.display = "none";
        introQuestion.style.display = "flex";
        bibleBox.style.display = "none";
        pageBody.style.backgroundColor = "#191919";

    }


    

    

    changeBodyColor = () => {
        const backgroundColors = [/*blue*/"#00cec9", /*pale orange*/"#e17055", /*dark green*/"#00b894"];
        let randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];  /*Put this INSIDE the changeBody function so it runs everytime the next verse button is clicked.*/
        pageBody.style.backgroundColor = randomColor;
    }

    
   


    /*ANGRY VERSES ARAY*/

    const angryVerses = [

        {
            title: "Ephesians 4:26-27 ",
            verse: "In your anger do not sin. Do not let the sun go down while you are still angry, and do not give the devil a foothold."
        },

        {
            title: "Proverbs 10:12 ",
            verse: "Hatred stirs up conflict but love covers over all wrongs."
        },

        {
            title: "John 15:11",
            verse: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry."
        },

        {
            title: "2 Corinthians 6:10",
            verse: "Our hearts ache, but we always have joy. We are poor, but we give spiritual riches to others. We own nothing, and yet we have everything."
        },

        {
            title: "Proverbs 29:11",
            verse: "Fools give full vent to their rage, but the wise bring calm in the end."
        },

        {
            title: "Psalm 37:8",
            verse: "Don’t give in to worry or anger; it only leads to trouble."
        },

        {
            title: "Ecclesiastes 7:9",
            verse: "Keep your temper under control; it is foolish to harbor a grudge."
        },

        {
            title: "Colossians 3:8",
            verse: "But now you must get rid of all these things: anger, passion, and hateful feelings. No insults or obscene talk must ever come from your lips. "
        },

        {
            title: "Proverbs 14:17",
            verse: "People with a hot temper do foolish things; wiser people remain calm."
        },

        {
            title: "Ephesians 4:31",
            verse: "Get rid of all bitterness, passion, and anger. No more shouting or insults, no more hateful feelings of any sort."
        },

        {
            title: "2 Timothy 2:23-25",
            verse: "But keep away from foolish and ignorant arguments; you know that they end up in quarrels. As the Lord’s servant, you must not quarrel. You must be kind toward all, a good and patient teacher, who is gentle as you correct your opponents, for it may be that God will give them the opportunity to repent and come to know the truth. "
        },

        {
            title: "Proverbs 29:22",
            verse: "People with quick tempers cause a lot of quarreling and trouble."
        },

        {
            title: "James 1:20",
            verse: "for the anger of man does not achieve the righteousness of God."
        },

        {
            title: "Proverbs 15:18",
            verse: "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel."
        }


    ];

    console.log(angryVerses);

    /* END OF ANGRY VERSES ARRAY*/




    /*ANGRY PROGRAM*/

    angryButton.onclick = () => {

        introQuestion.style.display = "none";
        arrow.style.display = "flex";
        bibleBox.style.display = "block";
        changeAngryText();                  /*Randomize text */
        changeBodyColor();

        nextVerseButton.onclick = () => {
            bibleBox.classList.add("fade-out");
            setTimeout(changeAngryText, 300); /*Change text after 300ms while it's faded so it shows the new text when fade-out class is removed*/
            setTimeout(changeBodyColor,350);

        }

        bibleBox.ontransitionend = () =>{
            bibleBox.classList.remove("fade-out");
        }

    }


    changeAngryText = () => {
        let randomVerse = angryVerses[Math.floor(Math.random() * angryVerses.length)]; /* Gets a random verse object */
        let newTitle = randomVerse.title; /* Puts random verse title in variable to call in innerHTML*/
        let newVerse = randomVerse.verse; /* Puts random verse verse in variable to call in innerHTML*/

        pageTitle.innerHTML = newTitle;
        pageVerse.innerHTML = newVerse;


    }



    /*END OF ANGRY PROGRAM*/






    /*ANXIOUS VERSES ARRAY*/

    const anxiousVerses = [

        {
            title: "Isaiah 41:10",
            verse: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
        },

        {
            title: "John 14:1",
            verse: "Do not let your hearts be troubled. You believe in God; believe also in me (Jesus)."
        },

        {
            title: "Psalm 138:8",
            verse: "The LORD will vindicate me; your love, LORD, endures forever— do not abandon the works of your hands."
        },

        {
            title: "Jeremiah 17:7-8",
            verse: "But blessed is the one who trusts in the LORD, whose confidence is in him. 8 They will be like a tree planted by the water that sends out its roots by the stream. It does not fear when heat comes; its leaves are always green. It has no worries in a year of drought and never fails to bear fruit."
        },

        {
            title: "John 14:27",
            verse: "Peace is what I leave with you; it is my own peace that I give you. I do not give it as the world does. Do not be worried and upset; do not be afraid."
        },

        {
            title: "Philippians 4:6-7",
            verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.  And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
        },

        {
            title: "2 Timothy 1:7",
            verse: "For God has not given us a spirit of fear, but of power and of love and of a sound mind."
        },

        {
            title: "1 John 4:18",
            verse: "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love."
        },

        {
            title: "Isaiah 43:1",
            verse: "But now, this is what the Lord says…Fear not, for I have redeemed you; I have summoned you by name; you are mine."

        },

        {
            title: "Luke 12:22-26",
            verse: "Do not worry about your life, what you will eat; or about your body, what you will wear.  Life is more than food, and the body more than clothes.  Consider the ravens: They do not sow or reap, they have no storeroom or barn; yet God feeds them. And how much more valuable you are than birds!  Who of you by worrying can add a single hour to his life?  Since you cannot do this very little thing, why do you worry about the rest?"

        },

        {
            title: "Joshua 1:9",
            verse: "Have I not commanded you? Be strong and courageous. Do not be terrified; do not be discouraged, for the Lord your God will be with you wherever you go."
        },

        {
            title: "Matthew 6:34",
            verse: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."
        },

        {
            title: "1 Peter 5:6-7",
            verse: "Humble yourselves, then, under God’s mighty hand, so that he will lift you up in his own good time.  Leave all your worries with him, because he cares for you."
        },

        {
            title: "Psalm 55:22",
            verse: "Cast your cares on the Lord and he will sustain you; he will never let the righteous fall."
        },

        {
            title: "Deuteronomy 31:6",
            verse: "Be strong and courageous.  Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you."
        },

        {
            title: "Psalm 46:1",
            verse: "God is our refuge and strength, an ever-present help in trouble."
        },

        {
            title: "Proverbs 29:25",
            verse: "Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe."
        },

        {
            title: "1 Peter 3:14",
            verse: "“But even if you suffer for doing what is right, God will reward you for it. So don’t worry or be afraid of their threats."
        },

        {
            title: "Deuteronomy 3:22",
            verse: "Do not be afraid of them; the Lord your God himself will fight for you."
        },

        {
            title: "Zephaniah 3:17",
            verse: "The Lord your God is in your midst, A victorious warrior. He will exult over you with joy, He will be quiet in His love, He will rejoice over you with shouts of joy."
        }


    ];


    /* END OF ANXIOUS VERSES ARRAY*/

    /*ANXIOUS PROGRAM*/

    anxiousButton.onclick = () => {

        introQuestion.style.display = "none";
        arrow.style.display = "flex";
        bibleBox.style.display = "block";
        changeAnxiousText();

        nextVerseButton.onclick = () => {

            bibleBox.classList.add("fade-out");
            setTimeout(changeAnxiousText, 300); 
        }

        bibleBox.ontransitionend = () =>{
            bibleBox.classList.remove("fade-out");
        }

    }


    changeAnxiousText = () => {
        let randomVerse = anxiousVerses[Math.floor(Math.random() * anxiousVerses.length)]; /* Gets a random verse object */
        let newTitle = randomVerse.title; /* Puts random verse title in variable to call in innerHTML*/
        let newVerse = randomVerse.verse; /* Puts random verse verse in variable to call in innerHTML*/

        pageTitle.innerHTML = newTitle;
        pageVerse.innerHTML = newVerse;
    }

    /*END OF ANXIOUS PROGRAM*/


    /*LOW VERSES ARRAY*/

    const lowVerses = [

        {
            title: "Psalm 34:17-18 ",
            verse: "When the righteous cry for help, the Lord hears and delivers them out of all their troubles. The Lord is near to the brokenhearted and saves the crushed in spirit."
        },

        {
            title: "Isaiah 41:10",
            verse: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand."
        },

        {
            title: "Matthew 11:28 ",
            verse: "Come to me, all who labor and are heavy laden, and I will give you rest."
        },

        {
            title: "Jeremiah 29:11 ",
            verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."
        },

        {
            title: "Proverbs 3:5-6",
            verse: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."
        },

        {
            title: "Psalm 30:5 ",
            verse: "For his anger is but for a moment, and his favor is for a lifetime. Weeping may tarry for the night, but joy comes with the morning."
        },


        {
            title: "Psalm 23:4",
            verse: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me."
        },

        {
            title: "Psalm 9:9",
            verse: "The Lord is a stronghold for the oppressed, a stronghold in times of trouble."
        },


        {
            title: "Psalm 34:18",
            verse: "The Lord is near to the brokenhearted and saves the crushed in spirit."
        },

        {
            title: "Revelation 21:4",
            verse: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away."
        },

        {
            title: "John 10:10",
            verse: "The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly."
        },

        {
            title: "Isaiah 40:31",
            verse: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint."
        },

        {
            title: "Deuteronomy 31:8 ",
            verse: "It is the Lord who goes before you. He will be with you; he will not leave you or forsake you. Do not fear or be dismayed."
        },

        {
            title: "Psalm 3:3",
            verse: "But you, O Lord, are a shield about me, my glory, and the lifter of my head."
        },

        {
            title: "Matthew 6:33",
            verse: "But seek first the kingdom of God and his righteousness, and all these things will be added to you."
        },

        {
            title: "John 16:33",
            verse: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world."
        },

        {
            title: "Philippians 4:13",
            verse: "I can do all things through him who strengthens me."
        },

        {
            title: "Jeremiah 1:19 ",
            verse: "They will fight against you, but they shall not prevail against you, for I am with you, declares the Lord, to deliver you."
        },

        {
            title: "Matthew 11:28-30",
            verse: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light."
        },

        {
            title: "2 Timothy 1:7",
            verse: "For God gave us a spirit not of fear but of power and love and self-control."
        }






    ];

    /* END OF LOW VERSES ARRAY*/



    /*LOW PROGRAM*/

    lowButton.onclick = () => {

        introQuestion.style.display = "none";
        arrow.style.display = "flex";
        bibleBox.style.display = "block";
        changeLowText();

        nextVerseButton.onclick = () => {
            bibleBox.classList.add("fade-out");
            setTimeout(changeLowText, 300); 
        }

        bibleBox.ontransitionend = () =>{
            bibleBox.classList.remove("fade-out");
        }

    }


    changeLowText = () => {
        let randomVerse = lowVerses[Math.floor(Math.random() * lowVerses.length)]; /* Gets a random verse object */
        let newTitle = randomVerse.title; /* Puts random verse title in variable to call in innerHTML*/
        let newVerse = randomVerse.verse; /* Puts random verse verse in variable to call in innerHTML*/

        pageTitle.innerHTML = newTitle;
        pageVerse.innerHTML = newVerse;
    }

    /*END OF LOW  PROGRAM*/


    /*LONLEY ARRAY*/

    const lonelyVerses = [

        {
            title: "Psalm 27:10",
            verse: "For my father and my mother have forsaken me, But the Lord will take me up."
        },

        {
            title: "Isaiah 43:2",
            verse: "When you pass through the waters, I will be with you; And through the rivers, they will not overflow you. When you walk through the fire, you will not be scorched, Nor will the flame burn you"
        },

        {
            title: "Psalm 73:23-26",
            verse: "But still I am ever with you; you have taken me by my right hand. Your wisdom will be my guide, and later you will put me in a place of honor. Whom have I in heaven but you? And having you I have no desire for anything on earth. My flesh and my heart are wasting away: but God is the Rock of my heart and my eternal heritage."
        },

        {
            title: "Psalm 68:6",
            verse: "Those who are without friends, God puts in families; he makes free those who are in chains; but those who are turned away from him are given a dry land."
        },

        {
            title: "John 15:15",
            verse: "No longer do I call you servants, for the servant doesn’t know what his lord does. But I have called you friends, for everything that I heard from my Father, I have made known to you."
        },

        {
            title: "Matthew 28:20",
            verse: "And be sure of this: I am with you always, even to the end of the age."
        },

        {
            title: "John 14:18",
            verse: "I will not leave you as orphans; I will come to you."
        },

        {
            title: "Deuteronomy 31:6",
            verse: "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you."
        },

        {
            title: "1 Peter 5:7",
            verse: "Cast all your anxiety on him because he cares for you.”"
        },

        {
            title: "2 Timothy 4:16,17",
            verse: "No one stood by me the first time I defended myself; all deserted me. But the Lord stayed with me and gave me strength."
        },


    ];


    /* END OF LONELY ARRAY*/


    /*LONELY PROGRAM*/

    lonelyButton.onclick = () => {

        introQuestion.style.display = "none";
        arrow.style.display = "flex";
        bibleBox.style.display = "block";
        changeLonelyText();

        nextVerseButton.onclick = () => {
            bibleBox.classList.add("fade-out");
            setTimeout(changeLonelyText, 300); 
        }

        bibleBox.ontransitionend = () =>{
            bibleBox.classList.remove("fade-out");
        }

    }


    changeLonelyText = () => {
        let randomVerse = lonelyVerses[Math.floor(Math.random() * lonelyVerses.length)]; /* Gets a random verse object */
        let newTitle = randomVerse.title; /* Puts random verse title in variable to call in innerHTML*/
        let newVerse = randomVerse.verse; /* Puts random verse verse in variable to call in innerHTML*/

        pageTitle.innerHTML = newTitle;
        pageVerse.innerHTML = newVerse;
    }

    /*END OF LONELY  PROGRAM*/






































}