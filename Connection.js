var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql123",
    database: "Battletracks_db"
});

con.connect(function(err) {
    if(err) throw err;
    else {
        console.log("Connected");
    }
});

exports.procUser = procUser;
function procUser(profile, cb) {
    //login or register user
    //var z = JSON.parse(JSON.stringify(profile));
    console.log(profile.emails[0].value);
    con.query("SELECT * FROM users WHERE email = '" + profile.emails[0].value + "'", function(err, user_info) {
        if(err) {
            //console.log("error");
            //console.log(err);
            cb(err);
        } else {
            /*console.log("result!");
            console.log(user_info.length);
            console.log(user_info;*/

            if(user_info.length == 0) {
                //user currently not in database
                //insert user into database
                con.query("INSERT INTO users VALUE (NULL, '"+ profile.emails[0].value +"','" + profile.displayName + "' ,'" + profile.name.givenName + "', '" + profile.name.familyName + "', " +
                    "0, 0, 0, 0)");
            }
            //pass user information to server
        }
    });
}

//module.exports = con;