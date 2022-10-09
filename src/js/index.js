const url =
  'https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=["category1","category2","category3"]&pretty=true';

function getData(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function () {
      console.log(new Error("Error: Something went wrong"));
    });
}
window.onload = getData(url).then((data) => {
  addElements(data);
});

function addElements(arr) {
  let body = document.getElementsByTagName("body")[0];
  let container = document.createElement("div");
  container.classList.add("container");
  arr.forEach((item) => {
    console.log(item);
    container.appendChild(createRow(item));
  });
  body.appendChild(container);
  console.log(body);
  return body;
}

const createRow = (obj) => {
  let { fname, lname, category } = obj;
  let initials = `${fname.substring(0, 1).toUpperCase()}${lname
    .substring(0, 1)
    .toUpperCase()}`;
  let fullName = `${fname.substring(0, 1).toUpperCase()}${fname
    .substring(1)
    .toLowerCase()} ${lname.substring(0, 1).toUpperCase()}${lname
    .substring(1)
    .toLowerCase()}`;
  let categoryName = `${category.substring(0, 8)} ${category.substring(8, 9)}`;

  let row = document.createElement("div");
  row.classList.add("row");
  let profileSection = document.createElement("div");
  // let nameInitials = document.createElement("span");
  let categorySection = document.createElement("div");
  let nameSection = document.createElement("p");
  nameSection.classList.add("full-name");
  // nameInitials.textContent = initials;
  profileSection.classList.add("name-initials");
  profileSection.textContent = initials;
  // profileSection.appendChild(nameInitials);
  nameSection.textContent = fullName;
  categorySection.classList.add("category");
  categorySection.textContent = categoryName;
  row.appendChild(profileSection);
  row.appendChild(nameSection);
  row.appendChild(categorySection);
  return row;
};
function filterCategory(category) {
  return arr.filter((item) => item.category == category);
}
