$(document).ready(function () {
    $("form#forms").submit(function (event) {
        event.preventDefault();
        const gender = $("input:radio[name=Gender]:checked").val();

        // male page//
        if (gender === 'Male') {
            window.location.href = "http://127.0.0.1:5502/sitePages/maleForm.html"
            // female page
        } else {
            window.location.href = "http://127.0.0.1:5502/sitePages/femaleForm.html"
        };
    });

    $("#formBodyOne").submit(function (event) {
        const ethnicityInput = $("select#ethnicity").val();
        const bodyShapeInput = $("select#bodyShape").val();
        const musicInput = $("select#music").val();
        const heightInput = $("select#height").val();
        const colorInput = $("select#color").val();
        const petInput = $("select#pet").val();

        // male forms
        if (ethnicityInput === "Caucasian"  && bodyShapeInput === "Slim" && musicInput === "Hip-Hop" && heightInput === "Tall" && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Dog") {
            $("#formBodyOne").hide();
            $(".matchEight").show(1000);

        } else if ((ethnicityInput === "Caucasian" ) && bodyShapeInput === "Slim" && (musicInput === "Gospel" || musicInput === " Hip-Hop") && (heightInput === "Short" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Dog") {
            $("#formBodyOne").hide();
            $(".matchFive").show(1000);

        } else if ((ethnicityInput === "Africa" || ethnicityInput === "African American" ) && bodyShapeInput === "Muscular" &&  musicInput === "Afro" && (heightInput === "Short" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Cat") {
            $("#formBodyOne").hide();
            $(".matchNine").show(1000);

        } else if ((ethnicityInput === "Caucasian" || ethnicityInput === "African American" ) && bodyShapeInput === "Muscular" && musicInput === "Gospel"  && (heightInput === "Short" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Dog") {
            $("#formBodyOne").hide();
            $(".matchSix").show(1000);

        } else if ((ethnicityInput === "African American" || ethnicityInput === "Africa") && bodyShapeInput === "Slim" &&  musicInput === "Hip-Hop" && (heightInput === "Tall" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Cat") {
            $("#formBodyOne").hide();
            $(".matchOne").show(1000);

        } else if ((ethnicityInput === "Africa" || ethnicityInput === "African American") && bodyShapeInput === "Slim" && (musicInput === "Afro" || musicInput === "Hip-Hop") && (heightInput === "Short" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Cat") {
            $("#formBodyOne").hide();
            $(".matchThree").show(1000);

        } else if ((ethnicityInput === "Africa" || ethnicityInput === "African American") && bodyShapeInput === "Muscular" && (musicInput === "Afro" || musicInput === "Hip-Hop") && (heightInput === "Average" || heightInput === "Short") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Dog") {
            $("#formBodyOne").hide();
            $(".matchFour").show(1000);

        } else if ((ethnicityInput === "African American" ) && bodyShapeInput === "Muscular" && musicInput === "Hip-Hop" && (heightInput === "Average" || heightInput === "Short") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Cat") {
            $("#formBodyOne").hide();
            $(".matchTwo").show(1000);

        } else if ((ethnicityInput === "Africa" || ethnicityInput === "African American" || ethnicityInput === "Caucasian") && bodyShapeInput === "Slim" &&  musicInput === "Afro" && (heightInput === "Tall" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Dog") {
            $("#formBodyOne").hide();
            $(".matchSeven").show(1000);

        } else if ((ethnicityInput === "Africa" || ethnicityInput === "African American") && bodyShapeInput === "Muscular" && musicInput === "Gospel" && (heightInput === "Short" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Dog") {
            $("#formBodyOne").hide();
            $(".matchTen").show(1000);

        } else if ((ethnicityInput === "Africa" || ethnicityInput === "African American " || ethnicityInput === "Caucasian") && bodyShapeInput === "Muscular" && musicInput === "Hip-Hop" && (heightInput === "Average" || heightInput === "Short") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") && petInput === "Cat") {
            $("#formBodyOne").hide()
            $(".matchEleven").show(1000);

        } else if ((ethnicityInput === "Africa" || ethnicityInput === "African American " || ethnicityInput === "Caucasian") && bodyShapeInput === "Slim" && (musicInput === "Gospel" || musicInput === "Afro") && (heightInput === "Tall" || heightInput === "Average") && (colorInput === "Blue" || colorInput === "Red" || colorInput === "Green") & petInput === "Dog") {
            $("#formBodyOne").hide();
            $(".matchTwelve").show(1000);

        }else {
            alert("No Match");
        }
        event.preventDefault()
    });

    // female forms
    $("#formBodyTwo").submit(function(event){
        const ethnic = $("select#ethnic").val();
        const bodyShape = $("select#bodyShape").val();
        const musicInput = $("select#music").val();
        const heightInput = $("select#height").val();
        const favColor = $("select#favoriteColor").val();
        const favPet = $("select#favoritePet").val();

        if (ethnic === "Caucasian" && bodyShape === "Curvy" && musicInput === "Hip-Hop" && (heightInput === "Short" || heightInput === "Average") && (favColor === "Blue" || favColor === "Pink" || favColor === "Red") && favPet === "Dog"){
            $("#formBodyTwo").hide();
            $(".profileThree").show(1000);

        }else if((ethnic === "Caucasian" || ethnic === "African American") && bodyShape === "Slim" && musicInput === "Gospel" && (heightInput === "Tall" || heightInput === "Average") && (favColor === "Blue" || favColor === "Pink" || favColor === "Red") && favPet === "Dog"){
            $("#formBodyTwo").hide();
            $(".profileSeven").show(1000);

        }else if((ethnic === "Africa" || ethnic === "African American") && bodyShape === "Slim" && musicInput === "Afro" || musicInput === "Hip-Hop" && heightInput === "Tall" && (favColor === "Blue" || favColor === "Pink" || favColor === "Red") && favPet === "Cat"){
            $("#formBodyTwo").hide();
            $(".profileOne").show(1000);

        }else if((ethnic === "Caucasian" || ethnic === "Aafrican American") && bodyShape === "Slim" && musicInput === "Hip-Hop" && (heightInput === "Tall" || heightInput === "Average") && (favColor === "Blue" || favColor === "Pink" || favColor === "Red") && favPet === "Dog"){
            $("#formBodyTwo").hide();
            $(".profileTwo").show(1000);

        }else if((ethnic === "Africa" || ethnic === "African American") && bodyShape === "Slim" && musicInput === "Gospel" && (heightInput === "Average" || heightInput === "Average" || heightInput === "Tall") && (favColor === "Blue" || favColor === "Pink" || favColor === "Red") && favPet === "Cat"){
            $("#formBodyTwo").hide();
            $(".profileFive").show(1000);

        }else if((ethnic === "Africa" || ethnic === "African American") && bodyShape === "Curvy" && musicInput === "Gospel" && (heightInput === "Average" || heightInput === "Short") && (favColor === "Blue" || favColor === "Pink" || favColor === "Red") && favPet === "Cat"){
            $("#formBodyTwo").hide();
            $(".profileSix").show(1000);

        }else if((ethnic === "Africa" || ethnic === "African American") && bodyShape === "Curvy" && musicInput === "Afro" && (heightInput === "Short" || heightInput === "Average") && (favColor === "Blue" || favColor === "Pink" || favColor === "Red")&& favPet === "Dog"){
            $("#formBodyTwo").hide();
            $(".profileEight").show(1000);
            
        }else if((ethnic === "African American" || ethnic === "Caucasian") && bodyShape === "Curvy" && musicInput === "Gospel" && (heightInput === "Average" || heightInput === "Short") && (favColor === "Blue" || favColor === "Pink" || favColor === "Red")&& (favPet === "Dog" || favPet === "Cat")){
            $("#formBodyTwo").hide();
            $(".profileFour").show(1000);
        }else{
            alert("No match Found");
        }
        event.preventDefault();
    });
});




