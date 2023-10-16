// redirect to the last visited page


if ("lastPage" in localStorage) {
    setTimeout(() => {
        window.location.href = `https://dodgyartists.netlify.app/${localStorage.getItem("lastPage")}`
      }, 4000);} else {

    setTimeout(() => {
        window.location.href = "https://dodgyartists.netlify.app"
      }, 4000);

    
    
}