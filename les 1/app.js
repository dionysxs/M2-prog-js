class App
{
    runApplication()
    {
        console.log("hello world!");

        let appNaam = "opdracht";
        let versienummer = "0.9 double";
        let versiedatum = "12/20/2022";
        let autheur = "Diya Jawalapersad";
        let copyright = "Mediacollege Amsterdam";
        let distributeur = "Diya";
        let darkmode = true;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}
let app = new App();
app.runApplication();