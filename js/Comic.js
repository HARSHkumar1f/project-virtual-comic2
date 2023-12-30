AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "hulk",
        title: "Hulk",
        url: "./assets/thumbnails/hulk.jpg",
      },
      {
        id: "spider",
        title: "Spider",
        url: "./assets/thumbnails/spider.jpg",
      },

      {
        id: "super_man",
        title: "Super man",
        url: "./assets/thumbnails/super_man.jpg",
      },
      {
        id: "venom",
        title: "Venom",
        url: "./assets/thumbnails/venom.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderE1 = this.createBorder(position, item.id);
      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderE1.appendChild(thumbNail);
      // Title Text Element
      const titleE1 = this.createTitleE1(position, item);
      borderE1.appendChild(titleE1);
      this.placesContainer.appendChild(borderE1);
    }
  },
  createBorder: function (position, id) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("id", id);
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityE1.setAttribute("position", position);
    entityE1.setAttribute("material", {
      color:"red",
      opacity:1,
    });
    //CURSOR
    entityE1.setAttribute("cursor-listener", {});
    
    return entityE1;
  },
  createThumbNail: function (item) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("visible", true);
    entityE1.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityE1.setAttribute("material", {src: item.url});
    return entityE1;
  },
  createTitleE1: function (position,item) {
    const entityE1 = document.createElement("a-entity");
    entityE1.setAttribute("text", {
      font: "exo2bold",
      align: "centre",
      width: 70,
      color: "blue",
      value: item.title,

    });
    const elPosition = position;
    elPosition.y = -20;
    entityE1.setAttribute("position", elPosition);
    entityE1.setAttribute("visible", true);
    return entityE1
  }, 
  
});
