const body = document.body,
  rmEl = document.getElementById("remove"),
  addEl = document.getElementById("add"),
  colorEl = document.getElementById("color"),
  object = document.getElementById("object"),
  addOption = document.getElementById("addOption"),
  colorOption = document.getElementById("colorOption");

body.addEventListener("click", (e) => {
  if (e.target.parentElement == addOption && e.target.textContent != null) {
    addElement(e.target.textContent);
  } else if (
    e.target.parentElement == colorOption &&
    document.querySelector(".active") != undefined &&
    e.target.textContent != null
  ) {
    document
      .querySelector(".active")
      .firstElementChild.firstElementChild.setAttribute(
        "fill",
        `${e.target.textContent.toLowerCase()}`
      );
  }
});

function addElement(target) {
  if (document.querySelector(".active") == undefined) {
    const div = document.createElement("div");
    if (target.toLowerCase() == "circle") {
      div.innerHTML = `<svg> <circle cx="62" cy="50" r="45"/> </svg>`;
    } else if (target.toLowerCase() == "rectangle") {
      div.innerHTML = `<svg>
        <rect x="25" y="10" width="80" height="80" />
      </svg>`;
    } else {
      div.innerHTML = `<svg>
        <polygon points="10,90 120,90 65,5" />
      </svg>`;
    }
    return object.appendChild(div);
  } else {
    const div = document.querySelector(".active");

    if (target.toLowerCase() == "circle") {
      div.innerHTML = `<svg> <circle cx="62" cy="50" r="45"/> </svg>`;
    } else if (target.toLowerCase() == "rectangle") {
      div.innerHTML = `<svg>
        <rect x="25" y="10" width="80" height="80" />
      </svg>`;
    } else {
      div.innerHTML = `<svg>
        <polygon points="10,90 120,90 65,5" />
      </svg>`;
    }
  }
}

rmEl.addEventListener("click", () => {
  if (document.querySelector(".active") != undefined)
    object.removeChild(document.querySelector(".active"));
});

object.addEventListener("click", (e) => {
  object.querySelectorAll("div").forEach((i) => {
    if (
      i == e.target ||
      i == e.target.parentElement ||
      i == e.target.parentElement.parentElement
    ) {
      i.classList.toggle("active");
    } else {
      i.classList.remove("active");
    }
  });
});

addEl.onclick = () => {
  addOption.classList.toggle("classHide");
};

colorEl.onclick = () => {
  colorOption.classList.toggle("classHide");
};
