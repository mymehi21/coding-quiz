var count = 0;
     var time = 90;
     var marks = 0;
     var answer = [];
     var timer; 

    //the entire document object using the jQuery function "$()" and passing it the keyword "document" as a parameter. This means that the function inside the parentheses will only be executed once the entire HTML document has been loaded into the browser.
    $(document).ready(function(){
        $('#finish').show();
        $('#Result').hide();

        buttons_manager();
        
        //this is a function to manage the buttons.
        function buttons_manager(){
            if(count > 0){
                $('#prev').show();
                if(count == 4){
                    $('#next').hide();
                    $('#finish').show();
                }
                else{
                    $('#next').show();
                }
            }
            else{
                $('#prev').hide();
            }
        } 
    })

    

        function selected_Answer(){
            for(var i =0 ; i<4; i++){
                var a = document.getElementById("options").children;
                if(a[i].innerHTML == answer[count]){
                    $("#options").children("button")[i].classList.remove("active");
                }
                else{
                }
            }
        }

        function creating_result(data){
            for(var i = 0 ; i<answer.length; i++){
                marks +=5;
            }
            $('#main').hide();

            $("marks").text(marks);
            $("#correct-answer").text(marks / 5);
            $('#percentage').text((marks / 25)* 100 + "%");

            $("#Result").show();
        }

        // hiding an HTML element with the ID "options", and then showing it when an HTML element with the ID "btn" is clicked. also hides all HTML elements with the class "start_page" and an HTML element with the ID "prev".

        $("#options").hide(); //This line uses jQuery to hide an HTML element with the ID "options".
            $('#btn').click(function(){ //attached a click event listener to an HTML element with the ID "btn". When this element is clicked, the function inside the curly braces will be executed.
                $('#options').show(); //used jQuery to show an HTML element with the ID "options".
                adding_Questions(questions,count); //calling a function named "adding_Questions" and passes it two arguments: "questions" and "count".
                $('.start_page').hide(); //Used jQuery to hide all HTML elements with the class "start_page".
                $('#prev').hide(); //Used jQuery to hide an HTML element with the ID "prev".

                timer = setInterval(timer_function , 1000); //creates a timer that will repeatedly call the timer_function function every 1000 milliseconds, and assigns the timer object to the timer variable

                function timer_function(){
                    $('#time').text(time);
                    if(time <= 1){
                        clearInterval(timer);
                        alert("Out of time");
                        creating_result(questions);
                        $("#main").hide();
                        $("#result").show();
                    }
                    time--; 
                }

            })
            function adding_Questions(questions,i){
                $('#question').text($(questions)[i].question);
                $('#options1').text($(questions)[i].option1);
                $('#options2').text($(questions)[i].option2);
                $('#options3').text($(questions)[i].option3);
                $('#options4').text($(questions)[i].option4);
                $('#number').text(Number(i+1));
     
             }

        $(".option").click(function (){

            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            answer[count] = $(this).html();
    
        })

        $('#next').click(function () {
            if(count > answer.length -1){
                alert("Select Atleast 1 Option")
            }
            else{
                count++;
                adding_Questions(questions, count);
                $("#prev").show();
                $(".option").removeClass("active");
                selected_Answer();
            }
        })

        $('#prev').click(function() {
            count--;
            adding_Questions(questions,count);
            selected_Answer();
        })

        $("#finish").click(function(){
            if(count > answer.length -1){
                alert("Select Atleast Option");
            }
            else{
                creating_result(questions);
                clearInterval(timer);
            }
        })

        //This code was first made by me based one what I learned online. Then I had a tutor help me understand every code more and helped me make it work, because the whole thing was not working in the beginning.
