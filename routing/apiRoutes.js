// $("#submit-btn").on("click", function (event) {
//     event.preventDefault();
//     const friendData = {
//       q1: $("").val().trim(),
//       q2: $("").val().trim(),
//       q3: $("").val().trim(),
//       q4: $("").val().trim(),
//       q5: $("").val().trim(),
//       q6: $("").val().trim(),
//       q7: $("").val().trim(),
//       q8: $("").val().trim(),
//       q9: $("").val().trim(),
//       q10: $("").val().trim()
//     };
//     $.post("/api/friendData", newTable, function (data) {
//       console.log(data);
//     });
//   });

//   app.get("/api/friendData/:finderData", function(req, res) {
//     for (var i = 0; i < reservations.length; i++) {
//         return res.json(reservations[i]);
//     }
// });

// Example
// //"name":"Ahmed",
// "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
// "scores":[
//     5,
//     1,
//     4,
//     4,
//     5,
//     1,
//     2,
//     5,
//     4,
//     1
//   ]
// }