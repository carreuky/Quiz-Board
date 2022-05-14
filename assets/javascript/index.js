per = 0;
            present = "";
            function submitToJs() {
                marks = 0;
                // The checked property sets or returns the checked state of a checkbox.
                // check inputs if selected
                // question 1
                if (document.getElementById('true').checked ||
                    document.getElementById('false').checked ||
                    document.getElementById('false').checked ||
                    document.getElementById('false').checked) {
                    var q1 = document.getElementById('t1').checked;
                    if (q1 == true) {
                        marks = marks + 1;
                    } else {
                        marks = marks + 0;
                    }
                } else {
                    alert("Please answer Question 1 ");
                    return;
                }
                // question2
                if (document.getElementById('true').checked ||
                    document.getElementById('false').checked ||
                    document.getElementById('fasle').checked ||
                    document.getElementById('false').checked) {
                    var q2 = document.getElementById('true').checked;
                    if (q2 == true) {
                        marks = marks + 1;
                    } else {
                        marks = marks + 0;
                    }
                } else {
                    alert("Please answer question 2 ");
                    return;
                }
                if (document.getElementById('true').checked ||
                    document.getElementById('false').checked ||
                    document.getElementById('fasle').checked ||
                    document.getElementById('false').checked) {
                    var q2 = document.getElementById('true').checked;
                    if (q2 == true) {
                        marks = marks + 1;
                    } else {
                        marks = marks + 0;
                    }
                } else {
                    alert("Please answer question 3 ");
                    return;
                }
                // // question3
                // if (document.getElementById('t3').checked ||
                //     document.getElementById('af3').checked ||
                //     document.getElementById('bf3').checked ||
                //     document.getElementById('cf3').checked) {
                //     var q3 = document.getElementById('t3').checked;
                //     if (q3 == true) {
                //         marks = marks + 1;
                //     } else {
                //         marks = marks + 0;
                //     }
                // } else {
                //     alert("Please answer Question 3 ");
                //     return;
                // }
                // // question4
                // if (document.getElementById('t4').checked ||
                //     document.getElementById('af4').checked ||
                //     document.getElementById('bf4').checked ||
                //     document.getElementById('cf4').checked) {
                //     var q4 = document.getElementById('t4').checked;
                //     if (q4 == true) {
                //         marks = marks + 1;
                //     } else {
                //         marks = marks + 0;
                //     }
                // } else {
                //     alert("Please answer Question 4 ");
                //     return;
                // }
                // // question5
                // if (document.getElementById('t5').checked ||
                //     document.getElementById('af5').checked ||
                //     document.getElementById('bf5').checked ||
                //     document.getElementById('cf5').checked) {
                //     var q5 = document.getElementById('t5').checked;
                //     if (q5 == true) {
                //         marks = marks + 1;
                //     } else {
                //         marks = marks + 0;
                //     }
                // } else {
                //     alert("Please answer Question 5 ");
                //     return;
                // }
                var per = (marks / 5) * 100;
                if (per >= 80 && per <= 100) {
                    var present = "Exellently passes ";
                } else if (per >= 50 && per < 80) {
                    var present = "Fairly passed ";
                } else {
                    var present = "Retake the test ";
                }
                alert((per) + "% ");
                alert("Your score is : " + q1 + " " + q2 + " " + q3 + " " + q4 + " " + q5);
                alert(present);
                var p1_target = document.getElementById("p1");
                var p2_target = document.getElementById("p2");
                p1_target.innerHTML += "<p>You have scored : " + per + "</p>";
                p2_target.innerHTML += " <p> Comment: " + present + " </p>";
                return false;
            }
