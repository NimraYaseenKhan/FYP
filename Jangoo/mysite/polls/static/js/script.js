    var outputArea = $("#chat-output");

    $("#user-input-form").on("submit", function (e) {

        e.preventDefault();

        var message = $("#user-input").val();

        outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);
        setTimeout(function () {
            outputArea.append(`
      <div class='user-message'>
        <div class='message'>
          {{reply}}
        </div>
      </div>
    `);
        }, 250);

        $("#user-input").val("");

    });