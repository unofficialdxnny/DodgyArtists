// redirect to the last visited page


if ("lastPage" in localStorage) {
    window.location.href = `https://dodgyartists.netlify.app/${localStorage.getItem("lastPage")}`
} else {

    setTimeout(() => {
        window.location.href = "https://dodgyartists.netlify.app"
      }, 2500);

    
    
}