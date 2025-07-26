const inputBox = $("#todo-input");
const listContainer = $("#todo-list");


$("#submit-button").on("click", function(){
    // Use .val() to get the value from a jQuery input
    if(inputBox.val() === ''){
        alert("You must write something")
    } else{
        // Use jQuery to create the <li> and set its text
        let li = $("<li></li>");
        li.text(inputBox.val());
        listContainer.append(li);
        let span = $("<span></span>");
        span.html('<img src="images/close.png" alt="Close" class="close-btn">');
        li.append(span);
    }
    inputBox.val("")
});

$("#todo-list").on("click", ".close-btn", function(e) {
    $(this).closest("li").remove();
    e.stopPropagation();
});

$("#todo-list").on("click", "li", function() {
    $(this).css("text-decoration", "line-through");
});

$("#clear-tasks").on("click", function(){
    $("li").remove();
})