const firebaseConfig = {
    apiKey: "AIzaSyC1qfrpttkA2a4Ww6JI627U9qmi2-Q87FY",
    authDomain: "trial-project-20b4c.firebaseapp.com",
    databaseURL: "https://trial-project-20b4c-default-rtdb.firebaseio.com",
    projectId: "trial-project-20b4c",
    storageBucket: "trial-project-20b4c.appspot.com",
    messagingSenderId: "458445394475",
    appId: "1:458445394475:web:29eeaac17bb48c3b43d06e",
    measurementId: "G-01BQMPN3PN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/contactForm").on('value', function(snapshot) {
        var tableBody = document.getElementById('data-table-body');
        tableBody.innerHTML = ""; // Clear existing table data

        snapshot.forEach(function(childSnapshot) {
            var roomData = childSnapshot.val();

            // If the child node has additional names, retrieve and append them to the table
            if (roomData && typeof roomData === 'object') {
                // Access the values directly using the keys
                var name = roomData.name;
                var email = roomData.emailid;
                var msgContent = roomData.msgContent;

                // Create a new row in the table
                var newRow = document.createElement('tr');

                // Create and append table cells with name, email, and message content
                var nameCell = document.createElement('td');
                nameCell.textContent = name || ""; // Use default value if name is undefined
                newRow.appendChild(nameCell);

                var emailCell = document.createElement('td');
                emailCell.textContent = email || ""; // Use default value if email is undefined
                newRow.appendChild(emailCell);

                var msgContentCell = document.createElement('td');
                msgContentCell.textContent = msgContent || ""; // Use default value if msgContent is undefined
                newRow.appendChild(msgContentCell);

                // Append the new row to the table body
                tableBody.appendChild(newRow);
            }
        });
    });
}

// Call the function to populate the table
getData();
