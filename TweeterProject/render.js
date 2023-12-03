const Renderer = function () {
  const renderPost = function (_posts) {
      $("#posts").empty();

      for (let post of _posts) {
          const postHTML = $(`<div class="post" data-id="${post.id}">
                                <span class="post-text">${post.text}</span>
                                <input class="comment-input" type="text" placeholder="Got something to say?">
                                <button class="comment-button" onclick="addComment('${post.id}')">Comment</button>
                                <button class="delete-post" onclick="deletePost('${post.id}')">Delete Post</button>
                             </div>`);
          $("#posts").append(postHTML);

          for (let comment of post.comments) {
              const cmntHTML = $(`<div class="comment" data-id="${comment.id}">
                                     <span class="delete-comment" onclick="deleteComment('${post.id}', '${comment.id}')">X</span>
                                     ${comment.text}
                                 </div>`);
              postHTML.append(cmntHTML);
          }
      }
  };

  return { renderPost };
};
