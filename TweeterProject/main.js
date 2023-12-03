        const tweeter = TweeterModule();
        const renderer = Renderer();
        
        function post() {
            let inputValue = $("#input").val();
            tweeter.addPost(inputValue);
            renderer.renderPost(tweeter.getPosts())
        }

        
        $("#posts").on("click", ".delete-post", function(){
            tweeter.removePost($(this).closest(".post").attr('data-id'))
            renderer.renderPost(tweeter.getPosts())
        });


        $("#posts").on("click",".comment-button", function() {
            tweeter.addComment ($(this).closest(".post").attr("data-id"),($(this).siblings(".comment-input").val()))
            renderer.renderPost(tweeter.getPosts());
         })

         $("#posts").on("click", ".delete-comment", function() {
            tweeter.removeComment ($(this).closest(".post").attr("data-id"),($(this).closest(".comment").attr("data-id")))
            renderer.renderPost(tweeter.getPosts());
         })
        
        
        
        
        
        
