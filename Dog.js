export default class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { age, avatar, bio, name } = this;

    return `
      <img id="main-image" src="${avatar}">
        <div id="content-text">
          <div id="name">${name}, ${age}</div>
          <div id="comment">${bio}</div>
        </div>
      </img>
    `
  }
}
