
var SL = {
  init: function(){
    var $mainContainer = $(".container-grid");
    // Cards
    $mainContainer.on("click",".add-card", this.cards.add)
                  .on("click",".delete-card", this.cards.delete);
    // Lists
    $mainContainer.on("click",".delete-list", this.list.delete);
    $(".add-list").on("click", this.list.add);
    this.dragula.init();
  },
  cards: {
    HTML : function(id, cardName){
      cardName = cardName || '';
      return '<div id="' + id + '" class="card"><button class="delete-card"><i class="far fa-trash-alt"></i></button><input type="text" value="' + cardName + '" /></div>';
    }, 
    add: function(){
      var cards = SL.cards,
          $container = $(this).closest(".list-container"),
          id = _.uniqueId('card_');
      $container.find(".cards").append(cards.HTML(id));
    },
    delete: function(){
      $card = $(this).closest(".card");
      $card.remove();
    }
  },
  list: {
    HTML: function(id, listName){
      listName = listName || '';
      return "<div id='" + id + "' class='list-container'>" +
              "<button class='list-handler'><i class='fas fa-arrows-alt'></i></button>" +
              "<button class='delete-list'><i class='fas fa-ban'></i></button>" +
              "<div class='col-header'><h1 contenteditable='true'>" + listName + "</h1></div>" + 
              "<div class='input'><button class='btn add-card'><i class='fas fa-plus-circle'></i></button></div>" + 
             "<div class='cards'></div></div>";
    },
    add: function(){
      var list = SL.list,
          id = _.uniqueId('list_');
      $(".container-grid").append(list.HTML(id));
      
      var dragula = SL.dragula;
      dragula.listInstance.containers.push($("#" + id).find(".cards")[0]);
    },
    delete: function(){
      var $container = $(this).closest(".list-container");
      $container.remove();
    }
  },
  dragula:{
    listInstance: null,
    cardsInstance: null,
    init: function(){
      var listOptions = {
        moves: function (el, container, handle) {
    
          return handle.classList.contains('card');
        }
      };
      
      // move lists
      var columnOptions = {
        moves: function (el, container, handle) {
          return $(handle).closest('.list-handler').length > 0;
        },
        direction: 'horizontal'
      };
      
      this.listInstance = dragula([],listOptions)
      this.columnInstance = dragula([$('.container-grid')[0]],columnOptions);
    }
  }
};

(function(SL, $, dragula){
  "use strict";

  $(function(){
    SL.init();
  });
  
})
( 
  SL,
  jQuery,
  dragula
);




  

  
  