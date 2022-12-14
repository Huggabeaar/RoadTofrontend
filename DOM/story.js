function createStory({ title, imgSrc, isViewed }) {
    return {
        title,
        imgSrc,
        isViewed,
        getTitle: function () {
           return this.title
        },
        getImageSrc: function () {
           return this.imgSrc
        },
        getIsViewed: function () {
           return this.isViewed
        },
    }
}

function buildStoryHTML(story) {
    return `
        <div>
             <h2>${story.getTitle()}</h2>
             <img src = '${story.getImageSrc()}'>
             <p>${story.getIsViewed() ? 'Просмотрено' : 'Не просмотрено'}</p>
        </div>
     `;
}

function renderStories(stories, node) {
    let storiesHTML = ``;
  
    stories.forEach(function (story) {
      storiesHTML += buildStoryHTML(story);
    });
  
    node.innerHTML = storiesHTML;
  };