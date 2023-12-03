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

        $("#posts").on("click", ".comment-button", function(){
            tweeter.addComment($(this).closest("div").find(".comment-input").val(), $(this).closest(".post").attr('data-id'));
            renderer.renderPost(tweeter.getPosts());
        });
        
        $("#posts").on("click",".remove", function(){
            tweeter.removeComment($(this).closest(".post").attr('id'), $(this).closest("div").find(".comment").attr('id'))
            renderer.renderPosts(tweeter.getPosts())
        })
        
        
        
        
        
        
