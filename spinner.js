document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(".loading-spinner-container").style.display = "flex";
    document.body.style.overflow = "hidden";
  } else {
    document.querySelector(".loading-spinner-container").style.display = "none";
    document.body.style.overflow = "auto";
  }
};
