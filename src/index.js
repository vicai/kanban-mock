import $ from "jquery";

(function() {
  $(".call-people").submit(function() {
    $.post("https://jsonplaceholder.typicode.com/comments", {}, function(
      data,
      status
    ) {
      alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);

      let closestElement = document
        .getElementsByClassName("call-people")[0]
        .closest(".kanban");
      let newTask = document.createElement("div");
      newTask.className = "task";
      newTask.textContent = JSON.stringify(data);
      closestElement.appendChild(newTask);
    });
    return false;
  });

  function handleTaskClick(event, task) {
    task.classList.toggle("done");
  }

  function handleAddClick(event, addButton) {
    let closestElement = addButton.closest(".kanban");
    let newTask = document.createElement("div");
    newTask.className = "task";
    closestElement.appendChild(newTask);
  }

  Array.from(document.getElementsByClassName("task")).forEach(function(
    element
  ) {
    element.addEventListener("click", e => handleTaskClick(e, element));
  });

  Array.from(document.getElementsByClassName("add-task-button")).forEach(
    function(element) {
      element.addEventListener("click", e => handleAddClick(e, element));
    }
  );
})();
