// import('/src/bugs.js');
var randomImg = function(width, height) {return "http://picsum.photos/" + width + "/" + height + "/?image=" + Math.floor(Math.random()*1000);};
var projectObj = [
  {
    id: 0,
    selected: false,
    title: "ABOUT",
  },
  {
    id: 1,
    selected: false,
    title: "CONTACT",
  },
  // {
  //   id: 2,
  //   selected: false,
  //   title: "PHOTOS",
  // },
  {
    id: 2,
    selected: false,
    title: "PROJECTS",
    projectList: [
      {
        title: "PRODIGAL PICTURES",
        image: "/img/projects/prodigalpictures.jpg",
        desc: "Prodigal Pictures, a motion graphic design studio, asked me to build their website. It features an animated home-page intro and many other custom animations/transitions. I worked closely with their lead designer to get the look and feel just right. Built with <b>PHP</b> and the <b>Bootstrap</b> framework.",
        link: "http://prodigalpictures.com"
      },
      {
        title: "CUBESHARK",
        image: "/img/projects/cubeshark.jpg",
        desc: "Cubeshark is my alias for music. This site was built to showcase my production. With the Soundcloud API unavailable for new sign-ups at the time of making this, I had to make use of the limited embedded player API to play the music. Built on top of <b>VueJS</b>.",
        link: "http://cubeshark.net"
      },
      {
        title: "JOY FOR THIS JOURNEY",
        image: "/img/projects/joyforthisjourney.jpg",
        desc: "Build for a life-coaching client. This was a basic informational website for my client's business. No longer in production. Built using the <b>Laravel</b> framework alongside <b>PHP</b>.",
        link: null
      },
      {
        title: "CLEMMER GL",
        image: "/img/projects/clemmergl.jpg",
        desc: "Built for a client I was working for, this was a site for a single software product called Clemmer GL. I worked with a lead visual designer to bring her visual design ideas into a functional website. Built with a <b>Bootstrap</b> frame.",
        link: "http://clemmergl.com"
      },
      {
        title: "WEST BEACH MOSAICS",
        image: "/img/projects/westbeachmosaics.jpg",
        desc: "A simple informational website/logo package set up for a local artist gift-shop and mosaics small business. Uses the <b>Bootstrap</b> framework.",
        link: "http://westbeachmosaics.com"
      },
      {
        title: "RANSOM NOTE GENERATOR",
        image: "/img/projects/ransomnote.jpg",
        desc: "A fun project I made while learning <b>VueJS</b>. Letter styles are randomly assigned as you type. You can send notes to your friends, just please do not actually use this for any real ransoms.",
        link: "http://kyount.github.com/randomransom"
      },
      {
        title: "GOODBYE PATCHES",
        image: "/img/projects/goodbyepatches.jpg",
        desc: "A fun web toy I made based on the popular card game Hearthstone emulating animations and sounds from the game. Warning: might be loud.",
        link: "http://kyount.github.com/goodbyepatches"
      }
    ]
  }
];
var colors = [
  {
    name: "default",
    light: '#c6dec0',
    neutral: '#8acd94',
    dark: '#63a088',
    bg: '#202d31',
  },
  {
    name: "grey",
    light: '#F6F6F6',
    neutral: '#F6F6F6',
    dark: '#666666',
    bg: '#252525',
  },
]

var slider; //slider variable

var vm = new Vue({
  el: '#app',
  data: {
    aboutBox: false,
    contactBox: false,
    isProjectShowing: false,
    isInfoShowing: false,
    activeProject: -1,
    projects: projectObj,
    projectList: projectObj[2].projectList,
    colorList: colors,
    themeMenuActive: false,
    activeTheme: 0
  },
  computed: {
    isMobileDevice: function() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
  },
  methods: {
    randomPhoto: function(width, height) {
      return "http://picsum.photos/" + width + "/" + height + "/?image=" + Math.floor(Math.random()*1000);
    },
    toggleThemeMenu: function() {
      this.themeMenuActive = !this.themeMenuActive;
    },
    showAbout: function() {
      this.hideContact();
      this.aboutBox = true;
    },
    hideAbout: function() {
      this.aboutBox = false;
    },
    showContact: function() {
      this.hideAbout();
      this.contactBox = true;
    },
    hideContact: function() {
      this.contactBox = false;
    },
    showProject: function(project) {
      this.activeProject = project.id;
      this.isProjectShowing = true;
    },
    hideProject: function() {
      this.activeProject = -1;
      this.isProjectShowing = false;
      window.scrollTo(0, 0);
    },
    computeBG: function(image) {
      return "background-image: url(" + image + ")";
    },
    changeTheme: function(index) {
      var elm = document.getElementsByTagName('html')[0];
      elm.style.cssText = '--bgcolor:' + this.colorList[index].bg
      + ';--lightcolor:' + this.colorList[index].light
      + ';--darkcolor:' + this.colorList[index].dark
      + ';--neutralcolor:' + this.colorList[index].neutral + ';';
      this.activeTheme = index;
    }
  },
  mounted: function() {
    document.getElementById('fadeIn')
    .velocity({opacity:0}, {duration: 1000})
    .velocity({display:'none'}, {duration: 0});

  }
});
